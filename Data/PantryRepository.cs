using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ThePantry.Data.Entities;

namespace ThePantry.Data
{
    public class PantryRepository : IPantryRepository
    {
        private readonly PantryContext _context;
        private readonly ILogger<PantryRepository> _logger;

        public PantryRepository(PantryContext context, ILogger<PantryRepository> logger)
        {
            _context = context;
            _logger = logger;
        }

        // TO DO: Ensure function finds meals CONTAINING ingredients (case agnostic), and not an exact match
        // TO DO: Convert methods to ASYNC

        // Pantry Methods
        public IEnumerable<Pantry> GetAllPantries()
        {
            try
            {
                _logger.LogInformation("Attempting to retreive all Pantries.");
                return _context.Pantries
                        .OrderBy(p => p.User)
                        .ToList();
            }
            catch (Exception exception)
            {
                _logger.LogInformation($"Failed to get all pantries: {exception}");
                return null;
            }
        }

        public Pantry GetPantryById(int pantryId)
        {
            try
            {
                _logger.LogInformation($"Attempting to retreive Pantry by Pantry ID: {pantryId}.");
                return _context.Pantries
                        .Where(p => p.PantryId == pantryId)
                        .FirstOrDefault();
            }
            catch (Exception exception)
            {
                _logger.LogInformation($"Failed to get pantry: {exception}");
                return null;
            }
        }
        public Pantry GetPantryByUser(string userName)
        {
            try
            {
                _logger.LogInformation($"Attempting to retreive Pantry by User: {userName}");
                return _context.Pantries
                        .Where(p => p.User.UserName == userName)
                        .Include(u => u.User)
                        .FirstOrDefault();
            }
            catch (Exception exception)
            {
                _logger.LogError($"Unable to retreive Pantry: {exception}");
                return null;
            }
        }

        // Pantry Ingredient Methods
        public PantryIngredient GetPantryIngredientByPantryId(int pantryId, int pantryIngredientId)
        {
            try
            {
                _logger.LogInformation($"Attempting to retreive Pantry Ingredient in Pantry: {pantryId} and Ingredient: {pantryIngredientId}.");
                return _context.PantryIngredients
                               .Where(p => p.PantryId == pantryId && p.PantryIngredientId == pantryIngredientId)
                               .Include(i => i.Ingredient)
                               .FirstOrDefault();
            }
            catch (Exception exception)
            {
                _logger.LogError($"Failed to get Pantry Ingredient: {exception}.");
                return null;
            }
        }

        public PantryIngredient[] GetPantryIngredientsByPantryId(int pantryId)
        {
            try
            {
                _logger.LogInformation($"Attempting to retreive all Pantry Ingredients in Pantry: {pantryId}.");
                return _context.PantryIngredients
                               .Where(p => p.PantryId == pantryId)
                               .Include(i => i.Ingredient)
                               .OrderBy(n => n.Ingredient.Name)
                               .ToArray();
            }
            catch (Exception exception)
            {

                _logger.LogError($"Failed to get Pantry Ingredients in Pantry: {exception}.");
                return null;
            }
        }

        // Meal Methods
        public IEnumerable<Meal> GetAllMeals()
        {
            try
            {
                _logger.LogInformation("Attempting to retreive all Meals.");
                return _context.Meals
                           .OrderBy(m => m.Name)
                           .ToList();
            }
            catch (Exception exception)
            {
                _logger.LogInformation($"Failed to get all meals: {exception}");
                return null;
            }
        }

        public Meal GetMealById(int mealId)
        {
            _logger.LogInformation($"Attempting to retreive meal with ID: {mealId}.");
            return _context.Meals
                           .Where(m => m.MealId == mealId)
                           .Include(m => m.MealIngredients)
                           .ThenInclude(i => i.Ingredient)
                           .FirstOrDefault();
        }

        // Meal Ingredient Methods
        public MealIngredient[] GetMealIngredientsByMealId(int mealId)
        {
            try
            {
                _logger.LogInformation($"Attempting to retreive MealIngredients by Meal ID: {mealId}.");
                return _context.MealIngredients
                               .Where(i => i.MealId == mealId)
                               .Include(m => m.Ingredient)
                               .OrderBy(n => n.Ingredient.Name)
                               .ToArray();
            }
            catch (Exception exception)
            {
                _logger.LogInformation($"Failed to get meal ingredients for that meal: {exception}");
                return null;
            }
        }

