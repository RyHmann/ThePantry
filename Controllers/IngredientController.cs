using AutoMapper;
using Microsoft.AspNetCore.Mvc;
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
    [Route("api/[Controller]")]
    [ApiController]
    public class IngredientController : ControllerBase
    {
        private readonly IPantryRepository _repository;
        private readonly ILogger<IngredientController> _logger;
        private readonly IMapper _mapper;

        public IngredientController(IPantryRepository repository, ILogger<IngredientController> logger, IMapper mapper)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<MealIngredientViewModel[]>> GetIngredient(string id)
        {
            try
            {
                var ingredientMatch = await _repository.IngredientHasMatch(id);
                if (ingredientMatch)
                {
                    var newIngredient = _repository.GetIngredientsContainingName(id);
                    var newIngredientVM = _mapper.Map<IngredientViewModel[]>(newIngredient);
                    return Ok(newIngredientVM);
                }
                else
                {
                    return NotFound($"{id} not found");
                }
            }
            catch (Exception exception)
            {
                _logger.LogInformation($"Failed to get ingredients: {exception}");
                return BadRequest("Could not find ingredient");
            }
        }
    }
}
