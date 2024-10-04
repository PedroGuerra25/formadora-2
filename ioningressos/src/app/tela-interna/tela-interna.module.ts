import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaInternaPageRoutingModule } from './tela-interna-routing.module';

import { TelaInternaPage } from './tela-interna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaInternaPageRoutingModule
  ],
  declarations: [TelaInternaPage]
})
export class TelaInternaPageModule {}
