using AutoMapper;
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
    public class MealFinderController : Controller
    {
        private readonly IPantryRepository _repository;
        private readonly ILogger<MealFinderController> _logger;
        private readonly IMapper _mapper;

        public MealFinderController(IPantryRepository repository, ILogger<MealFinderController> logger, IMapper mapper)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet("{include}")]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public async Task<ActionResult<MealViewModel[]>> FindMeals([FromQuery]string ingr)
        {
            try
            {
                if (!string.IsNullOrEmpty(ingr))
                {
                    // TODO: Add filter here to indicate which ingredients aren't recognized, and indicate to user

                    var ingredients = formatQueryString(ingr);
                    var userIngredientIds = await _repository.GetIngredientsByQueryString(ingredients);
                    var potentialMatchingMeals = await _repository.FindMealsByIngredients(userIngredientIds);

                    // TODO: Filter and discard 
                    // TODO: Create a helper function
                    var matchingMeals = new List<Meal>();
                    
                    foreach (var meal in potentialMatchingMeals)
                    {
                        if (mealContainsAllIngredients(meal, userIngredientIds))
                        {
                            matchingMeals.Add(meal);
                        }
                    }
                    var availabeMealsViewModel = _mapper.Map<MealViewModel[]>(matchingMeals);
                    return Ok(availabeMealsViewModel);
                }
                else
                {
                    return BadRequest();
                }

            }
            catch (Exception exception)
            {
                _logger.LogError($"Could not execute meal search: {exception}");
                return BadRequest("Could not execute meal search.");
            }
        }

        // Returns TRUE if Meal contains all userIngredients
        private bool mealContainsAllIngredients(Meal meal, int[] userIngredientIds)
        {
            var targetIngredients = new List<int>();
            foreach(var mealIngredient in meal.MealIngredients)
            {
                var ingredientId = mealIngredient.Ingredient.IngredientId;
                targetIngredients.Add(ingredientId);
            }
            // Convert to hash sets and check if subset
            var targetIngredientsHashSet = new HashSet<int>(targetIngredients);
            var userIngredientsHashSet = new HashSet<int>(userIngredientIds);
            if (userIngredientsHashSet.IsSubsetOf(targetIngredientsHashSet))
                return true;
            else return false;
        }

        // Reformats query string to an array of ingredients
        private string[] formatQueryString(string queryString)
        {
            var ingredients = queryString
                    .Split(',')
                    .Where(s => !string.IsNullOrWhiteSpace(s))
                    .Select(i => i.Trim())
                    .ToArray();
            return ingredients;
        }
    }
}
