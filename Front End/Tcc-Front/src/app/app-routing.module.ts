import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCriarContaComponent } from './page-criar-conta/page-criar-conta.component';
import { PageDetalheAulaComponent } from './page-detalhe-aula/page-detalhe-aula.component';
import { PageDetalheContatoComponent } from './page-detalhe-contato/page-detalhe-contato.component';
import { PageDetalheVideoAulaComponent } from './page-detalhe-video-aula/page-detalhe-video-aula.component';
import { PageListaCursosComponent } from './page-lista-cursos/page-lista-cursos.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageRecuperacaoSenhaComponent } from './page-recuperacao-senha/page-recuperacao-senha.component';

const routes: Routes = [
  {
    path: 'login',
    component: PageLoginComponent,
  },
  {
    path: 'cursos',
    component: PageListaCursosComponent,
    children: [
      {
        path: 'detalhe-aula/:id',
        component: PageDetalheAulaComponent
      },
      {
        path: 'video-aula/:id',
        component: PageDetalheVideoAulaComponent
      },
      {
        path: 'detalhe-contato/:id',
        component: PageDetalheContatoComponent
      }
    ],

  },
  {
    path: 'criar-conta',
    component: PageCriarContaComponent
  },
  {
    path: 'recuperar-senha',
    component: PageRecuperacaoSenhaComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
