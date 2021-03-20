using AutoMapper;
using Microsoft.AspNetCore.Http;
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
    [Route("api/pantries/{pantryId}/pantryingredients")]
    [ApiController]
    public class PantryIngredientsController : ControllerBase
    {
        private readonly IPantryRepository _repository;
        private readonly ILogger<PantryIngredientsController> _logger;
        private readonly IMapper _mapper;
        private readonly LinkGenerator _linkGenerator;

        public PantryIngredientsController(IPantryRepository repository, ILogger<PantryIngredientsController> logger, IMapper mapper, LinkGenerator linkGenerator)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
            _linkGenerator = linkGenerator;
        }

        [HttpGet]
        public ActionResult<PantryIngredientViewModel[]> ShowPantryIngredients(int pantryId)
        {
            try
            {
                var ingredients = _repository.GetPantryIngredientsByPantryId(pantryId);
                return Ok(_mapper.Map<PantryIngredientViewModel[]>(ingredients));
            }
            catch (Exception exception)
            {
                _logger.LogError($"Could not get pantry ingredients: {exception}");
                return BadRequest("Could not find pantry ingredients for this pantry.");
            }
        }

        [HttpGet("{pantryIngredientId:int}")]
        public ActionResult<PantryIngredientViewModel> ShowPantryIngredient(int pantryId, int pantryIngredientId)
        {
            try
            {
                var pantryIngredient = _repository.GetPantryIngredientByPantryId(pantryId, pantryIngredientId);
                return _mapper.Map<PantryIngredientViewModel>(pantryIngredient);
            }
            catch (Exception exception)
            {
                _logger.LogError($"Could not get that pantry ingredient: {exception}");
                return BadRequest("Could not find that ingredient.");
            }
        }

        [HttpPost]
        public async Task<ActionResult<PantryIngredientViewModel>> AddIngredientToPantry(int pantryId, PantryIngredientViewModel model)
        {
            try
            {
                var existingPantry = _repository.GetPantryById(pantryId);
                var pantryIngredient = _mapper.Map<PantryIngredient>(model);

                // Confirm if pantry exists
                if (existingPantry == null)
                {
                    return BadRequest($"Pantry with ID: {pantryId} does not exist");
                }

                if (model.Ingredient.Name == null)
                {
                    return BadRequest("Ingredient name required.");
                }

                // Check if ingredient exists in database
                if (_repository.IngredientExists(pantryIngredient.Ingredient))
                {
                    pantryIngredient.Ingredient = await _repository.GetIngredientByName(model.Ingredient.Name);
                }
                else
                {
                    var newIngredient = pantryIngredient.Ingredient;
                    _repository.AddEntity(newIngredient);
                }

                // Check if ingredient is already assigned to this pantry
                if (_repository.IngredientAlreadyAssignedToPantry(pantryId, pantryIngredient.Ingredient.IngredientId))
                {
                    return BadRequest("Ingredient is already assigned to this pantry.");
                }

                pantryIngredient.Pantry = existingPantry;
                _repository.AddEntity(pantryIngredient);

                var saveChanges = await _repository.SaveAll();
                if (saveChanges)
                {
                    var url = _linkGenerator.GetPathByAction("ShowPantryIngredient", "PantryIngredients", values: new { pantryId, pantryIngredientId = pantryIngredient.PantryIngredientId });
                    if (string.IsNullOrWhiteSpace(url))
                    {
                        return BadRequest("Could not assign pantry ingredient to that ID.");
                    }
                    return Created($"{url}", _mapper.Map<PantryIngredientViewModel>(pantryIngredient));
                }
                else
                {
                    return BadRequest($"Failed to save new pantry ingredient to pantry with Pantry Id: {pantryId}.");
                }
            }
            catch (Exception exception)
            {

                _logger.LogError($"Could not add that meal ingredient: {exception}");
                return BadRequest("Could not add that ingredient.");
            }
        }

        [HttpPut("{pantryIngredientId:int}")]
        public async Task<ActionResult<PantryIngredientViewModel>> EditPantryIngredient(int pantryId, int pantryIngredientId, PantryIngredientViewModel model)
        {
            try
            {
                // Do we need to check if mealIngredientId == model.mealIngredientId?
                // Do we need to check if mealId == model.mealId?

                var existingPantryIngredient = _repository.GetPantryIngredientByPantryId(pantryId, pantryIngredientId);

                if (existingPantryIngredient == null)
                {
                    return NotFound("Couldn't find pantry ingredient");
                }

                if (pantryId != model.PantryId || pantryIngredientId != model.PantryIngredientId)
                {
                    return BadRequest("Unable to edit Pantries or Pantry Ingredients during this stage.");
                }

                // Do we want to allow the user to change the ingredient type here? If so, we will need checks similar to Post ie: checking if ingredient exists in Db, and checking if ingredient is already part of this meal.

                // Throwing error if no changes detected. Any additional items that can be changed should be added to this check.
                if (model.Quantity == existingPantryIngredient.Quantity)
                {
                    return Ok("No changes detected.");
                }

                existingPantryIngredient.Quantity = model.Quantity;

                var saveChanges = await _repository.SaveAll();
                if (saveChanges)
                {
                    return _mapper.Map<PantryIngredientViewModel>(existingPantryIngredient);
                }
            }
            catch (Exception exception)
            {

                _logger.LogError($"Could not edit that pantry ingredient: {exception}");
                return BadRequest("Could not edit that ingredient.");
            }
            return BadRequest("Could not update that ingredient. You are unable to edit Pantries and Ingredients in this manner.");
        }

        [HttpDelete("{pantryIngredientId:int}")]
        public async Task<IActionResult> Delete(int pantryId, int pantryIngredientId)
        {
            try
            {
                var pantryIngredientToDelete = _repository.GetPantryIngredientByPantryId(pantryId, pantryIngredientId);
                if (pantryIngredientToDelete == null)
                {
                    return NotFound("Failed to locate pantry ingredient, unable to delete.");
                }

                _repository.DeleteEntity(pantryIngredientToDelete);

                var saveChanges = await _repository.SaveAll();
                if (saveChanges)
                {
                    return Ok();
                }
            }
            catch (Exception exception)
            {
                _logger.LogError($"Could not delete pantry ingredient: {exception}");
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Database failure.");
            }
            return BadRequest("Could not delete that ingredient.");
        }
    }
}
