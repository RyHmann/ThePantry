﻿using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ThePantry.Data.Entities;

namespace ThePantry.Data
{
    public class PantrySeeder
    {
        private readonly PantryContext _context;
        private readonly IWebHostEnvironment _hosting;
        private readonly UserManager<User> _userManager;

        public PantrySeeder(PantryContext context, IWebHostEnvironment hosting, UserManager<User> userManager)
        {
            _context = context;
            _hosting = hosting;
            _userManager = userManager;
        }

        public async Task SeedAsync()
        {
            _context.Database.EnsureCreated();

            User user = await _userManager.FindByEmailAsync("ryan@thepantry.com");
            if (user == null)
            {
                user = new User()
                {
                    Email = "ryan@thepantry.com",
                    UserName = "ryan@thepantry.com"
                };

                var result = await _userManager.CreateAsync(user, "Password123!");
                if (result != IdentityResult.Success)
                {
                    throw new InvalidOperationException("Could not create new user in during Db seeding.");
                }
            }

            // Seed Units into the Db.
            if (!_context.Units.Any())
            {
                var jsonUnitDataFilepath = Path.Combine(_hosting.ContentRootPath, "Data/SeederData/unit.json");
                var jsonUnitData = File.ReadAllText(jsonUnitDataFilepath);
                var unitsToSeed = JsonConvert.DeserializeObject<IEnumerable<Unit>>(jsonUnitData);
                _context.Units.AddRange(unitsToSeed);
                _context.SaveChanges();
            }

            // Seed Ingredients into the Db.
            if (!_context.Ingredients.Any())
            {
                var jsonIngredientDataFilepath = Path.Combine(_hosting.ContentRootPath, "Data/SeederData/ingredients.json");
                var jsonIngredientData = File.ReadAllText(jsonIngredientDataFilepath);
                var ingredientsToSeed = JsonConvert.DeserializeObject<IEnumerable<Ingredient>>(jsonIngredientData);
                _context.Ingredients.AddRange(ingredientsToSeed);
                _context.SaveChanges();
            }

            /*
            if (!_context.Meals.Any())
            {
                var jsonMealDataFilepath = Path.Combine(_hosting.ContentRootPath, "Data/SeederData/meals.json");
                var jsonMealData = File.ReadAllText(jsonMealDataFilepath);
                var mealsToSeed = JsonConvert.DeserializeObject<IEnumerable<Meal>>(jsonMealData);
                _context.Meals.AddRange(mealsToSeed);
                _context.SaveChanges();
            }
            

            if (!_context.Pantries.Any())
            {
                var jsonPantryDataFilepath = Path.Combine(_hosting.ContentRootPath, "Data/SeederData/pantries.json");
                var jsonPantryData = File.ReadAllText(jsonPantryDataFilepath);
                var pantriesToSeed = JsonConvert.DeserializeObject<IEnumerable<Pantry>>(jsonPantryData);
                _context.Pantries.AddRange(pantriesToSeed);
                _context.SaveChanges();
            }
            */

            
            // Seed Meal into the Db.
            if (!_context.Meals.Any())
            {
                var mealHamSandwich = new Meal()
                {
                    Name = "Ham Sandwich",
                    Description = "A traditional ham sandwich",
                    Instructions = "Assemble ham, cheddar cheese, and bread.",
                };
                _context.Add(mealHamSandwich);
                _context.SaveChanges();
            }

            // Seed MealIngredients into the Db.
            if (!_context.MealIngredients.Any())
            {
                var mealIngredientHam = new MealIngredient()
                {
                    MealId = _context.Meals
                                     .Where(m => m.Name == "Ham Sandwich")
                                     .SingleOrDefault()
                                     .MealId,
                    Ingredient = _context.Ingredients
                                         .Where(m => m.Name == "ham")
                                         .FirstOrDefault(),
                    Unit = _context.Units.Where(u => u.Name == "unit").FirstOrDefault(),
                    Quantity = 5
                };
                _context.Add(mealIngredientHam);
                

                var mealIngredientBread = new MealIngredient()
                {
                    MealId = _context.Meals
                                     .Where(m => m.Name == "Ham Sandwich")
                                     .SingleOrDefault()
                                     .MealId,
                    Ingredient = _context.Ingredients.Where(m => m.Name == "bread").FirstOrDefault(),
                    Unit = _context.Units.Where(u => u.Name == "unit").FirstOrDefault(),
                    Quantity = 5
                };
                _context.Add(mealIngredientBread);

                var mealIngredientCheese = new MealIngredient()
                {
                    MealId = _context.Meals
                                     .Where(m => m.Name == "Ham Sandwich")
                                     .SingleOrDefault()
                                     .MealId,
                    Ingredient = _context.Ingredients.Where(i => i.Name == "cheddar cheese").FirstOrDefault(),
                    Unit = _context.Units.Where(u => u.Name == "unit").FirstOrDefault(),
                    Quantity = 5
                };
                _context.Add(mealIngredientCheese);
                _context.SaveChanges();
            }
            
        }
    }
}
