import { Funcionario } from './../../../../models/funcionario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css']
})
export class CadastrarFuncionarioComponent implements OnInit {
  nome!: string;
  setor!: string;


  constructor(
      private funcionarioService: FuncionarioService,
      private router: Router
  ) {}

  ngOnInit(): void {

  }

  cadastrar(): void {
      let funcionario: Funcionario = {
        nome: this.nome,
        setor: this.setor,
      };
      this.funcionarioService.create(funcionario).subscribe((funcionario) => {
          console.log(funcionario);
          this.router.navigate(["funcionario/listar"]);
      });
  }
}