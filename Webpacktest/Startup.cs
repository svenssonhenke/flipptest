using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.DependencyInjection;

namespace Webpacktest
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddNodeServices(x =>
            {
                x.ProjectPath = Directory.GetCurrentDirectory();
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true,
                    ConfigFile = "webpack.config.js",
                    ProjectPath = System.IO.Path.Combine(env.ContentRootPath, "wwwroot/")
                });
            }
            app.UseStaticFiles();

            app.UseMvc(options =>
            {
                options.MapRoute(
                    name: "default",
                    template: "{controller=StartPage}/{action=Index}");
            });
            //app.Run(async (context) => {
            //await context.Response.WriteAsync("Hello World!");
            //});
        }
    }
}
