import { FolhaService } from './../../../../services/folha.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Folha } from 'src/app/models/folha';

@Component({
  selector: 'app-deletar-folha',
  templateUrl: './deletar-folha.component.html',
  styleUrls: ['./deletar-folha.component.css']
})
export class DeletarFolhaComponent implements OnInit {
  folhas!: Folha[];

  constructor(
      private folhaService: FolhaService,
      private router: Router
  ) {}

  ngOnInit(): void {
      this.folhaService.list().subscribe((folhas) => {
          this.folhas = folhas;
      });
  }

  deletar(id: any): void {
    this.folhaService.delete(id).subscribe((res) => {
      alert("Folha deletada");
      location.reload();
  });
  }
}