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

        // Meal Gets
        public IEnumerable<Meal> GetAllMeals()
        {
            try
            {
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
            return _context.Meals
                           .Where(m => m.MealId == mealId)
                           .FirstOrDefault();
        }

        // Meal Ingredient Gets
        public IEnumerable<MealIngredient> GetMealIngredientByMealId(int mealId)
        {
            try
            {
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

        // Ingredient Checks
        public bool IngredientExists(string ingredientName)
        {
            return _context.Ingredients.Any(n => n.Name == ingredientName);
        }

        public Ingredient GetIngredientByName(string ingredientName)
        {
            return _context.Ingredients
                .Where(n => n.Name == ingredientName)
                .FirstOrDefault();
        }

        // Save States
        public void AddEntity(object model)
        {
            _context.Add(model);
        }

        public bool SaveAll()
        {
            return _context.SaveChanges() > 0;
        }

        
    }
}
