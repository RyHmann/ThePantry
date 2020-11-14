using Microsoft.EntityFrameworkCore;
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
        public DbSet<MealIngredient> Ingredients { get; set; }
        public DbSet<ShoppingList> Lists { get; set; }

        public PantryContext(DbContextOptions<PantryContext> options) : base(options)
        {

        }
    }
}
