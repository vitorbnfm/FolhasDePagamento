using System;

namespace API.Models
{
    public class Folha
    {
        public Folha() => CriadoEm = DateTime.Now;

        public int Id { get; set; }
        public int HoraTrabalhada { get; set; }
        public int ValorHora { get; set; }
        public int Mes { get; set; }
        public int Ano { get; set; }
        public Funcionario Funcionario { get; set; }
        public int FuncionarioId { get; set; }
        public DateTime CriadoEm { get; set; }
    }
}
