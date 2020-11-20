using System.Collections.Generic;
using ThePantry.Data.Entities;

namespace ThePantry.Data
{
    public interface IPantryRepository
    {
        IEnumerable<Meal> GetAllMeals();
        Meal GetMealById(int mealId);
        bool SaveAll();
        void AddEntity(object model);
    }
}