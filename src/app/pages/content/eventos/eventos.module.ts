import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { ConsultaComponent } from './consulta/consulta.component';
import {
  DxButtonModule,
  DxGalleryModule,
  DxListModule,
  DxMapModule,
  DxNavBarModule,
  DxTileViewModule
} from "devextreme-angular";


@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    EventosRoutingModule,
    DxTileViewModule,
    DxButtonModule,
    DxGalleryModule,
    DxMapModule,
    DxListModule
  ]
})
export class EventosModule { }
