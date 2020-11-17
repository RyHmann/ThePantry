using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThePantry.Data.Entities
{
    public class Meal
    {
        public int MealId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Instructions { get; set; }

        // One to Many Relationship (Parent)
        public ICollection<MealIngredient> MealIngredients { get; set; }

        // One to Many Relationship (Child)
        public int? UserId { get; set; }
        public User User { get; set; }

    }
}
