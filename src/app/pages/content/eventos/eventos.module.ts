import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { ConsultaComponent } from './consulta/consulta.component';
import {DxButtonModule, DxGalleryModule, DxNavBarModule} from "devextreme-angular";


@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    EventosRoutingModule,
    DxNavBarModule
  ]
})
export class EventosModule { }
