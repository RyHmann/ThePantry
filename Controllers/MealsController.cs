using AutoMapper;
using Microsoft.AspNetCore.Http;
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
        public ActionResult<MealViewModel[]> ShowAllMeals()
        {
            try
            {
                var meals = _repository.GetAllMeals();
                return (_mapper.Map<MealViewModel[]>(meals));
            }
            catch (Exception exception)
            {

                _logger.LogError($"Failed to get meals: {exception}");
                return BadRequest("Failed to get meals");
            }
        }

        [HttpGet("{id:int}")]
        public ActionResult<MealViewModel> ShowMealById(int id)
        {
            try
            {
                var meal = _repository.GetMealById(id);
                if (meal != null)
                {
                    return Ok(_mapper.Map<MealViewModel>(meal));
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


        [HttpPut("{id:int}")]
        public async Task<ActionResult<MealViewModel>> EditMeal(int id, MealViewModel model)
        {
            try
            {
                var existingMeal = _repository.GetMealById(id);
                if (existingMeal == null)
                {
                    return NotFound($"Could not fine meal with id of {id}.");
                }
                _mapper.Map(model, existingMeal);

                var saveChanges = await _repository.SaveAll();
                if (saveChanges)
                {
                    return _mapper.Map<MealViewModel>(existingMeal);
                }
            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Database failure.");
            }
            return BadRequest("Unable to edit meal.");
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var oldMeal = _repository.GetMealById(id);
                if (oldMeal == null)
                {
                    return NotFound();
                }

                _repository.DeleteEntity(oldMeal);

                var saveChanges = await _repository.SaveAll();
                if (saveChanges)
                {
                    return Ok();
                }
            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Database failure.");
            }
            return BadRequest();
        }
    }
}
