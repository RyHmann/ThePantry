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
        private readonly ILogger<MealFinderController> _logger;
        private readonly IMapper _mapper;

        public MealFinderController(IPantryRepository repository, ILogger<MealFinderController> logger, IMapper mapper)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet("{include}")]
        public ActionResult<MealViewModel[]> FindMeals([FromQuery]string ingr)
        {
            try
            {
                if (!string.IsNullOrEmpty(ingr))
                {
                    // TO DO:
                    // Add filter here to indicate which ingredients aren't recognized, and indicate to user
                    var ingredients = ingr
                                        .Split(',')
                                        .Where(s => !string.IsNullOrWhiteSpace(s))
                                        .Select(i => i.Trim())
                                        .ToArray();
                    var availableMeals = _repository.FindMealsByIngredients(ingredients);
                    var availabeMealsViewModel = _mapper.Map<MealViewModel[]>(availableMeals);
                    return availabeMealsViewModel;
                }
                else
                {
                    return NotFound();
                }

            }
            catch (Exception exception)
            {
                _logger.LogError($"Could not execute meal search: {exception}");
                return BadRequest("Could not execute meal search.");
            }
        }
    }
}
