﻿using System.Collections.Generic;
using ThePantry.Data.Entities;

namespace ThePantry.Data
{
    public interface IPantryRepository
    {
        IEnumerable<Meal> GetAllMeals();
        Meal GetMealById(int mealId);
        bool SaveAll();
        void AddEntity(object model);
        MealIngredient GetMealIngredientByMealId(int mealId, int mealIngredientId);
        MealIngredient[] GetMealIngredientsByMealId(int mealId);
        bool IngredientExists(Ingredient ingredientToCheck);
        bool IngredientAlreadyAssignedToMeal(int mealId, int ingredientId);
        Ingredient GetIngredientByName(string ingredientName);
        IEnumerable<Pantry> GetAllPantries();
        Pantry GetPantryById(int id);
        void DeleteEntity(object model);
    }
}