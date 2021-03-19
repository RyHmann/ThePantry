using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
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
    public class AppController : Controller
    {
        private readonly IPantryRepository _repository;
        private readonly UserManager<User> _userManager;
        private readonly IMapper _mapper;

        public AppController(IPantryRepository repository, UserManager<User> userManager, IMapper mapper)
        {
            _repository = repository;
            _userManager = userManager;
            _mapper = mapper;
        }
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("contact")]
        public IActionResult Contact()
        {
            return View();
        }

        public IActionResult About()
        {
            return View();
        }

        public IActionResult MyPantry()
        {
            try
            {
                var userName = User.Identity.Name;
                var userPantry = _repository.GetPantryByUser(userName);
                if (userPantry != null)
                {
                    var pantryViewModel = _mapper.Map<PantryViewModel>(userPantry);
                    return View(pantryViewModel);
                }
                else
                {
                    return NotFound("Can't locate pantry.");
                }
            }
            catch (Exception exception)
            {
                return BadRequest($"Failed to get Pantry: {exception}.");
            }
        }

        public IActionResult MealFinder()
        {
            return View();
        }

        public IActionResult API()
        {
            return View();
        }
    }
}
