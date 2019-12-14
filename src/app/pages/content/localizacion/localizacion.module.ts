import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalizacionRoutingModule } from './localizacion-routing.module';
import { ConsultaComponent } from './consulta/consulta.component';


@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    LocalizacionRoutingModule
  ]
})
export class LocalizacionModule { }
