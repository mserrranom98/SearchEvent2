import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { ConsultaComponent } from './consulta/consulta.component';
import {
  DxAccordionModule,
  DxButtonModule, DxCheckBoxModule, DxFormModule,
  DxGalleryModule,
  DxListModule, DxLoadIndicatorModule,
  DxMapModule, DxNumberBoxModule, DxRadioGroupModule, DxSelectBoxModule, DxTextAreaModule,
  DxTileViewModule
} from "devextreme-angular";
import { DetalleComponent } from './detalle/detalle.component';
import {MatStepperModule} from "@angular/material";


@NgModule({
  declarations: [ConsultaComponent, DetalleComponent],
  imports: [
    CommonModule,
    EventosRoutingModule,
    MatStepperModule,
    DxTileViewModule,
    DxButtonModule,
    DxGalleryModule,
    DxMapModule,
    DxButtonModule,
    DxGalleryModule,
    DxNumberBoxModule,
    DxFormModule,
    DxLoadIndicatorModule,
    DxTextAreaModule,
    DxCheckBoxModule,
    DxListModule,
    DxSelectBoxModule,
    DxRadioGroupModule
  ]
})
export class EventosModule { }
