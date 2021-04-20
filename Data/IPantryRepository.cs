using System.Collections.Generic;
using System.Threading.Tasks;
using ThePantry.Data.Entities;

namespace ThePantry.Data
{
    public interface IPantryRepository
    {

        IEnumerable<Meal> GetAllMeals();
        Meal GetMealById(int mealId);
        Task<IEnumerable<Meal>> GetMealByIds(IEnumerable<int> mealIds);

        Task<Meal[]> FindMealsByIngredients(int[] ingredients);

        MealIngredient GetMealIngredientByMealId(int mealId, int mealIngredientId);
        MealIngredient[] GetMealIngredientsByMealId(int mealId);

        bool IngredientExists(Ingredient ingredientToCheck);
        Task<bool> IngredientHasMatch(string ingredientToCheck);
        bool IngredientAlreadyAssignedToMeal(int mealId, int ingredientId);
        Task<Ingredient> GetIngredientByName(string ingredientName);
        IEnumerable<Ingredient> GetIngredientsContainingName(string ingredientName);
        Task<int[]> GetIngredientsByQueryString(string[] ingredientNames);

        Task<bool> SaveAll();
        void AddEntity(object model);
        void DeleteEntity(object model);

    }
}