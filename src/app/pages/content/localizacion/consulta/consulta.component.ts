import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  markerUrl = 'https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png';

  markers: any[] = [{
    location: [40.755833, -73.986389],
    tooltip: {
      isShown: false,
      text: "Times Square"
    }
  }, {
    location: "40.7825, -73.966111",
    tooltip: {
      isShown: false,
      text: "Central Park"
    }
  }, {
    location: {
      lat: 40.753889,
      lng: -73.981389
    },
    tooltip: {
      isShown: false,
      text: "Fifth Avenue"
    }
  }, {
    location: "Brooklyn Bridge,New York,NY",
    tooltip: {
      isShown: false,
      text: "Brooklyn Bridge"
    }
  }];

  constructor() { }

  ngOnInit() {
  }

}
