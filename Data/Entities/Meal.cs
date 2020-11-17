using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThePantry.Data.Entities
{
    public class Meal
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Instructions { get; set; }
        public virtual ICollection<MealIngredient> Ingredients { get; set; }

    }
}
