using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApplication1.Pages
{
    public class new_materialsModel : PageModel
    {
        private readonly ILogger<new_materialsModel> _logger;

        public new_materialsModel(ILogger<new_materialsModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}
