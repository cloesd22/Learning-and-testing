using Projectatis.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Projectatis.Controllers
{
    public class moneyController : Controller
    {
        // GET: money
        public ActionResult Index()
        {
            return View();
        }

        // GET: money/Details/5
        public ActionResult Details()
        {
            var moneyer = new money { moneycounter = 10 };
            return View(moneyer);
        }

      
        // GET: money/Create
        public ActionResult Create()
        {
            return View();
        }



        // POST: money/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: money/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: money/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: money/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: money/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
