using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThePantry.Data.Entities
{
    public class Unit
    {
        public int UnitId { get; set; }
        public string Name { get; set; }

        // One to One Relationship
        public int? MealIngredientId { get; set; }
        public MealIngredient MealIngredient { get; set; }
        public int? PantryIngredientId { get; set; }
        public PantryIngredient PantryIngredient { get; set; }
    }
}
