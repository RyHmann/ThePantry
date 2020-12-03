﻿using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ThePantry.Data.Entities;
using ThePantry.ViewModels;

namespace ThePantry.Data
{
    public class PantryMappingProfile : Profile
    {
        public PantryMappingProfile()
        {
            CreateMap<Meal, MealViewModel>()
                .ReverseMap();

            CreateMap<MealIngredient, MealIngredientViewModel>()
                .ReverseMap();

            CreateMap<Ingredient, IngredientViewModel>()
                .ReverseMap();

            CreateMap<Pantry, PantryViewModel>()
                .ReverseMap();

            CreateMap<PantryIngredient, PantryIngredientViewModel>()
                .ReverseMap();
        }
    }
}
