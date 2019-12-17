import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConsultaComponent} from './consulta/consulta.component';
import {DetalleComponent} from './detalle/detalle.component';


const routes: Routes = [
  {path: 'consulta', component: ConsultaComponent, data: { title: 'Consulta' }},
  {path: 'detalle', component: DetalleComponent, data: { title: 'Detalle' }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }
