using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThePantry.ViewModels
{
    public class PantryViewModel
    {
        [Required]
        [MinLength(3)]
        public string Name { get; set; }

        // One to Many Relationship (Parent)
        public virtual List<PantryIngredientViewModel> Ingredients { get; set; }

        // One to Many Relationship (Child)
        public User User { get; set; }

        public PantryViewModel()
        {
            Ingredients = new List<PantryIngredientViewModel>();
        }
    }
}
