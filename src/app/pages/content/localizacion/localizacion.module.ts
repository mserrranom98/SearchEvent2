import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalizacionRoutingModule } from './localizacion-routing.module';
import { ConsultaComponent } from './consulta/consulta.component';
import {DxMapModule} from "devextreme-angular";


@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    LocalizacionRoutingModule,
    DxMapModule
  ]
})
export class LocalizacionModule { }
