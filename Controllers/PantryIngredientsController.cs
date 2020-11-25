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
    public class PantryIngredientsController : ControllerBase
    {
        private readonly IPantryRepository _repository;
        private readonly ILogger<PantryIngredientsController> _logger;
        private readonly IMapper _mapper;

        public PantryIngredientsController(IPantryRepository repository, ILogger<PantryIngredientsController> logger, IMapper mapper)
        {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
        }
    }
}
