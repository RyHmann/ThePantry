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

                _logger.LogInformation($"Could not get meal ingredients: {exception}");
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
                _logger.LogInformation($"Could not get that meal ingredient: {exception}");
                return BadRequest("Could not find that ingredient.");
            }
        }

        [HttpPost]
        public ActionResult<IngredientViewModel> AddIngredientToMeal(int mealId, MealIngredientViewModel model)
        {
            try
            {
                var existingMeal = _repository.GetMealById(mealId);

                if (existingMeal == null)
                {
                    return BadRequest("Meal does not exist.");
                }

                var mealIngredient = _mapper.Map<MealIngredient>(model);
                mealIngredient.Meal = existingMeal;

                // Implement a check if ingredient exists in Db, then use it, and if not create a new Ingredient in Db
                // Implement a check if ingredient already exists, if so do not add to Db and instruct user to edit
                if (model.Ingredient.Name == null) return BadRequest("Ingredient Name is required");
                var ingredient = _repository.GetIngredientByName(model.Ingredient.Name);
                if (ingredient == null) return BadRequest("Ingredient could not be found.");

                mealIngredient.Ingredient = ingredient;
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

                _logger.LogInformation($"Could not add that meal ingredient: {exception}");
                return BadRequest("Could not add that ingredient.");
            }
        }
        /*
        [HttpPut("{}")]
        public ActionResult<MealIngredientViewModel> EditMealIngredient(int mealId, int mealIngredientId)
        {
            try
            {

            }
            catch (Exception exception)
            {

                _logger.LogInformation($"Could not add that meal ingredient: {exception}");
                return BadRequest("Could not add that ingredient.");
            }
        }
        */

        [HttpDelete("{mealIngredientId:int}")]
        public ActionResult Delete(int mealId, int mealIngredientId)
        {
            try
            {
                var mealIngredientToDelete = _repository.GetMealIngredientByMealId(mealId, mealIngredientId);
                if (mealIngredientToDelete == null)
                {
                    return NotFound();
                }

                _repository.DeleteEntity(mealIngredientToDelete);

                if (_repository.SaveAll())
                {
                    return Ok();
                }
            }
            catch (Exception exception)
            {
                _logger.LogInformation($"Could not delete meal ingredient: {exception}");
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Database failure.");
            }
            return BadRequest("Could not delete that ingredient.");
        }
    }
}
