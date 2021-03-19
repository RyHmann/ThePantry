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
                    // This section can remain the same - this will be +, and - filtering will take place at the end

                    // Find recipes based on ingredients sent in the query string
                    var searchIngredients = ExtractSearchIngredients(ingr);
                    var searchIngredientIds = await _repository.GetIngredientsByQueryString(searchIngredients);

                    // Identify ingredients that need to be excluded
                    var excludeIngredients = ExtractExcludeIngredients(ingr);
                    var excludeIngredientIds = await _repository.GetIngredientsByQueryString(excludeIngredients);

                    // TODO: Filter and discard 
                    // TODO: Create a helper function
                    var potentialMatchingMeals = await _repository.FindMealsByIngredients(searchIngredientIds);

                    var matchingMeals = new List<Meal>();
                    
                    foreach (var meal in potentialMatchingMeals)
                    {
                        if (MealContainsAllIngredients(meal, searchIngredientIds))
                        {
                            matchingMeals.Add(meal);
                            _logger.LogInformation($"Found match: {meal}");
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
        private static bool MealContainsAllIngredients(Meal meal, int[] userIngredientIds)
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

        // Reformats query string to an array of ingredients to include in query
        private static string[] ExtractSearchIngredients(string queryString)
        {
            var ingredients = queryString
                    .Split(',')
                    .Select(i => i.Trim())
                    .Where(p =>!p.StartsWith("-"))
                    .Where(s => !string.IsNullOrWhiteSpace(s))
                    .ToArray();
            return ingredients;
        }

        // Reformats query string to an array of ingredients to exclude from query
        private static string[] ExtractExcludeIngredients(string queryString)
        {
            var ingredients = queryString
                    .Split(',')
                    .Select(i => i.Trim())
                    .Where(p => p.StartsWith("-"))
                    .Select(n => n.Remove(0, 1))
                    .Where(s => !string.IsNullOrWhiteSpace(s))
                    .ToArray();
            return ingredients;
        }
    }
}
