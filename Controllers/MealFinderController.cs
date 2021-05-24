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
                    // Find recipes based on ingredients sent in the query string
                    string[] desirableIngredients = ExtractDesirableIngredientsFromQueryString(ingr);
                    int[] desirableIngredientIds = await _repository.GetIngredientsByQueryString(desirableIngredients);
                    string[] undesirableIngredients = ExtractUndesirableIngredientsFromQueryString(ingr);

                    // This is for ingredient button implementation
                    string[] ingredientsFromQueryString = ExtractAllIngredientsFromQueryString(ingr);
                    IEnumerable<string> validIngredients = await GetValidIngredients(ingredientsFromQueryString);
                    IEnumerable<string> invalidIngredients = await GetInvalidIngredients(ingredientsFromQueryString);

                    // TODO: Create a helper function
                    Meal[] potentialMatchingMeals = await _repository.FindMealsByIngredients(desirableIngredientIds);
                    HashSet<int> potentialMatchingMealHashSets = potentialMatchingMeals
                            .Select(i => i.MealId)
                            .ToHashSet();

                    // Filter recipes based on excluded ingredients
                    if (undesirableIngredients.Count() > 0)
                    {
                        var undesirableIngredientIds = await _repository.GetIngredientsByQueryString(undesirableIngredients);
                        var mealsToRemove = new List<Meal>();

                        foreach (var meal in potentialMatchingMeals)
                        {
                            if (MealContainsAnyIngredients(meal, undesirableIngredientIds))
                            {
                                mealsToRemove.Add(meal);
                            }
                        }
                        HashSet<int> mealsToRemoveHashSet = mealsToRemove
                                                       .Select(mid => mid.MealId)
                                                       .ToHashSet();

                        // Create a hash set of filtered mealIds
                        potentialMatchingMealHashSets.ExceptWith(mealsToRemoveHashSet);
                        // Now we have hash set - we need to filter meal list - linq query may not grab ingredients - this may need another repository interface
                    }
                    IEnumerable<Meal> filteredMeals = await _repository.GetMealByIds(potentialMatchingMealHashSets);
                    // Remove filteredMeals from potentialMatchingMeals here
                    // if true, remove meal

                    var matchingMeals = new List<Meal>();
                    foreach (var meal in filteredMeals)
                    {
                        if (MealContainsAllIngredients(meal, desirableIngredientIds))
                        {
                            matchingMeals.Add(meal);
                            _logger.LogInformation($"Found match: {meal}");
                        }
                    }
                    MealViewModel[] availabeMealsViewModel = _mapper.Map<MealViewModel[]>(matchingMeals);

                    // Instantiate new class, populate with data, and return
                    var QueryResult = new QueryResultViewModel();
                    QueryResult.Meals = availabeMealsViewModel;
                    QueryResult.TargetIngredients = validIngredients;
                    QueryResult.InvalidIngredients = invalidIngredients;
                    // TODO: Get list of recognized and unrecognized ingredients
                    return Ok(QueryResult);
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

        private bool MealContainsAnyIngredients(Meal meal, int[] undesirableIngredients)
        {
            var recipeIngredients = new List<int>();
            foreach (var mealIngredient in meal.MealIngredients)
            {
                var ingredientId = mealIngredient.Ingredient.IngredientId;
                recipeIngredients.Add(ingredientId);
            }
            if (recipeHasUndesirableIngredients(recipeIngredients, undesirableIngredients))
            {
                return true;
            }
            else return false;
        }

        private bool recipeHasUndesirableIngredients(List<int> recipeIngredients, int[] undesirableIngredients)
        {
            if (recipeIngredients.Intersect(undesirableIngredients).Any())
            {
                return true;
            }
            else return false;
        }

        private static bool MealContainsAllIngredients(Meal meal, int[] userIngredientIds)
        {
            var targetIngredients = new List<int>();

            // Create list of ids found in meal
            foreach(var mealIngredient in meal.MealIngredients)
            {
                var ingredientId = mealIngredient.Ingredient.IngredientId;
                targetIngredients.Add(ingredientId);
            }

            // Convert to hash sets and compare meal ingredients with user ingredients
            var targetIngredientsHashSet = new HashSet<int>(targetIngredients);
            var userIngredientsHashSet = new HashSet<int>(userIngredientIds);
            if (userIngredientsHashSet.IsSubsetOf(targetIngredientsHashSet))
                return true;
            else return false;
        }
        private async Task<IEnumerable<string>> GetValidIngredients(string[] ingredientsFromQueryString)
        {
            var validIngredients = new List<string>();
            foreach (string ingredient in ingredientsFromQueryString)
            {
                var ingredientExists = await _repository.IngredientHasMatch(ingredient);
                if (ingredientExists)
                {
                    validIngredients.Add(ingredient);
                }
            }
            return validIngredients;
        }

        private async Task<IEnumerable<string>> GetInvalidIngredients(string[] ingredientsFromQueryString)
        {
            var invalidIngredients = new List<string>();
            foreach (string ingredient in ingredientsFromQueryString)
            {
                var ingredientExists = await _repository.IngredientHasMatch(ingredient);
                if (!ingredientExists)
                {
                    invalidIngredients.Add(ingredient);
                }
            }
            return invalidIngredients;
        }

        private string[] ExtractAllIngredientsFromQueryString(string queryString)
        {
            var ingredients = queryString
                    .Split(',')
                    .Select(i => i.Trim())
                    .Where(s => !string.IsNullOrWhiteSpace(s))
                    .ToArray();
            return ingredients;
        }

        private string[] ExtractDesirableIngredientsFromQueryString(string queryString)
        {
            var ingredients = queryString
                    .Split(',')
                    .Select(i => i.Trim())
                    .Where(p =>!p.StartsWith("-"))
                    .Where(s => !string.IsNullOrWhiteSpace(s))
                    .ToArray();
            return ingredients;
        }

        private string[] ExtractUndesirableIngredientsFromQueryString(string queryString)
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
