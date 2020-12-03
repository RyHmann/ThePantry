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
    [Route("api/[Controller]")]
    [ApiController]
    public class MealsController : ControllerBase
    {
        private readonly IPantryRepository _repository;
        private readonly ILogger<MealsController> _logger;
        private readonly IMapper _mapper;
        private readonly LinkGenerator _linkGenerator;

        public MealsController(IPantryRepository repository, ILogger<MealsController> logger, IMapper mapper, LinkGenerator linkGenerator)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
            _linkGenerator = linkGenerator;
        }

        [HttpGet]
        public ActionResult<MealViewModel[]> ShowAllMeals()
        {
            try
            {
                var meals = _repository.GetAllMeals();
                return _mapper.Map<MealViewModel[]>(meals);
            }
            catch (Exception exception)
            {

                _logger.LogError($"Failed to get meals: {exception}");
                return BadRequest("Failed to get meals");
            }
        }

        [HttpGet("{id:int}")]
        public ActionResult<MealViewModel> ShowMealById(int id)
        {
            try
            {
                var meal = _repository.GetMealById(id);
                if (meal != null)
                {
                    return Ok(_mapper.Map<MealViewModel>(meal));
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception exception)
            {

                _logger.LogError($"Failed to get meals: {exception}");
                return BadRequest("Failed to get meal");
            }
        }

        [HttpPost]
        [ActionName("Complex")]
        public IActionResult SaveMeal(MealViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var mealIngredients = new List<MealIngredient>();
                    foreach (var mealIngredientViewModel in model.Ingredients)
                    {
                        var mealIngredient = _mapper.Map<MealIngredientViewModel, MealIngredient>(mealIngredientViewModel);

                        if (_repository.IngredientExists(mealIngredient.Ingredient))
                        {
                            mealIngredient.Ingredient = _repository.GetIngredientByName(mealIngredientViewModel.Ingredient.Name);
                        }
                        else
                        {
                            var newIngredient = _mapper.Map<IngredientViewModel, Ingredient>(mealIngredientViewModel.Ingredient);
                            _repository.AddEntity(newIngredient);
                        }
                        mealIngredients.Add(mealIngredient);
                    }
                    var newMeal = _mapper.Map<MealViewModel,Meal>(model);
                    newMeal.MealIngredients = mealIngredients;
                    _repository.AddEntity(newMeal);
                    if (_repository.SaveAll())
                    {
                        var location = _linkGenerator.GetPathByAction("ShowMealById", "Meals", new { id = newMeal.MealId });
                        if (string.IsNullOrWhiteSpace(location))
                        {
                            return BadRequest("Could not use meal identifier.");
                        }
                        return Created($"{location}", _mapper.Map<Meal, MealViewModel>(newMeal));
                    }
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception exception)
            {

                _logger.LogError($"Failed to save a new meal: {exception}");
            }
            return BadRequest("Failed to save new meal");
        }

        [HttpPut("{id:int}")]
        public ActionResult<MealViewModel> EditMeal(int id, MealViewModel model)
        {
            try
            {
                var existingMeal = _repository.GetMealById(id);
                if (existingMeal == null)
                {
                    return NotFound($"Could not fine meal with id of {id}.");
                }
                _mapper.Map(model, existingMeal);
                if (_repository.SaveAll())
                {
                    return _mapper.Map<MealViewModel>(existingMeal);
                }
            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Database failure.");
            }
            return BadRequest();
        }

        [HttpDelete("{id:int}")]
        public IActionResult Delete(int id)
        {
            try
            {
                var oldMeal = _repository.GetMealById(id);
                if (oldMeal == null)
                {
                    return NotFound();
                }

                _repository.DeleteEntity(oldMeal);

                if (_repository.SaveAll())
                {
                    return Ok();
                }
            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Database failure.");
            }
            return BadRequest();
        }
    }
}
