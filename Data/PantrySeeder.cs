using Microsoft.AspNetCore.Hosting;
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
using ThePantry.Data.SeederData;

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

        public async Task SeedAsync()
        {
            _context.Database.EnsureCreated();

            // Seed Units into the Db.
            if (!_context.Units.Any())
            {
                var jsonUnitDataFilepath = Path.Combine(_hosting.ContentRootPath, "Data/SeederData/unit.json");
                var jsonUnitData = File.ReadAllText(jsonUnitDataFilepath);
                var unitsToSeed = JsonConvert.DeserializeObject<IEnumerable<Unit>>(jsonUnitData);
                _context.Units.AddRange(unitsToSeed);
                _context.SaveChanges();
            }

            // Seed Ingredients from POY Data
            if (!_context.Ingredients.Any())
            {
                // Read Data
                var jsonPOYDataFilepath = Path.Combine(_hosting.ContentRootPath, "Data/SeederData/pinchofyum.txt");
                var rawJsonPOYData = File.ReadAllText(jsonPOYDataFilepath);
                var deserializedJsonPOYData = JsonConvert.DeserializeObject<IEnumerable<JsonMeal>>(rawJsonPOYData);

                //Cycle through each Meal and extract & add ingredients
                foreach (var meal in deserializedJsonPOYData)
                {
                    var newIngredients = meal.MealIngredients;

                    // Cycle through each meal ingredient and add ingredient to DB if it doesn't exist

                    foreach (var ingredient in newIngredients)
                    {
                        
                        var formattedIngredientString = ingredient.Trim();
                        var ingredientExists = _context.Ingredients
                            .Any(n => n.Name == formattedIngredientString);

                        if (ingredientExists == false)
                        {
                            var ingredientToAdd = new Ingredient();
                            ingredientToAdd.Name = formattedIngredientString;
                            _context.Add(ingredientToAdd);
                            _context.SaveChanges();
                        }
                    }
                }
            }

            //Seed Meals from POY Data
            if (!_context.Meals.Any())
            {
                // Read Data
                var jsonPOYDataFilepath = Path.Combine(_hosting.ContentRootPath, "Data/SeederData/pinchofyum.txt");
                var rawJsonPOYData = File.ReadAllText(jsonPOYDataFilepath);
                var deserializedJsonPOYData = JsonConvert.DeserializeObject<IEnumerable<JsonMeal>>(rawJsonPOYData);

                //Cycle through each Meal and extract & add ingredients
                foreach (var meal in deserializedJsonPOYData)
                {
                    var newMeal = new Meal();
                    newMeal.Name = meal.Name;
                    newMeal.Description = meal.Description;
                    newMeal.Instructions = meal.Instructions;
                    newMeal.URL = meal.URL;
                    newMeal.Thumbnail = meal.Thumbnail;
                    newMeal.Editable = true;

                    // Cycle through each meal ingredient and add ingredient to DB if it doesn't exist
                    var mealIngredients = new List<MealIngredient>();
                    var newIngredients = meal.MealIngredients;
                    foreach (var ingredient in newIngredients)
                    {
                        var newMealIngredient = new MealIngredient();
                        var newIngredient = _context.Ingredients
                            .Where(n => n.Name == ingredient.Trim())
                            .FirstOrDefault();
                        newMealIngredient.Ingredient = newIngredient;
                        newMealIngredient.MealId = newMeal.MealId;
                        mealIngredients.Add(newMealIngredient);
                    }
                    newMeal.MealIngredients = mealIngredients;
                    _context.Meals.Add(newMeal);
                    _context.SaveChanges();
                }
            }
        }
    }
}
