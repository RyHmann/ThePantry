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
using ThePantry.ViewModels;

namespace ThePantry.Controllers
{
    
    [ApiController]
    [Route("api/meals/{mealId}/mealingredients")]
    public class MealIngredientsController : ControllerBase
    {
        private readonly IPantryRepository _repository;
        private readonly ILogger<MealIngredientsController> _logger;
        private readonly IMapper _mapper;
        private readonly LinkGenerator _linkGenerator;

        public MealIngredientsController(IPantryRepository repository, ILogger<MealIngredientsController> logger, IMapper mapper, LinkGenerator linkGenerator)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
            _linkGenerator = linkGenerator;
        }

        [HttpGet]
        public ActionResult<MealIngredientViewModel[]> ShowMealIngredients(int mealId)
        {
            try
            {
                var ingredients = _repository.GetMealIngredientsByMealId(mealId);
                return Ok(_mapper.Map<MealIngredientViewModel[]>(ingredients));
            }
            catch (Exception exception)
            {

                _logger.LogInformation($"Could not get meal ingredients: {exception}");
                return BadRequest("Could not find meal ingredients.");
            }
        }

        [HttpGet("{mealIngredientId:int}")]
        public ActionResult<MealIngredientViewModel> ShowMealIngredient(int mealId, int mealIngredientId)
        {
            try
            {
                return Ok(_repository.GetMealIngredientByMealId(mealId, mealIngredientId));
            }
            catch (Exception exception)
            {
                _logger.LogInformation($"Could not get that meal ingredient: {exception}");
                return BadRequest("Could not find that ingredient.");
            }
        }
    }
}
