import { Component, OnInit } from '@angular/core';
import { IEvents} from '../interfaces/i-events';

@Component({
  selector: 'events-show',
  templateUrl: './events-show.component.html',
  styleUrls: ['./events-show.component.css']
})
export class EventsShowComponent implements OnInit {
  public events: IEvents[]=[{
    title:"Evento de prueba",
    image:"",
    date:"2019-03-15",
    description:"Nos lo pasaremos genial",
    price:23.95

  },{
    title:"Evento de prueba 2",
    image:"",
    date:"2019-03-21",
    description:"Este es peor",
    price:15.50
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
