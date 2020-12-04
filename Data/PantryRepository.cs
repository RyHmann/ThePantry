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

        // Pantry Methods
        public IEnumerable<Pantry> GetAllPantries()
        {
            try
            {
                _logger.LogInformation("Attempting to retreive all Pantries.");
                return _context.Pantries
                        .OrderBy(p => p.Name)
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

        public Ingredient GetIngredientByName(string ingredientName)
        {
            _logger.LogInformation("Attempting to retreive existing Ingredient.");
            return _context.Ingredients
                .Where(n => n.Name == ingredientName)
                .FirstOrDefault();
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
