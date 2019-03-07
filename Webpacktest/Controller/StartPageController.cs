using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.NodeServices;

namespace Webpacktest.Controller
{
    public class StartPageController : Microsoft.AspNetCore.Mvc.Controller
    {
        private readonly INodeServices _nodeServices;

        public StartPageController(INodeServices nodeServices) {
            _nodeServices = nodeServices;
        }

        public async Task<IActionResult> Index() {
            var result = await _nodeServices.InvokeExportAsync<string>("./wwwroot/dist/server/server.js", "Run");
            return View("Index",result);
        }
    }
}