using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThePantry.Data.Entities
{
    public class Pantry
    {
        public int PantryId { get; set; }

        // One to Many Relationship (Parent)
        public virtual ICollection<PantryIngredient> PantryIngredients { get; set; }
      
        // One to Many Relationship (Child)
        public string UserId { get; set; }
        public virtual User User { get; set; }

        public Pantry()
        {
            PantryIngredients = new List<PantryIngredient>();
        }
    }
}
