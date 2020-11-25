using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ThePantry.Data;

namespace ThePantry.Controllers
{
    [Route("api/meals/{mealid}/{ingredients}")]
    public class MealIngredientsController : ControllerBase
    {
        private readonly IPantryRepository _repository;
        private readonly ILogger<MealIngredientsController> _logger;
        private readonly IMapper _mapper;

        public MealIngredientsController(IPantryRepository repository, ILogger<MealIngredientsController> logger, IMapper mapper)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get(int mealId)
        {
            try
            {
                return Ok(_repository.GetMealIngredientByMealId(mealId));
            }
            catch (Exception exception)
            {
                _logger.LogInformation($"Could not get meal ingredients: {exception}");
                return BadRequest("Could not find ingredients.");
            }
        }
    }
}
