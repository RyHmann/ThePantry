using System.Collections.Generic;
using ThePantry.Data.Entities;

namespace ThePantry.Data
{
    public interface IPantryRepository
    {
        // Pantry Methods
        IEnumerable<Pantry> GetAllPantries();
        Pantry GetPantryById(int id);


        // Meal methods
        IEnumerable<Meal> GetAllMeals();
        Meal GetMealById(int mealId);

        // Meal Ingredient Methods
        MealIngredient GetMealIngredientByMealId(int mealId, int mealIngredientId);
        MealIngredient[] GetMealIngredientsByMealId(int mealId);

        // Ingredient Methods
        bool IngredientExists(Ingredient ingredientToCheck);
        bool IngredientAlreadyAssignedToMeal(int mealId, int ingredientId);
        Ingredient GetIngredientByName(string ingredientName);

        // DB Methods
        bool SaveAll();
        void AddEntity(object model);
        void DeleteEntity(object model);

    }
}