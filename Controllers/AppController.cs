using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ThePantry.Data;
using ThePantry.Data.Entities;

namespace ThePantry.Controllers
{
    public class AppController : Controller
    {
        private readonly IPantryRepository _repository;

        public AppController(IPantryRepository repository)
        {
            _repository = repository;
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

        [HttpGet("meals")]

        public IActionResult Meals()
        {
            var meals = _repository.GetAllMeals();
            return View(meals);
        }

        [HttpGet("pantries")]
        public IActionResult Pantries()
        {
            var pantries = _repository.GetAllPantries();
            return View(pantries);
        }

    }
}
