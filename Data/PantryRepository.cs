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

        // Ingredient Methods
        public bool IngredientExists(Ingredient ingredientToCheck)
        {
            _logger.LogInformation("Checking to see if ingredient exists in Db.");
            return _context.Ingredients.Any(n => n.Name == ingredientToCheck.Name);
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

        // MealFinder Functions
        
        public IEnumerable<Meal> FindMealsByIngredients(IEnumerable<string> ingredients)
        {
            var populatedMeals = new List<Meal>();
            
            foreach (var ingredient in ingredients)
            {
                // Select each meal that has this ingredient and return as a Hash Set
                var matchingMeals = _context.MealIngredients
                        .Where(m => m.Ingredient.Name == ingredient)
                        .Select(m => m.Meal)
                        .ToHashSet();

                // Populate each meal with all data
                // TODO: Refactor this - possibly into one query
                foreach (var meal in matchingMeals)
                {
                    var fullMeal = _context.Meals
                        .Where(m => m.MealId == meal.MealId)
                        .Include(m => m.MealIngredients)
                        .ThenInclude(i => i.Ingredient)
                        .FirstOrDefault();
                    populatedMeals.Add(fullMeal);
                }
            }
            return populatedMeals;
        }

        public IEnumerable<Meal> FindMealsByAllIngredients(int pantryId)
        {
            try
            {
                _logger.LogInformation($"Attempting to retreive Meals containing all ingredients.");

                var matchingMeals = new List<Meal>();
                var initialFilter = new List<Meal>();

                // Hash Set of all Ingredient Ids in Pantry
                var pantryIngredients = _context.PantryIngredients
                        .Where(i => i.PantryId == pantryId)
                        .Select(ingr => ingr.Ingredient.IngredientId)
                        .ToHashSet();

                // Initial filter to find Meals that have one matching ingredient
                foreach (var ingredient in pantryIngredients)
                {
                    var firstPassMeal = _context.MealIngredients
                        .Where(i => i.Ingredient.IngredientId == ingredient)
                        .Select(m => m.Meal)
                        .FirstOrDefault();
                    initialFilter.Add(firstPassMeal);
                }
                // Compare Hash Sets
                foreach (var meal in initialFilter)
                {
                    var requiredIngredients = getMealIngredientIds(meal);
                    if (pantryHasRequiredIngredients(requiredIngredients, pantryIngredients))
                    {
                        matchingMeals.Add(meal);
                    }
                }
                return matchingMeals;
            }
            catch (Exception exception)
            {
                _logger.LogError($"Unable to retreive meals containing all ingredients: {exception}");
                return null;
            }
        }

        private bool pantryHasRequiredIngredients(HashSet<int> requiredIngredients, HashSet<int> pantryIngredients)
        {
            if (requiredIngredients.IsSubsetOf(pantryIngredients))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        private HashSet<int> getMealIngredientIds(Meal meal)
        {
            var ingredientIds = meal.MealIngredients
                .Select(i => i.MealIngredientId)
                .ToHashSet();
            return ingredientIds;
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
        public bool SaveAll()
        {
            _logger.LogInformation("Attempting to save changes to the Db");
            return _context.SaveChanges() > 0;
        }
    }
}
