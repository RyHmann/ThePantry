using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThePantry.Data.Entities
{
    public class MealIngredient
    {
        public int MealIngredientId { get; set; }
        public decimal Quantity { get; set; }

        //One to Many Relationship (Child)
        public int MealId { get; set; }
        public Meal Meal { get; set; }

        // One to One Relationships
        [ForeignKey("IngredientForeignKey")]
        public Ingredient Ingredient { get; set; }

        [ForeignKey("UnitForeignKey")]
        public Unit Unit { get; set; }
    }
}
