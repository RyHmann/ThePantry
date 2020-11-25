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
    [Route("/api/[Controller]")]
    [ApiController]
    public class PantriesController : ControllerBase
    {
        private readonly IPantryRepository _repository;
        private readonly ILogger<PantriesController> _logger;
        private readonly IMapper _mapper;

        public PantriesController(IPantryRepository repository, ILogger<PantriesController> logger, IMapper mapper)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
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
        public IActionResult ShowPantryById(int id)
        {
            try
            {
                return Ok(_repository.GetPantryById(id));
            }
            catch (Exception exception)
            {

                _logger.LogError($"Failed to get Pantry: {exception}");
                return BadRequest("Failed to get pantry.");
            }
        }
    }
}
