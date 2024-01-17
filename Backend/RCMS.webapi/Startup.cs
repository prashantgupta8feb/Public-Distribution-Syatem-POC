namespace RCMS.webapi
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using RCMS.webapi.Data;

    public class Startup
    {
        // Constructor with IConfiguration parameter
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;

        }

        // Property to hold the configuration
        public IConfiguration Configuration { get; }
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            app.UseCors(builder => builder
                .WithOrigins("http://localhost:3000") // Adjust with your React app's URL
                .AllowAnyHeader()
                .AllowAnyMethod());
        }

        // ConfigureServices method
        public void ConfigureServices(IServiceCollection services)
        {
            // Assuming you have a DataContext class for Entity Framework
            services.AddCors();
            services.AddDbContext<DataContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

        }
    }


}
