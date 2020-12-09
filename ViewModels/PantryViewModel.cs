using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ThePantry.Data.Entities;

namespace ThePantry.ViewModels
{
    public class PantryViewModel
    {
        [Required]
        [MinLength(3)]
        public string Name { get; set; }

        public virtual List<PantryIngredientViewModel> Ingredients { get; set; }

        public User User { get; set; }

        public PantryViewModel()
        {
            Ingredients = new List<PantryIngredientViewModel>();
        }
    }
}
