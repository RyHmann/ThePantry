using Microsoft.AspNetCore.Mvc;

namespace ThePantry.Controllers
{
    public class AppController : Controller
    {
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

        public IActionResult API()
        {
            return View();
        }
    }
}
