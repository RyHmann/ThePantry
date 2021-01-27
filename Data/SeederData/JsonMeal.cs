using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThePantry.Data.SeederData
{
    public class JsonMeal
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Instructions { get; set; }
        public List<string> MealIngredients { get; set; }
        public string URL { get; set; }
        public string Thumbnail { get; set; }

        public JsonMeal()
        {
            MealIngredients = new List<string>();
        }
    }
}
