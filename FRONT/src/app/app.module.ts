import { AppComponent } from './app.component';
import { CadastrarFuncionarioComponent } from './components/views/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { ListarFuncionarioComponent } from './components/views/funcionario/listar-funcionario/listar-funcionario.component';
import { CadastrarFolhaComponent } from './components/views/folha/cadastrar-folha/cadastrar-folha.component';
import { ListarFolhaComponent } from './components/views/folha/listar-folha/listar-folha.component';

import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { MatGridListModule } from "@angular/material/grid-list";
import { DeletarFolhaComponent } from './components/views/folha/deletar-folha/deletar-folha.component';
import { TemplateComponent } from './components/template/template.component';
import { DetalharFolhaComponent } from './components/views/folha/detalhar-folha/detalhar-folha.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastrarFuncionarioComponent,
    ListarFuncionarioComponent,
    CadastrarFolhaComponent,
    ListarFolhaComponent,
    DeletarFolhaComponent,
    TemplateComponent,
    DetalharFolhaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatGridListModule,
],
providers: [],
bootstrap: [AppComponent],
})
export class AppModule {}
