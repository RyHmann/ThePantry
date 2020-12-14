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
        public int PantryId { get; set; }
        public string Username { get; set; }
        public virtual List<PantryIngredientViewModel> Ingredients { get; set; }

        public PantryViewModel()
        {
            Ingredients = new List<PantryIngredientViewModel>();
        }
    }
}
