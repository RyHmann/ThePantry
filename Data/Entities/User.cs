using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThePantry.Data.Entities
{
    public class User
    {
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }

        // One to Many Relationship (Parent)
        public ICollection<Pantry> Pantries { get; set; }

        // One to Many Relationship (Parent)
        public ICollection<Meal> Meals { get; set; }
    }
}
