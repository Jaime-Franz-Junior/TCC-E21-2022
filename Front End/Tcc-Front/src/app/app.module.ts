import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageListaCursosComponent } from './page-lista-cursos/page-lista-cursos.component';
import { PageDetalheAulaComponent } from './page-detalhe-aula/page-detalhe-aula.component';
import { PageCriarContaComponent } from './page-criar-conta/page-criar-conta.component';
import { PageRecuperacaoSenhaComponent } from './page-recuperacao-senha/page-recuperacao-senha.component';
import { PageDetalheVideoAulaComponent } from './page-detalhe-video-aula/page-detalhe-video-aula.component';
import { PageDetalheContatoComponent } from './page-detalhe-contato/page-detalhe-contato.component';
@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageListaCursosComponent,
    PageDetalheAulaComponent,
    PageCriarContaComponent,
    PageRecuperacaoSenhaComponent,
    PageDetalheVideoAulaComponent,
    PageDetalheContatoComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
