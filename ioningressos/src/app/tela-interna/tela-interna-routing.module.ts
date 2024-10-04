import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaInternaPage } from './tela-interna.page';

const routes: Routes = [
  {
    path: '',
    component: TelaInternaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaInternaPageRoutingModule {}
