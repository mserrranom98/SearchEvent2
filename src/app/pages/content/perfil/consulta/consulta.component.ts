import { Component, OnInit } from '@angular/core';
import notify from "devextreme/ui/notify";

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  employee = [{
    ID: 1,
    RUT: "11.111.111-1",
    Nombre: "Heart",
    Apellido: "Super",
    Email: "prueba@prueba.cl",
    Precio:"7.000",
  }]

  constructor() { }

  buttonText = "Ir";
  loadIndicatorVisible = false;

  onClick(data){
    this.buttonText = "Ir";
    this.loadIndicatorVisible = true;
    notify('Se ha guardado con exito.');
    setTimeout(() => {
      this.buttonText = "Ir";
      this.loadIndicatorVisible = false;
      notify('Ha ocurrido un error');
    }, 2000);
  }

  ngOnInit() {
  }

}
