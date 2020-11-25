using AutoMapper;
using Microsoft.AspNetCore.Mvc;
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
    public class MealsController : Controller
    {
        private readonly IPantryRepository _repository;
        private readonly ILogger<MealsController> _logger;
        private readonly IMapper _mapper;

        public MealsController(IPantryRepository repository, ILogger<MealsController> logger, IMapper mapper)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult ShowAllMeals()
        {
            try
            {
                return Ok(_mapper.Map<IEnumerable<Meal>, IEnumerable<MealViewModel>>(_repository.GetAllMeals()));
            }
            catch (Exception exception)
            {

                _logger.LogError($"Failed to get meals: {exception}");
                return BadRequest("Failed to get meals");
            }
        }

        [HttpGet("{id:int}")]
        public ActionResult ShowMealById(int id)
        {
            try
            {
                var meal = _repository.GetMealById(id);
                if (meal != null)
                {
                    return Ok(_mapper.Map<Meal, MealViewModel>(meal));
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
        public IActionResult SaveMeal([FromForm]MealViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var mealIngredients = new List<MealIngredient>();
                    foreach (var mealIngredient in model.Ingredients)
                    {
                        var ingredientToMap = _mapper.Map<MealIngredientViewModel, MealIngredient>(mealIngredient);

                        if (_repository.IngredientExists(mealIngredient.Ingredient.Name))
                        {
                            ingredientToMap.Ingredient = _repository.GetIngredientByName(mealIngredient.Ingredient.Name);
                        }
                        else
                        {
                            var newIngredient = _mapper.Map<IngredientViewModel, Ingredient>(mealIngredient.Ingredient);
                            _repository.AddEntity(mealIngredient.Ingredient);
                        }
                        mealIngredients.Add(ingredientToMap);
                    }
                    var newMeal = _mapper.Map<MealViewModel, Meal>(model);
                    newMeal.MealIngredients = mealIngredients;
                    _repository.AddEntity(newMeal);
                    if (_repository.SaveAll())
                    {
                        return Created($"/api/orders/{newMeal.MealId}", _mapper.Map<Meal, MealViewModel>(newMeal));
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
    }
}
