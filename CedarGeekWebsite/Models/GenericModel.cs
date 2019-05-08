using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CedarGeekWebsite.Models
{
    public class GenericModel
    {
        public string email { get; set; }
        public string subject { get; set; }
        public string message { get; set; }
        // Name and tool are optional
        public string name { get; set; }
        public string tool { get; set; } // What program being reported?
        public bool human { get; set; }

        string ActivePage;

        public void SetActive(string view)
        {
            ActivePage = view;
        }
        public string GetActive(string currentView)
        {
            if (ActivePage == null || ActivePage == "")
            {
               ActivePage = "Home";
            } // Account for null values
            if (currentView == ActivePage)
            { // Return class="active"
                return "active";
            }
            // else return nothing
            return "";
        }

        public void SendEmail()
        {
        }

        public void OnGet()
        {

        }
    }
}
