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
        public string URL { get; set; }
        public string Thumbnail { get; set; }
        public bool Editable { get; set; }

        // One to Many Relationship (Parent)
        public virtual ICollection<MealIngredient> MealIngredients { get; set; }

        // One to Many Relationship (Child)
        public string UserId { get; set; }
        public virtual User User { get; set; }

        public Meal()
        {
            MealIngredients = new List<MealIngredient>();
        }

    }
}
