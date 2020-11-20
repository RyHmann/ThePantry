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
        IEnumerable<MealIngredient> GetMealIngredientByMealId(int mealId);
        bool IngredientExists(string ingredientName);
        Ingredient GetIngredientByName(string ingredientName);
    }
}