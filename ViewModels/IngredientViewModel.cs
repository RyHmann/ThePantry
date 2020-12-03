using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThePantry.ViewModels
{
    public class IngredientViewModel
    {
        [Required]
        [StringLength(50), MinLength(2)]
        public string Name { get; set; }
        public int IngredientId { get; set; }
    }
}
