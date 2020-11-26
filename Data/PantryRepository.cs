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
            _logger.LogInformation("Attempting to retreive Ingredient.");
            return _context.Meals
                           .Where(m => m.MealId == mealId)
                           .FirstOrDefault();
        }

        // Meal Ingredient Methods
        public IEnumerable<MealIngredient> GetMealIngredientByMealId(int mealId)
        {
            try
            {
                _logger.LogInformation("Attempting to retreive MealIngredient by MealId.");
                return _context.MealIngredients
                           .Where(i => i.MealId == mealId)
                           .OrderBy(n => n.Ingredient)
                           .ToList();
            }
            catch (Exception exception)
            {
                _logger.LogInformation($"Failed to get ingredients: {exception}");
                return null;
            }
            
        }

        public bool IngredientExists(string ingredientName)
        {
            _logger.LogInformation("Checking to see if ingredient exists in Db.");
            return _context.Ingredients.Any(n => n.Name == ingredientName);
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

        public Pantry GetPantryById(int id)
        {
            try
            {
                _logger.LogInformation("Attempting to retreive Pantry by PantryId.");
                return _context.Pantries
                        .Where(p => p.PantryId == id)
                        .FirstOrDefault();
            }
            catch (Exception exception)
            {
                _logger.LogInformation($"Failed to get pantry: {exception}");
                return null;
            }
        }

        
    }
}
