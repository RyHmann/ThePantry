using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThePantry.Data.Entities
{
    public class User : IdentityUser
    {
        // One to Many Relationship (Parent)
        public ICollection<Pantry> Pantries { get; set; }

        // One to Many Relationship (Parent)
        public ICollection<Meal> Meals { get; set; }
    }
}
