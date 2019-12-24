import { Component, OnInit } from '@angular/core';
import notify from "devextreme/ui/notify";

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html'
})
export class ConsultaComponent implements OnInit {

  House = [{
    ID: 1,
    Nombre:"Evento 1",
    Entrada: "General",
    Address: "652 Avonwick Gate",
    City: "Toronto",
    State: "ON",
    ZipCode: "M3A25",
    Price: 7.000,
    Image: "../assets/img/1.jpg"
  },
    {
      ID: 2,
      Nombre:"Evento 2",
      Entrada: "General",
      Address: "82649 Topeka St",
      City: "Riverbank",
      State: "CA",
      ZipCode: "95360",
      Price: 1750000,
      Image: "../assets/img//2.jpg"
    },
    {
      ID: 3,
      Nombre:"Evento 3",
      Entrada: "General",
      Address: "328 S Kerema Ave",
      City: "Milford",
      State: "CT",
      ZipCode: "06465",
      Price: 350000,
      Image: "../assets/img/3.jpg"
    },
    {
      ID: 4,
      Nombre:"Evento 4",
      Entrada: "General",
      Address: "5119 Beryl Dr",
      City: "San Antonio",
      State: "TX",
      ZipCode: "78212",
      Price: 455000,
      Image: "../assets/img/4.jpg"
    },
    {
      ID: 5,
      Nombre:"Evento 5",
      Entrada: "General",
      Address: "61207 16th St N",
      City: "Moorhead",
      State: "MN",
      ZipCode: "56564",
      Price: 1700000,
      Image: "../assets/img/5.jpg"
    },
    {
      ID: 6,
      Nombre:"Evento 6",
      Entrada: "General",
      Address: "8512 Tanglewood Cir",
      City: "Reform",
      State: "AL",
      ZipCode: "35487",
      Price: 250000,
      Image: "../assets/img/6.jpg"
    },
    {
      ID: 7,
      Nombre:"Evento 7",
      Entrada: "General",
      Address: "7121 Bailey St",
      City: "Worcester",
      State: "MA",
      ZipCode: "01605",
      Price: 555000,
      Image: "../assets/img/7.jpg"
    },
    {
      ID: 8,
      Nombre:"Evento 8",
      Entrada: "General",
      Address: "620201 Plymouth Rd",
      City: "Detroit",
      State: "MI",
      ZipCode: " 48224",
      Price: 610000,
      Image: "../assets/img/8.jpg"
    },
    {
      ID: 9,
      Nombre:"Evento 9",
      Entrada: "General",
      Address: "1198 Theresa Cir",
      City: "Whitinsville",
      State: "MA",
      ZipCode: "01582",
      Price: 320000,
      Image: "../assets/img/9.jpg"
    }];

  House2 = [{
    ID: 1,
    Nombre:"Evento 1",
    Entrada: "General",
    Address: "652 Avonwick Gate",
    City: "Toronto",
    State: "ON",
    ZipCode: "M3A25",
    Price: 7.000,
    Image: "../assets/img/1.jpg"
  },
    {
      ID: 2,
      Address: "82649 Topeka St",
      City: "Riverbank",
      State: "CA",
      ZipCode: "95360",
      Price: 1750000,
      Image: "../assets/img//2.jpg"
    },
    {
      ID: 3,
      Address: "328 S Kerema Ave",
      City: "Milford",
      State: "CT",
      ZipCode: "06465",
      Price: 350000,
      Image: "../assets/img/3.jpg"
    },
    {
      ID: 4,
      Address: "5119 Beryl Dr",
      City: "San Antonio",
      State: "TX",
      ZipCode: "78212",
      Price: 455000,
      Image: "../assets/img/4.jpg"
    },
    {
      ID: 5,
      Address: "61207 16th St N",
      City: "Moorhead",
      State: "MN",
      ZipCode: "56564",
      Price: 1700000,
      Image: "../assets/img/5.jpg"
    },
    {
      ID: 6,
      Address: "8512 Tanglewood Cir",
      City: "Reform",
      State: "AL",
      ZipCode: "35487",
      Price: 250000,
      Image: "../assets/img/6.jpg"
    },
    {
      ID: 7,
      Address: "7121 Bailey St",
      City: "Worcester",
      State: "MA",
      ZipCode: "01605",
      Price: 555000,
      Image: "../assets/img/7.jpg"
    },
    {
      ID: 8,
      Address: "620201 Plymouth Rd",
      City: "Detroit",
      State: "MI",
      ZipCode: " 48224",
      Price: 610000,
      Image: "../assets/img/8.jpg"
    },
    {
      ID: 9,
      Address: "1198 Theresa Cir",
      City: "Whitinsville",
      State: "MA",
      ZipCode: "01582",
      Price: 320000,
      Image: "../assets/img/9.jpg"
    }];

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

  constructor() { }

  ngOnInit() {
  }

}
