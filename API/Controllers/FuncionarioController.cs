using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/funcionario")]
    public class FuncionarioController : ControllerBase
    {
        private readonly DataContext _context;

        //Construtor
        public FuncionarioController(DataContext context) => _context = context;

        //POST: api/funcionario/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] Funcionario funcionario)
        {
            _context.Funcionarios.Add(funcionario);
            _context.SaveChanges();
            return Created("", funcionario);
        }

        //GET: api/funcionario/list
        [HttpGet]
        [Route("list")]
        public IActionResult List() => Ok(_context.Funcionarios.ToList());


    }
}