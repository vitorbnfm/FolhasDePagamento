import { CadastrarFuncionarioComponent } from './components/views/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { DeletarFolhaComponent } from './components/views/folha/deletar-folha/deletar-folha.component';
import { ListarFuncionarioComponent } from './components/views/funcionario/listar-funcionario/listar-funcionario.component';
import { CadastrarFolhaComponent } from './components/views/folha/cadastrar-folha/cadastrar-folha.component';
import { ListarFolhaComponent } from './components/views/folha/listar-folha/listar-folha.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: "",
      component: ListarFolhaComponent,
  },

  {
    path: "folha/listar",
    component: ListarFolhaComponent,
  },
  {
    path: "folha/cadastrar",
    component: CadastrarFolhaComponent,
  },
  {
    path: "folha/deletar",
    component: DeletarFolhaComponent,
  },

  {
    path: "funcionario/listar",
    component: ListarFuncionarioComponent,
  },
  {
    path: "funcionario/cadastrar",
    component: CadastrarFuncionarioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}