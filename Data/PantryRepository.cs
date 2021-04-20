using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
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

        public async Task<IEnumerable<Meal>> GetMealByIds(IEnumerable<int> mealIds)
        {
            _logger.LogInformation("Attempting to retreive meals with IDs in provided array.");
            var meals =  _context.Meals
                           .Where(m => mealIds.Any(id => id == m.MealId));
            return await meals.ToListAsync();
        }

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


        public bool IngredientExists(Ingredient ingredientToCheck)
        {
            _logger.LogInformation("Checking to see if ingredient exists in Db.");
            return _context.Ingredients.Any(n => n.Name == ingredientToCheck.Name);
        }


        public async Task<bool> IngredientHasMatch(string ingredientToCheck)
        {
            _logger.LogInformation("Check to see if any ingredients contain this term");
            var query = _context.Ingredients
                           .AnyAsync(n => n.Name.Contains(ingredientToCheck));
            return await query;
        }

        public bool IngredientAlreadyAssignedToMeal(int mealId, int ingredientId)
        {
            _logger.LogInformation($"Checking to see if ingredient: {ingredientId} exists in meal.");
            return _context.MealIngredients.Any(n => n.MealId == mealId && n.Ingredient.IngredientId == ingredientId);
        }

        public async Task<Ingredient> GetIngredientByName(string ingredientName)
        {
            _logger.LogInformation("Attempting to retreive existing Ingredient.");
            return await _context.Ingredients
                .Where(n => n.Name == ingredientName)
                .FirstOrDefaultAsync();
        }

        public async Task<int[]> GetIngredientsByQueryString(string[] ingredients)
        {
            _logger.LogInformation("Attempting to get ingredients via ingredient array");
            var query = _context.Ingredients
                .Where(i => ingredients.Contains(i.Name))
                .Select(id => id.IngredientId)
                .ToArrayAsync();
            return await query;
        }


        public IEnumerable<Ingredient> GetIngredientsContainingName(string ingredientName)
        {
            _logger.LogInformation("Attemping to find ingredients");
            return _context.Ingredients
                .Where(n => n.Name.Contains(ingredientName))
                .ToList();
        }


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
