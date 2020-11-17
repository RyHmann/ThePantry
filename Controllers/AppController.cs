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
        private readonly PantryContext _context;

        public AppController(PantryContext context)
        {
            _context = context;
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

        public IActionResult Meals()
        {
            var meals = _context.Meals
                .OrderBy(p => p.Name)
                .ToList();
            
            return View(meals);
        }
    }
}
