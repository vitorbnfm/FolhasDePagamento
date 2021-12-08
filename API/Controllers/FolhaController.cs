using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/folha")]
    public class FolhaController : ControllerBase
    {
        private readonly DataContext _context;

        //Construtor
        public FolhaController(DataContext context) => _context = context;

        //POST: api/folha/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] Folha folha)
        {   
            int funcionarioId = folha.FuncionarioId;
            folha.Funcionario = _context.Funcionarios.Find(funcionarioId);
            _context.Folhas.Add(folha);
            _context.SaveChanges();
            return Created("", folha);
        }

        //GET: api/folha/list
        [HttpGet]
        [Route("list")]
        public IActionResult List() =>
            Ok(_context.Folhas
                .Include(Folha => Folha.Funcionario)                
                .ToList());
    
    
        //DELETE: api/folha/delete
        [HttpDelete]
        [Route("folha/{id}")]
        public IActionResult Delete([FromRoute] int id)
        {
            Folha folha = _context.Folhas.FirstOrDefault
            (
                folha => folha.Id == id
            );
            if (folha == null)
            {
                return NotFound();
            }
            _context.Folhas.Remove(folha);
            _context.SaveChanges();
            return Ok(_context.Folhas.ToList());
        }

    }

}