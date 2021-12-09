import { Folha } from 'src/app/models/folha';
import { FuncionarioService } from './../../../../services/funcionario.service';
import { Funcionario } from './../../../../models/funcionario';
import { Component, OnInit } from '@angular/core';
import { FolhaService } from 'src/app/services/folha.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-folha',
  templateUrl: './cadastrar-folha.component.html',
  styleUrls: ['./cadastrar-folha.component.css']
})
export class CadastrarFolhaComponent implements OnInit {
  horatrabalhada!: number;
  valorhora!: number;
  mes!: number;
  ano!: number;
  funcionarios!: Funcionario[];
  funcionarioId!: number;

  constructor(
      private folhaService: FolhaService,
      private funcionarioService: FuncionarioService,
      private router: Router
  ) {}

  ngOnInit(): void {
      this.funcionarioService.list().subscribe((funcionarios) => {
          this.funcionarios = funcionarios;          
      });
  }

  cadastrar(): void {
      let folha: Folha = {
          horatrabalhada: this.horatrabalhada,
          valorhora: this.valorhora,
          mes: this.mes,
          ano: this.ano,
          funcionarioId: this.funcionarioId,
      };
      this.folhaService.create(folha).subscribe((folha) => {
          console.log(folha);
          this.router.navigate(["folha/listar"]);
      });
  }
}