﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ThePantry.Data.Entities;

namespace ThePantry.Data
{
    public class PantryContext : DbContext
    {
        public DbSet<Meal> Meals { get; set; }
        public DbSet<MealIngredient> MealIngredients { get; set; }
        public DbSet<Unit> Units { get; set; }
        public DbSet<Pantry> Pantries { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }

        public PantryContext(DbContextOptions<PantryContext> options) : base(options)
        {

        }
    }
}
