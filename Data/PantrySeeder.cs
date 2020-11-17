﻿using Microsoft.AspNetCore.Hosting;
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

        public PantrySeeder(PantryContext context, IWebHostEnvironment hosting)
        {
            _context = context;
            _hosting = hosting;
        }

        public void Seed()
        {
            _context.Database.EnsureCreated();

            // Seed Units into the Db.
            if (!_context.Units.Any())
            {
                var jsonUnitDataFilepath = Path.Combine(_hosting.ContentRootPath, "Data/unit.json");
                var jsonUnitData = File.ReadAllText(jsonUnitDataFilepath);
                var unitsToSeed = JsonConvert.DeserializeObject<IEnumerable<Unit>>(jsonUnitData);
                _context.Units.AddRange(unitsToSeed);
                _context.SaveChanges();
            }

            // Seed Ingredients into the Db.
            if (!_context.Ingredients.Any())
            {
                var jsonIngredientDataFilepath = Path.Combine(_hosting.ContentRootPath, "Data/ingredients.json");
                var jsonIngredientData = File.ReadAllText(jsonIngredientDataFilepath);
                var ingredientsToSeed = JsonConvert.DeserializeObject<IEnumerable<Ingredient>>(jsonIngredientData);
                _context.Ingredients.AddRange(ingredientsToSeed);
                _context.SaveChanges();
            }

            // Seed MealIngredients and a Meal into the Db.
            if (!_context.MealIngredients.Any())
            {
                var mealIngredientHam = new MealIngredient()
                {
                    Id = 1,
                    MealId = 1,
                    Ingredient = (ICollection<Ingredient>)_context.Ingredients.Where(m => m.Name == "ham"),
                    Unit = (ICollection<Unit>)_context.Units.Where(u => u.Name == "unit"),
                    Quantity = 5
                };
                _context.Add(mealIngredientHam);

                var mealIngredientBread = new MealIngredient()
                {
                    Id = 2,
                    MealId = 1,
                    Ingredient = (ICollection<Ingredient>)_context.Ingredients.Where(m => m.Name == "bread"),
                    Unit = (ICollection<Unit>)_context.Units.Where(u => u.Name == "unit"),
                    Quantity = 5
                };
                _context.Add(mealIngredientBread);

                var mealIngredientCheese = new MealIngredient()
                {
                    Id = 3,
                    MealId = 1,
                    Ingredient = (ICollection<Ingredient>)_context.Ingredients.Where(i => i.Name == "cheddar cheese"),
                    Unit = (ICollection<Unit>)_context.Units.Where(u => u.Name == "unit"),
                    Quantity = 5
                };
                _context.Add(mealIngredientCheese);

                if (!_context.Meals.Any())
                {
                    var mealHamSandwich = new Meal()
                    {
                        Id = 1,
                        Name = "Ham Sandwich",
                        Description = "A traditional ham sandwich",
                        Instructions = "Assemble ham, cheddar cheese, and bread.",
                        Ingredients = new List<MealIngredient>()
                        {
                            mealIngredientBread,
                            mealIngredientCheese,
                            mealIngredientHam
                        }
                    };

                _context.Add(mealHamSandwich);
                    _context.SaveChanges();
                }
                _context.SaveChanges();
            }
        }
    }
}
