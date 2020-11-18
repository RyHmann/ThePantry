using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThePantry.Data.Entities
{
    public class PantryIngredient
    {
        public int PantryIngredientId { get; set; }
        public decimal Quantity { get; set; }

        //One to Many Relationship (Child)
        public int? PantryId { get; set; }
        public Pantry Pantry { get; set; }

        // One to One Relationships
        [ForeignKey("IngredientForeignKey")]
        public Ingredient Ingredient { get; set; }

        [ForeignKey("UnitForeignKey")]
        public Unit Unit { get; set; }
    }
}
