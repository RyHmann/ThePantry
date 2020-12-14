﻿using Microsoft.EntityFrameworkCore;
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

        // Pantry Methods
        public IEnumerable<Pantry> GetAllPantries()
        {
            try
            {
                _logger.LogInformation("Attempting to retreive all Pantries.");
                return _context.Pantries
                        .OrderBy(p => p.User)
                        .ToList();
            }
            catch (Exception exception)
            {
                _logger.LogInformation($"Failed to get all pantries: {exception}");
                return null;
            }
        }

        public Pantry GetPantryById(int pantryId)
        {
            try
            {
                _logger.LogInformation($"Attempting to retreive Pantry by Pantry ID: {pantryId}.");
                return _context.Pantries
                        .Where(p => p.PantryId == pantryId)
                        .FirstOrDefault();
            }
            catch (Exception exception)
            {
                _logger.LogInformation($"Failed to get pantry: {exception}");
                return null;
            }
        }
        public Pantry GetPantryByUser(string userName)
        {
            try
            {
                _logger.LogInformation($"Attempting to retreive Pantry by User: {userName}");
                return _context.Pantries
                        .Where(p => p.User.UserName == userName)
                        .Include(u => u.User)
                        .FirstOrDefault();
            }
            catch (Exception exception)
            {
                _logger.LogError($"Unable to retreive Pantry: {exception}");
                return null;
            }
        }

        // Pantry Ingredient Methods
        public PantryIngredient GetPantryIngredientByPantryId(int pantryId, int pantryIngredientId)
        {
            try
            {
                _logger.LogInformation($"Attempting to retreive Pantry Ingredient in Pantry: {pantryId} and Ingredient: {pantryIngredientId}.");
                return _context.PantryIngredients
                               .Where(p => p.PantryId == pantryId && p.PantryIngredientId == pantryIngredientId)
                               .Include(i => i.Ingredient)
                               .FirstOrDefault();
            }
            catch (Exception exception)
            {
                _logger.LogError($"Failed to get Pantry Ingredient: {exception}.");
                return null;
            }
        }

        public PantryIngredient[] GetPantryIngredientsByPantryId(int pantryId)
        {
            try
            {
                _logger.LogInformation($"Attempting to retreive all Pantry Ingredients in Pantry: {pantryId}.");
                return _context.PantryIngredients
                               .Where(p => p.PantryId == pantryId)
                               .Include(i => i.Ingredient)
                               .OrderBy(n => n.Ingredient.Name)
                               .ToArray();
            }
            catch (Exception exception)
            {

                _logger.LogError($"Failed to get Pantry Ingredients in Pantry: {exception}.");
                return null;
            }
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
            _logger.LogInformation($"Attempting to retreive meal with ID: {mealId}.");
            return _context.Meals
                           .Where(m => m.MealId == mealId)
                           .FirstOrDefault();
        }

        // Meal Ingredient Methods
        public MealIngredient[] GetMealIngredientsByMealId(int mealId)
        {
            try
            {
                _logger.LogInformation($"Attempting to retreive MealIngredients by Meal ID: {mealId}.");
                return _context.MealIngredients
                               .Where(i => i.MealId == mealId)
                               .Include(m => m.Ingredient)
                               .OrderBy(n => n.Ingredient.Name)
                               .ToArray();
            }
            catch (Exception exception)
            {
                _logger.LogInformation($"Failed to get meal ingredients for that meal: {exception}");
                return null;
            }
        }

        public MealIngredient GetMealIngredientByMealId(int mealId, int mealIngredientId)
        {
            try
            {
                _logger.LogInformation($"Attempting to retreive specific Meal Ingredient by Meal ID: {mealId} and Meal Ingredient ID: {mealIngredientId}.");
                return _context.MealIngredients
                           .Where(i => i.MealId == mealId && i.MealIngredientId == mealIngredientId)
                           .Include(m => m.Ingredient)
                           .FirstOrDefault();
            }
            catch (Exception exception)
            {
                _logger.LogInformation($"Failed to get ingredients: {exception}");
                return null;
            }
            
        }

        // Ingredient Methods
        public bool IngredientExists(Ingredient ingredientToCheck)
        {
            _logger.LogInformation("Checking to see if ingredient exists in Db.");
            return _context.Ingredients.Any(n => n.Name == ingredientToCheck.Name);
        }

        public bool IngredientAlreadyAssignedToMeal(int mealId, int ingredientId)
        {
            _logger.LogInformation($"Checking to see if ingredient: {ingredientId} exists in meal.");
            return _context.MealIngredients.Any(n => n.MealId == mealId && n.Ingredient.IngredientId == ingredientId);
        }

        public bool IngredientAlreadyAssignedToPantry(int pantryId, int ingredientId)
        {
            _logger.LogInformation($"Checking to see if ingredient: {ingredientId} exists in pantry.");
            return _context.PantryIngredients.Any(n => n.PantryId == pantryId && n.Ingredient.IngredientId == ingredientId);
        }

        public Ingredient GetIngredientByName(string ingredientName)
        {
            _logger.LogInformation("Attempting to retreive existing Ingredient.");
            return _context.Ingredients
                .Where(n => n.Name == ingredientName)
                .FirstOrDefault();
        }

        // MealFinder Functions
        public IEnumerable<Meal> FindMealsByIngredients(IEnumerable<string> ingredients)
        {
            var availableMeals = new HashSet<Meal>();
            
            foreach (var ingredient in ingredients)
            {
                var matchingMeals = _context.MealIngredients
                        .Where(i => i.Ingredient.Name == ingredient)
                        .Select(s => s.Meal)
                        .ToHashSet();
                availableMeals.UnionWith(matchingMeals);
            }
            return availableMeals;
        }

        public IEnumerable<Meal> FindMealsByAllIngredients(int pantryId, IEnumerable<string> ingredients)
        {
            try
            {
                _logger.LogInformation($"Attempting to retreive Meals containing all ingredients.");
                //Get an array of all ingredients contained in this fridge or ingredient list

                //Create a method that takes a string array and finds all meals that match this criteria
                return null;
            }
            catch (Exception exception)
            {
                _logger.LogError($"Unable to retreive meals containing all ingredients: {exception}");
                return null;
            }
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

        

        
    }
}
