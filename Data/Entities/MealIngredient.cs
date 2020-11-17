﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ThePantry.Data.Entities
{
    public class MealIngredient
    {
        public int MealIngredientId { get; set; }
        public decimal Quantity { get; set; }

        //One to Many Relationship (Child)
        public int MealId { get; set; }
        public Meal Meal { get; set; }
        public int PantryId { get; set; }
        public Pantry Pantry { get; set; }

        // One to One Relationships
        public Ingredient Ingredient { get; set; }
        public Unit Unit { get; set; }
    }
}