using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ThePantry.Data;
using ThePantry.Data.Entities;

namespace ThePantry.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    [Produces("application/json")]
    public class MealsController : ControllerBase
    {
        private readonly PantryRepository _repository;
        private readonly ILogger<MealsController> _logger;

        public MealsController(PantryRepository repository, ILogger<MealsController> logger)
        {
            _repository = repository;
            _logger = logger;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Meal>> Get()
        {
            try
            {
                return Ok(_repository.GetAllMeals());
            }
            catch (Exception exception)
            {

                _logger.LogError($"Failed to get meals: {exception}");
                return BadRequest("Failed to get products");
            }
            
        }
    }
}
