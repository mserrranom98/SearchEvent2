import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { ConsultaComponent } from './consulta/consulta.component';
import {DxAccordionModule, DxButtonModule, DxGalleryModule} from "devextreme-angular";


@NgModule({
  declarations: [ConsultaComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    DxGalleryModule,
    DxButtonModule,
    DxAccordionModule,
  ]
})
export class InicioModule { }