        public MealIngredient GetMealIngredientByMealId(int mealId, int mealIngredientId)
        {
            try
            {
                _logger.LogInformation($"Attempting to retreive specific Meal Ingredient by Meal ID: {mealId} and Meal Ingredient ID: {mealIngredientId}.");
                return _context.MealIngredients
                           .Where(i => i.MealId == mealId && i.MealIngredientId == mealIngredientId)
                           .Include(m => m.Ingredient)
                           .FirstOrDefault();
            }
            catch (Exception exception)
            {
                _logger.LogInformation($"Failed to get ingredients: {exception}");
                return null;
            }
        }

        /*<---------- Ingredient Methods ---------->*/

        // Checks if ingredient with this name exists in the DB
        public bool IngredientExists(Ingredient ingredientToCheck)
        {
            _logger.LogInformation("Checking to see if ingredient exists in Db.");
            return _context.Ingredients.Any(n => n.Name == ingredientToCheck.Name);
        }

        // Checks if any ingredients contain the search string
        public bool IngredientHasMatch(string ingredientToCheck)
        {
            _logger.LogInformation("Check to see if any ingredients contain this term");
            return _context.Ingredients.Any(n => n.Name.Contains(ingredientToCheck));
        }

        public bool IngredientAlreadyAssignedToMeal(int mealId, int ingredientId)
        {
            _logger.LogInformation($"Checking to see if ingredient: {ingredientId} exists in meal.");
            return _context.MealIngredients.Any(n => n.MealId == mealId && n.Ingredient.IngredientId == ingredientId);
        }

        public bool IngredientAlreadyAssignedToPantry(int pantryId, int ingredientId)
        {
            _logger.LogInformation($"Checking to see if ingredient: {ingredientId} exists in pantry.");
            return _context.PantryIngredients.Any(n => n.PantryId == pantryId && n.Ingredient.IngredientId == ingredientId);
        }

        public Ingredient GetIngredientByName(string ingredientName)
        {
            _logger.LogInformation("Attempting to retreive existing Ingredient.");
            return _context.Ingredients
                .Where(n => n.Name == ingredientName)
                .FirstOrDefault();
        }

        public Task<int[]> GetIngredientsByQueryString(string[] ingredients)
        {
            _logger.LogInformation("Attempting to get ingredients via ingredient array");
            var query = _context.Ingredients
                .Where(i => ingredients.Contains(i.Name))
                .Select(id => id.IngredientId)
                .ToArrayAsync();
            return query;
        }


        // Returns all ingredients that contain input string
        public IEnumerable<Ingredient> GetIngredientsContainingName(string ingredientName)
        {
            _logger.LogInformation("Attemping to find ingredients");
            return _context.Ingredients
                .Where(n => n.Name.Contains(ingredientName))
                .ToList();
        }

        /*<---------- MealFinder Methods ---------->*/

        // TODO: Find a way to make this a single query?
        // Current query returns an array of meals that contain one of the ingredients
        // Further sorting happens in the controller
        public async Task<Meal[]> FindMealsByIngredients(int[] ingredients)
        {
            _logger.LogInformation($"Attempting to find meals containing all ingredients in passed in array");

            var query = _context.Meals
                .Where(mi => mi.MealIngredients.Any(
                    i => i.Ingredient.IngredientId == ingredients[0]))
                .Include(m => m.MealIngredients)
                .ThenInclude(i => i.Ingredient);
            return await query.ToArrayAsync();
        }

        // Save States
        public void AddEntity(object model)
        {
            _logger.LogInformation("Attempting to add model to the Db");
            _context.Add(model);
        }

        public void DeleteEntity(object model)
        {
            _logger.LogInformation("Attempting to remove object from Db");
            _context.Remove(model);
        }
        public async Task<bool> SaveAll()
        {
            _logger.LogInformation("Attempting to save changes to the Db");
            return (await _context.SaveChangesAsync() > 0);
        }
    }
}
