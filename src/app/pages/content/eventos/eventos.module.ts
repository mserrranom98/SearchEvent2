import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { ConsultaComponent } from './consulta/consulta.component';
import {
  DxAccordionModule,
  DxButtonModule, DxCheckBoxModule, DxFormModule,
  DxGalleryModule,
  DxListModule,
  DxMapModule, DxNumberBoxModule, DxRadioGroupModule, DxTextAreaModule,
  DxTileViewModule
} from "devextreme-angular";
import { DetalleComponent } from './detalle/detalle.component';


@NgModule({
  declarations: [ConsultaComponent, DetalleComponent],
  imports: [
    CommonModule,
    EventosRoutingModule,
    DxTileViewModule,
    DxButtonModule,
    DxGalleryModule,
    DxMapModule,
    DxButtonModule,
    DxGalleryModule,
    DxNumberBoxModule,
    DxFormModule,
    DxTextAreaModule,
    DxCheckBoxModule,
    DxListModule,
    DxRadioGroupModule
  ]
})
export class EventosModule { }
