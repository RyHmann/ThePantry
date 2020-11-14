using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThePantry.Data.Entities
{
    public class ShoppingList
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<MealIngredient> Ingredients { get; set; }
    }
}
