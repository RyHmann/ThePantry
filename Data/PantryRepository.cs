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
    }
}
