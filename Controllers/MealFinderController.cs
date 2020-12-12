using AutoMapper;
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
    [Route("api/[Controller]")]
    [ApiController]
    public class MealFinderController : Controller
    {
        private readonly IPantryRepository _repository;
        private readonly ILogger<MealIngredientsController> _logger;
        private readonly IMapper _mapper;
        private readonly LinkGenerator _linkGenerator;

        public MealFinderController(IPantryRepository repository, ILogger<MealIngredientsController> logger, IMapper mapper, LinkGenerator linkGenerator)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
            _linkGenerator = linkGenerator;
        }

        [HttpGet("{include}")]
        public ActionResult<Meal[]> FindMeals([FromQuery]string ingr)
        {
            try
            {
                List<string> ingredients = ingr
                    .Split(",")
                    .Select(i => i.Trim())
                    .ToList();
                var availableMeals = _repository.FindMealsByIngredients(ingredients);
                //var availabeMealsViewModel = _mapper.Map<MealViewModel[]>(availableMeals);
                return View(availableMeals);
            }
            catch (Exception exception)
            {
                _logger.LogError($"Could not execute meal search: {exception}");
                return BadRequest("Could not execute meal search.");
            }
        }
    }
}
