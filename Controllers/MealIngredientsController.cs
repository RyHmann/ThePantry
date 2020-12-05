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
    
    [ApiController]
    [Route("api/meals/{mealId}/mealingredients")]
    public class MealIngredientsController : ControllerBase
    {
        private readonly IPantryRepository _repository;
        private readonly ILogger<MealIngredientsController> _logger;
        private readonly IMapper _mapper;
        private readonly LinkGenerator _linkGenerator;

        public MealIngredientsController(IPantryRepository repository, ILogger<MealIngredientsController> logger, IMapper mapper, LinkGenerator linkGenerator)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
            _linkGenerator = linkGenerator;
        }

        [HttpGet]
        public ActionResult<MealIngredientViewModel[]> ShowMealIngredients(int mealId)
        {
            try
            {
                var ingredients = _repository.GetMealIngredientsByMealId(mealId);
                return Ok(_mapper.Map<MealIngredientViewModel[]>(ingredients));
            }
            catch (Exception exception)
            {

                _logger.LogError($"Could not get meal ingredients: {exception}");
                return BadRequest("Could not find meal ingredients.");
            }
        }

        [HttpGet("{mealIngredientId:int}")]
        public ActionResult<MealIngredientViewModel> ShowMealIngredient(int mealId, int mealIngredientId)
        {
            try
            {
                var ingredient = _repository.GetMealIngredientByMealId(mealId, mealIngredientId);
                return Ok(_mapper.Map<MealIngredientViewModel>(ingredient));
            }
            catch (Exception exception)
            {
                _logger.LogError($"Could not get that meal ingredient: {exception}");
                return BadRequest("Could not find that ingredient.");
            }
        }

        [HttpPost]
        public ActionResult<MealIngredientViewModel> AddIngredientToMeal(int mealId, MealIngredientViewModel model)
        {
            try
            {
                var existingMeal = _repository.GetMealById(mealId);
                var mealIngredient = _mapper.Map<MealIngredient>(model);

                // Confirm meal exists
                if (existingMeal == null)
                {
                    return BadRequest($"Meal with ID: {mealId} does not exist.");
                }

                if (model.Ingredient.Name == null)
                {
                    return BadRequest("Ingredient Name is required");
                }

                // Check if ingredient exists in database
                if (_repository.IngredientExists(mealIngredient.Ingredient))
                {
                    mealIngredient.Ingredient = _repository.GetIngredientByName(model.Ingredient.Name);
                }
                else
                {
                    var newIngredient = mealIngredient.Ingredient;
                    _repository.AddEntity(newIngredient);
                }

                // Check if ingredient is already assigned to this meal
                if (_repository.IngredientAlreadyAssignedToMeal(mealId, mealIngredient.Ingredient.IngredientId))
                {
                    return BadRequest("Ingredient is already assigned to this meal.");
                }
                
                mealIngredient.Meal = existingMeal;
                _repository.AddEntity(mealIngredient);

                if (_repository.SaveAll())
                {
                    var url = _linkGenerator.GetPathByAction("ShowMealIngredient", "MealIngredients",
                        values: new { mealId, mealIngredientId = mealIngredient.MealIngredientId });
                    if (string.IsNullOrWhiteSpace(url))
                    {
                        return BadRequest("Could not use MealIngredientId.");
                    }
                    return Created($"{url}", _mapper.Map<MealIngredientViewModel>(mealIngredient));
                }
                else
                {
                    return BadRequest($"Failed to save new meal ingredient to meal with Meal Id: {mealId}.");
                }
            }
            catch (Exception exception)
            {

                _logger.LogError($"Could not add that meal ingredient: {exception}");
                return BadRequest("Could not add that ingredient.");
            }
        }
        
        [HttpPut("{mealIngredientId:int}")]
        public ActionResult<MealIngredientViewModel> EditMealIngredient(int mealId, int mealIngredientId, MealIngredientViewModel model)
        {
            try
            {
                // Do we need to check if mealIngredientId == model.mealIngredientId?
                // Do we need to check if mealId == model.mealId?

                var existingMealIngredient = _repository.GetMealIngredientByMealId(mealId, mealIngredientId);

                if (existingMealIngredient == null)
                {
                    return NotFound("Couldn't find meal ingredient");
                }

                if (mealId != model.MealId || mealIngredientId != model.MealIngredientId)
                {
                    return BadRequest("Unable to edit Meals or Meal Ingredients during this stage.");
                }

                // Do we want to allow the user to change the ingredient type here? If so, we will need checks similar to Post ie: checking if ingredient exists in Db, and checking if ingredient is already part of this meal.

                // Throwing error if no changes detected. Any additional items that can be changes should be added to this check.
                if (model.Quantity == existingMealIngredient.Quantity)
                {
                    return Ok("No changes detected.");
                }

                existingMealIngredient.Quantity = model.Quantity;

                if (_repository.SaveAll())
                {
                    return _mapper.Map<MealIngredientViewModel>(existingMealIngredient);
                }
            }
            catch (Exception exception)
            {

                _logger.LogError($"Could not add that meal ingredient: {exception}");
                return BadRequest("Could not add that ingredient.");
            }
            return BadRequest("Could not update that ingredient. You are unable to edit Meals and Ingredients in this manner.");
        }

        [HttpDelete("{mealIngredientId:int}")]
        public IActionResult Delete(int mealId, int mealIngredientId)
        {
            try
            {
                var mealIngredientToDelete = _repository.GetMealIngredientByMealId(mealId, mealIngredientId);
                if (mealIngredientToDelete == null)
                {
                    return NotFound("Failed to locate meal ingredient, unable to delete.");
                }

                _repository.DeleteEntity(mealIngredientToDelete);

                if (_repository.SaveAll())
                {
                    return Ok();
                }
            }
            catch (Exception exception)
            {
                _logger.LogError($"Could not delete meal ingredient: {exception}");
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Database failure.");
            }
            return BadRequest("Could not delete that ingredient.");
        }
    }
}
