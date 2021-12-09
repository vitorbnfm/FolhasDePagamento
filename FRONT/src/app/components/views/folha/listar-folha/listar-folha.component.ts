import { FolhaService } from './../../../../services/folha.service';
import { Component, OnInit } from '@angular/core';
import { Folha } from 'src/app/models/folha';

@Component({
  selector: 'app-listar-folha',
  templateUrl: './listar-folha.component.html',
  styleUrls: ['./listar-folha.component.css']
})
export class ListarFolhaComponent implements OnInit {
  folhas: Folha[] = [];
  colunasExibidas: String[] = [
      "id",
      "horatrabalhada",
      "valorhora",
      "mes",
      "ano",
      "funcionario",
  ];

  constructor(private service: FolhaService) {}

  ngOnInit(): void {
      this.service.list().subscribe((folhas) => {
          this.folhas = folhas;
      });
  }
}