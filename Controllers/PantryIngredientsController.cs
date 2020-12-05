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
    [Route("api/pantries/{pantryId}/pantryingredients")]
    [ApiController]
    public class PantryIngredientsController : ControllerBase
    {
        private readonly IPantryRepository _repository;
        private readonly ILogger<PantryIngredientsController> _logger;
        private readonly IMapper _mapper;
        private readonly LinkGenerator _linkGenerator;

        public PantryIngredientsController(IPantryRepository repository, ILogger<PantryIngredientsController> logger, IMapper mapper, LinkGenerator linkGenerator)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
            _linkGenerator = linkGenerator;
        }

        [HttpGet]
        public ActionResult<PantryIngredientViewModel[]> ShowPantryIngredients(int pantryId)
        {
            try
            {
                var ingredients = _repository.GetPantryIngredientsByPantryId(pantryId);
                return Ok(_mapper.Map<PantryIngredientViewModel[]>(ingredients));
            }
            catch (Exception exception)
            {
                _logger.LogError($"Could not get pantry ingredients: {exception}");
                return BadRequest("Could not find pantry ingredients for this pantry.");
            }
        }

        [HttpGet("{pantryIngredientId:int}")]
        public ActionResult<PantryIngredientViewModel> ShowPantryIngredient(int pantryId, int pantryIngredientId)
        {
            try
            {
                var pantryIngredient = _repository.GetPantryIngredientByPantryId(pantryId, pantryIngredientId);
                return _mapper.Map<PantryIngredientViewModel>(pantryIngredient);
            }
            catch (Exception exception)
            {
                _logger.LogError($"Could not get that pantry ingredient: {exception}");
                return BadRequest("Could not find that ingredient.");
            }
        }

        [HttpDelete("{pantryIngredientId:int}")]
        public IActionResult Delete(int pantryId, int pantryIngredientId)
        {
            try
            {
                var pantryIngredientToDelete = _repository.GetPantryIngredientByPantryId(pantryId, pantryIngredientId);
                if (pantryIngredientToDelete == null)
                {
                    return NotFound("Failed to locate pantry ingredient, unable to delete.");
                }

                _repository.DeleteEntity(pantryIngredientToDelete);

                if (_repository.SaveAll())
                {
                    return Ok();
                }
            }
            catch (Exception exception)
            {
                _logger.LogError($"Could not delete pantry ingredient: {exception}");
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Database failure.");
            }
            return BadRequest("Could not delete that ingredient.");
        }
    }
}
