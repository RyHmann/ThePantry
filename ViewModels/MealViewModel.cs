using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ThePantry.ViewModels
{
    public class MealViewModel
    {

        [Required]
        [MinLength(3)]
        public string Name { get; set; }

        [Required]
        [MaxLength(250)]
        public string Description { get; set; }

        [Required]
        public string Instructions { get; set; }
        public virtual List< IngredientViewModel> Ingredients { get; set; }
        public string Thumbnail { get; set; }
        public string URL { get; set; }

        public MealViewModel()
        {
            Ingredients = new List<IngredientViewModel>();
        }
    }
}
