using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThePantry.ViewModels
{
    public class QueryResultViewModel
    {
        public string Source { get; set; }
        public string URL { get; set; }
        public IEnumerable<string> ValidIngredients { get; set; }
        public IEnumerable<string> InvalidIngredients { get; set; }
        public IEnumerable<MealViewModel> Meals { get; set; }

        public QueryResultViewModel()
        {
            this.Source = "The-Pantry";
            this.URL = "https://the-pantry.azurewebsites.net/";
        }
    }
}
