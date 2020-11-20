using AutoMapper;
using Microsoft.AspNetCore.Mvc;
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
    public class MealsController : ControllerBase
    {
        private readonly IPantryRepository _repository;
        private readonly ILogger<MealsController> _logger;
        private readonly IMapper _mapper;

        public MealsController(IPantryRepository repository, ILogger<MealsController> logger, IMapper mapper)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult ShowAllMeals()
        {
            try
            {
                return Ok(_mapper.Map<IEnumerable<Meal>, IEnumerable<MealViewModel>>(_repository.GetAllMeals()));
            }
            catch (Exception exception)
            {

                _logger.LogError($"Failed to get meals: {exception}");
                return BadRequest("Failed to get meals");
            }
        }

        [HttpGet("{id:int}")]
        public ActionResult ShowMealById(int id)
        {
            try
            {
                var meal = _repository.GetMealById(id);
                if (meal != null)
                {
                    return Ok(_mapper.Map<Meal, MealViewModel>(meal));
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception exception)
            {

                _logger.LogError($"Failed to get meals: {exception}");
                return BadRequest("Failed to get meal");
            }
            
        }

        [HttpPost]
        public IActionResult SaveMeal([FromBody]MealViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newMeal = _mapper.Map<MealViewModel, Meal>(model);
                    _repository.AddEntity(newMeal);
                    if (_repository.SaveAll())
                    {
                        return Created($"/api/orders/{newMeal.MealId}", _mapper.Map<Meal, MealViewModel>(newMeal));
                    }
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception exception)
            {

                _logger.LogError($"Failed to save a new meal: {exception}");
            }
            return BadRequest("Failed to save new meal");
        }
    }
}
