import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { ConsultaComponent } from './consulta/consulta.component';
import {DxFormModule, DxLoadIndicatorModule} from "devextreme-angular";


@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    DxLoadIndicatorModule,
    DxFormModule
  ]
})
export class PerfilModule { }
