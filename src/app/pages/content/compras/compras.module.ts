import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprasRoutingModule } from './compras-routing.module';
import { ConsultaComponent } from './consulta/consulta.component';


@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    ComprasRoutingModule
  ]
})
export class ComprasModule { }
