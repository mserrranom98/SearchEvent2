import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprasRoutingModule } from './compras-routing.module';
import { ConsultaComponent } from './consulta/consulta.component';
import {
  DxActionSheetModule,
  DxButtonModule,
  DxFormModule,
  DxListModule,
  DxLoadIndicatorModule,
  DxTileViewModule
} from 'devextreme-angular';


@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    ComprasRoutingModule,
    DxTileViewModule,
    DxButtonModule,
    DxListModule,
    DxLoadIndicatorModule,
    DxActionSheetModule,
    DxFormModule
  ]
})
export class ComprasModule { }
