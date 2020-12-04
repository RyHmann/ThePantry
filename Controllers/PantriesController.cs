﻿using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ThePantry.Data;
using ThePantry.Data.Entities;
using ThePantry.ViewModels;

namespace ThePantry.Controllers
{
    [Route("/api/[Controller]")]
    [ApiController]
    public class PantriesController : ControllerBase
    {
        private readonly IPantryRepository _repository;
        private readonly ILogger<PantriesController> _logger;
        private readonly IMapper _mapper;
        private readonly LinkGenerator _linkGenerator;

        public PantriesController(IPantryRepository repository, ILogger<PantriesController> logger, IMapper mapper, LinkGenerator linkGenerator)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
            _linkGenerator = linkGenerator;
        }

        [HttpGet]
        public IActionResult ShowAllPantries()
        {
            try
            {
                return Ok(_repository.GetAllPantries());
            }
            catch (Exception exception)
            {

                _logger.LogError($"Failed to get Pantries: {exception}");
                return BadRequest("Failed to get pantries.");
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult ShowPantryById(int pantryId)
        {
            try
            {
                return Ok(_repository.GetPantryById(pantryId));
            }
            catch (Exception exception)
            {

                _logger.LogError($"Failed to get Pantry: {exception}");
                return BadRequest("Failed to get pantry.");
            }
        }

        [HttpPost]
        public ActionResult<PantryViewModel> CreatePantry(PantryViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var pantryIngredients = new List<PantryIngredient>();
                    foreach(var pantryIngredientViewModel in model.Ingredients)
                    {
                        var pantryIngredient = _mapper.Map<PantryIngredient>(pantryIngredientViewModel);

                        if (_repository.IngredientExists(pantryIngredient.Ingredient))
                        {
                            pantryIngredient.Ingredient = _repository.GetIngredientByName(pantryIngredientViewModel.Ingredient.Name);
                        }
                        else
                        {
                            var newIngredient = _mapper.Map<Ingredient>(pantryIngredientViewModel.Ingredient);
                            _repository.AddEntity(newIngredient);
                        }
                        pantryIngredients.Add(pantryIngredient);
                    }
                    var newPantry = _mapper.Map<Pantry>(model);
                    newPantry.PantryIngredients = pantryIngredients;
                    _repository.AddEntity(newPantry);
                    if (_repository.SaveAll())
                    {
                        var newURL = _linkGenerator.GetPathByAction("ShowPantryById", "Pantries", new { id = newPantry.PantryId });
                        if (string.IsNullOrWhiteSpace(newURL))
                        {
                            _logger.LogError("Could not save pantry to Db");
                            return BadRequest("Could not use this pantry identifier to add pantry to Database.");
                        }
                        return Created($"{newURL}", _mapper.Map<Pantry>(newPantry));
                    }
 
                }
                else
                {
                    return BadRequest(ModelState);
                }
                
            }
            catch (Exception exception)
            {
                _logger.LogError($"Unable to create pantry: {exception}");
                return BadRequest("Unable to create pantry.");
            }
            return BadRequest("Failed to save new pantry.");
        }
    }
}
