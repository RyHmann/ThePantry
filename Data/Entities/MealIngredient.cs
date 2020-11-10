using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThePantry.Data.Entities
{
    public class MealIngredient
    {
        public int Id { get; set; }
        public decimal Quantity { get; set; }
        public ICollection<Ingredient> Ingredient { get; set; }
        public ICollection<Unit> Unit { get; set; }
    }
}
