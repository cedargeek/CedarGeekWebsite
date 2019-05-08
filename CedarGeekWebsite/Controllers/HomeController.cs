using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CedarGeekWebsite.Models;
using System.Data;
using CedarGeekWebsite.Support;

namespace CedarGeekWebsite.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Challenges()
        {
            GenericModel modelOut = new GenericModel();
            modelOut.SetActive("Challenges");
            return View(modelOut);
        }
        public IActionResult Donations()
        {
            GenericModel modelOut = new GenericModel();
            modelOut.SetActive("Donations");
            return View(modelOut);
        }
        public IActionResult Index()
        {
            GenericModel modelOut = new GenericModel();
            modelOut.SetActive("Home");
            return View(modelOut);
        }
        public IActionResult Playground()
        {
            GenericModel modelOut = new GenericModel();
            modelOut.SetActive("Playground");
            return View(modelOut);
        }
        public IActionResult Privacy()
        {
            GenericModel modelOut = new GenericModel();
            modelOut.SetActive("Privacy");
            return View(modelOut);
        }
        public IActionResult Tools()
        {
            GenericModel modelOut = new GenericModel();
            modelOut.SetActive("Tools");
            return View(modelOut);
        }
        public IActionResult Contact()
        {
            GenericModel modelOut = new GenericModel();
            modelOut.SetActive("Contact");
            return View(modelOut);
        }
        public IActionResult Assess()
        {
            GenericModel modelOut = new GenericModel();
            modelOut.SetActive("Home");
            return View(modelOut);
            // return View(new AssessModel());
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
