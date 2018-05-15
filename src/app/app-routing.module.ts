import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AcessoComponent} from './acesso/acesso.component';

const routes: Routes = [
    {path: '',  component: AcessoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
