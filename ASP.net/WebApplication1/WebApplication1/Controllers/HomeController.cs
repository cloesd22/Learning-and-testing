using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        // GET /home/index
        public ActionResult Index()
        {
            return View();
        }

        //GET /home/about
        //So inside the controllers folder there is a 'home' controller. anything that uses /home/ gets routed through there.
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Call me men";

            return View();
        }

        [HttpPost]
        public ActionResult Contact(int message)
        {
            ViewBag.Message = "Thanks we got it men";

            return View();
        }

        [Authorize]
        public ActionResult Foo()
        {
            return View("About");
        }

        public ActionResult Serial(string letterCase)
        {
            var serial = "ASPNETMVC5ATM1";

            if (letterCase == "lower")
            {
                return Content(serial.ToLower());
            }


            // return new HttpStatusCodeResult(403);
            // return Json(new { name = "serial", value = serial }, JsonRequestBehavior.AllowGet);
            return RedirectToAction("Index");


        }


    }
}