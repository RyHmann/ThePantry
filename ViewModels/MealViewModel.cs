using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThePantry.ViewModels
{
    public class MealViewModel
    {
        public int MealId { get; set; }

        [Required]
        [MinLength(3)]
        public string Name { get; set; }
        public string Description { get; set; }
        public string Instructions { get; set; }
        public virtual List<MealIngredientViewModel> Ingredients { get; set; }

        public MealViewModel()
        {
            Ingredients = new List<MealIngredientViewModel>();
        }

    }
}
