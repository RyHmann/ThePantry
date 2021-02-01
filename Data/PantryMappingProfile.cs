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
                .ForMember(dest => dest.Ingredients, opt => opt.MapFrom(source => source.MealIngredients));

            CreateMap<MealIngredient, MealIngredientViewModel>()
                .ReverseMap();

            CreateMap<Ingredient, IngredientViewModel>()
                .ReverseMap();

            CreateMap<Pantry, PantryViewModel>()
                .ForMember(dest => dest.Username, opt => opt.MapFrom(source => source.User.UserName))
                .ReverseMap();

            CreateMap<PantryIngredient, PantryIngredientViewModel>()
                .ReverseMap();
        }
    }
}
