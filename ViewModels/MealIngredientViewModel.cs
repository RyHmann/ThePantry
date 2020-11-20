using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThePantry.ViewModels
{
    public class MealIngredientViewModel
    {
        public decimal Quantity { get; set; }
        public int MealId { get; set; }

        [Required]
        public IngredientViewModel Ingredient { get; set; }
        public UnitViewModel Unit { get; set; }
    }
}
