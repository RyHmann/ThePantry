using System.Collections.Generic;
using System.Threading.Tasks;
using ThePantry.Data.Entities;

namespace ThePantry.Data
{
    public interface IPantryRepository
    {
        // Pantry Methods
        IEnumerable<Pantry> GetAllPantries();
        Pantry GetPantryById(int id);
        Pantry GetPantryByUser(string userName);


        // Meal methods
        IEnumerable<Meal> GetAllMeals();
        Meal GetMealById(int mealId);

        // MealFinder methods
        Task<Meal[]> FindMealsByIngredients(int[] ingredients);
        Task<Meal> FindMealsByAllIngredients(int pantryId);

        // Pantry Ingredient Methods
        PantryIngredient GetPantryIngredientByPantryId(int pantryId, int pantryIngredientId);
        PantryIngredient[] GetPantryIngredientsByPantryId(int pantryId);

        // Meal Ingredient Methods
        MealIngredient GetMealIngredientByMealId(int mealId, int mealIngredientId);
        MealIngredient[] GetMealIngredientsByMealId(int mealId);

        // Ingredient Methods
        bool IngredientExists(Ingredient ingredientToCheck);
        bool IngredientHasMatch(string ingredientToCheck);
        bool IngredientAlreadyAssignedToMeal(int mealId, int ingredientId);
        public bool IngredientAlreadyAssignedToPantry(int pantryId, int ingredientId);
        Ingredient GetIngredientByName(string ingredientName);
        IEnumerable<Ingredient> GetIngredientsContainingName(string ingredientName);
        Task<int[]> GetIngredientsByQueryString(string[] ingredientNames);

        // DB Methods
        bool SaveAll();
        void AddEntity(object model);
        void DeleteEntity(object model);

    }
}