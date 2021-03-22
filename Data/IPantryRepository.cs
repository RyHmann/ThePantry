﻿using System.Collections.Generic;
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
        Task<IEnumerable<Meal>> GetMealByIds(IEnumerable<int> mealIds);

        // MealFinder methods
        Task<Meal[]> FindMealsByIngredients(int[] ingredients);

        // Pantry Ingredient Methods
        PantryIngredient GetPantryIngredientByPantryId(int pantryId, int pantryIngredientId);
        PantryIngredient[] GetPantryIngredientsByPantryId(int pantryId);

        // Meal Ingredient Methods
        MealIngredient GetMealIngredientByMealId(int mealId, int mealIngredientId);
        MealIngredient[] GetMealIngredientsByMealId(int mealId);

        // Ingredient Methods
        bool IngredientExists(Ingredient ingredientToCheck);
        Task<bool> IngredientHasMatch(string ingredientToCheck);
        bool IngredientAlreadyAssignedToMeal(int mealId, int ingredientId);
        public bool IngredientAlreadyAssignedToPantry(int pantryId, int ingredientId);
        Task<Ingredient> GetIngredientByName(string ingredientName);
        IEnumerable<Ingredient> GetIngredientsContainingName(string ingredientName);
        Task<int[]> GetIngredientsByQueryString(string[] ingredientNames);

        // DB Methods
        Task<bool> SaveAll();
        void AddEntity(object model);
        void DeleteEntity(object model);

    }
}