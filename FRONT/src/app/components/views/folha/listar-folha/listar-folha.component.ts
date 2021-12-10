import { FolhaService } from './../../../../services/folha.service';
import { Component, OnInit } from '@angular/core';
import { Folha } from 'src/app/models/folha';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-folha',
  templateUrl: './listar-folha.component.html',
  styleUrls: ['./listar-folha.component.css']
})
export class ListarFolhaComponent implements OnInit {
  folhas: Folha[] = [];
  colunasExibidas: String[] = [
      "id",
      "horaTrabalhada",
      "valorHora",
      "mes",
      "ano",
      "funcionario",
      "setor",
             
  ];

  constructor(private service: FolhaService, private router: Router) {}

  ngOnInit(): void {
      this.service.list().subscribe((folhas) => {
          this.folhas = folhas;
      });
  }

  detalhar(id: any): void{
    console.log(id);
    this.router.navigate([`folha/detalhar/:${id}`]);
  }




}