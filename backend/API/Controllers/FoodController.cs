using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FoodController : Controller
    {
        private MovieDbContext context;
        public FoodController(MovieDbContext temp)
        {
            context = temp;
        }

        public IEnumerable<Movie>  Get()
        {
            return context.Movies.Where(x => x.Edited == "Yes").OrderBy(x => x.Title).ToArray();
        }

    }
}
