using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ThePantry.Data;
using ThePantry.Data.Entities;
using ThePantry.ViewModels;

namespace ThePantry.Controllers
{
    [Route("/api/[Controller]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    public class PantriesController : ControllerBase
    {
        private readonly IPantryRepository _repository;
        private readonly ILogger<PantriesController> _logger;
        private readonly IMapper _mapper;
        private readonly LinkGenerator _linkGenerator;
        private readonly UserManager<User> _userManager;

        public PantriesController(IPantryRepository repository, ILogger<PantriesController> logger, IMapper mapper, LinkGenerator linkGenerator, UserManager<User> userManager)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
            _linkGenerator = linkGenerator;
            _userManager = userManager;
        }

        [HttpGet]
        public ActionResult<PantryViewModel> ShowPantryByUser()
        {
            try
            {
                var userName = User.Identity.Name;
                var userPantry = _repository.GetPantryByUser(userName);
                if (userPantry != null)
                {
                    return Ok(_mapper.Map<PantryViewModel>(userPantry));
                }
                else
                {
                    return NotFound("Can't locate pantry.");
                }
            }
            catch (Exception exception)
            {
                _logger.LogError($"Failed to show Pantry: {exception}");
                return BadRequest("Failed to get Pantry.");
            }
        }

        [HttpGet("{pantryId:int}")]
        public ActionResult<PantryViewModel> ShowPantryById(int pantryId)
        {
            try
            {
                var pantry = _repository.GetPantryById(pantryId);
                if (pantry != null)
                {
                    return Ok(_mapper.Map<PantryViewModel>(pantry));
                }
                else
                {
                    return NotFound();
                }
                
            }
            catch (Exception exception)
            {

                _logger.LogError($"Failed to get Pantry: {exception}");
                return BadRequest("Failed to get pantry.");
            }
        }

        [HttpGet("{pantryId:int}")]
        public ActionResult<MealViewModel[]> FindMealsWithIngredients(int pantryId)
        {
            try
            {
                var ingredientsInPantry = _repository.GetPantryIngredientsByPantryId(pantryId);
                var ingredientNames = ingredientsInPantry.Select(ingr => ingr.Ingredient.Name);
                var availableMeals = _repository.FindMealsByIngredients(ingredientNames);
                return _mapper.Map<MealViewModel[]>(availableMeals);

            }
            catch (Exception exception)
            {
                _logger.LogError($"Unable to search for Meals using this Pantry: {exception}");
                return BadRequest("Unable to search for Meals using this Pantry.");
            }
        }

        [HttpPost]
        public async Task<ActionResult> CreatePantry([FromBody]PantryViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var pantryIngredients = new List<PantryIngredient>();
                    foreach(var pantryIngredientViewModel in model.Ingredients)
                    {
                        var pantryIngredient = _mapper.Map<PantryIngredient>(pantryIngredientViewModel);

                        if (_repository.IngredientExists(pantryIngredient.Ingredient))
                        {
                            pantryIngredient.Ingredient = _repository.GetIngredientByName(pantryIngredientViewModel.Ingredient.Name);
                        }
                        else
                        {
                            var newIngredient = _mapper.Map<IngredientViewModel, Ingredient>(pantryIngredientViewModel.Ingredient);
                            _repository.AddEntity(newIngredient);
                        }
                        pantryIngredients.Add(pantryIngredient);
                    }
                    var newPantry = _mapper.Map<PantryViewModel, Pantry>(model);

                    var currentUser = await _userManager.FindByNameAsync(User.Identity.Name);
                    newPantry.User = currentUser;
                    newPantry.PantryIngredients = pantryIngredients;
                    _repository.AddEntity(newPantry);
                    if (_repository.SaveAll())
                    {
                        var newURL = _linkGenerator.GetPathByAction("ShowPantryById", "Pantries", new { id = newPantry.PantryId });
                        if (string.IsNullOrWhiteSpace(newURL))
                        {
                            _logger.LogError("Could not save pantry to Db");
                            return BadRequest("Could not use this pantry identifier to add pantry to Database.");
                        }
                        return Created($"{newURL}", _mapper.Map<Pantry, PantryViewModel>(newPantry));
                    }
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception exception)
            {
                _logger.LogError($"Unable to create pantry: {exception}");
                return BadRequest("Unable to create pantry.");
            }
            return BadRequest("Failed to save new pantry.");
        }

        [HttpPut("{pantryId:int}")]
        public ActionResult<PantryViewModel> EditPantry(int pantryId, PantryViewModel model)
        {
            try
            {
                var pantryToEdit = _repository.GetPantryById(pantryId);
                if (pantryToEdit == null)
                {
                    return NotFound($"Unable to find existing pantry with id of {pantryId}");
                }
                _mapper.Map(model, pantryToEdit);
                if (_repository.SaveAll())
                {
                    return _mapper.Map<PantryViewModel>(pantryToEdit);
                }
            }
            catch (Exception exception)
            {
                _logger.LogError($"Unable to edit Pantry: {exception}");
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Database failure.");
            }
            return BadRequest("Unable to edit pantry.");
        }

        [HttpDelete("{pantryId:int}")]
        public IActionResult DeletePantry(int pantryId)
        {
            try
            {
                var oldPantry = _repository.GetPantryById(pantryId);
                if (oldPantry == null)
                {
                    return NotFound("Pantry could not be found.");
                }

                _repository.DeleteEntity(oldPantry);

                if (_repository.SaveAll())
                {
                    return Ok();
                }
            }
            catch (Exception exception)
            {
                _logger.LogError($"Unable to delete Pantry with Id: {exception}");
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Database failure.");
            }
            return BadRequest("Unable to delete pantry from database.");
        }
    }
}
