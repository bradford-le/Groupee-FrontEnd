import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = [
    { name: "Ironhack launch", host: "Brad", isClosed: false },
    { name: "Breakfast", host: "Tair", isClosed: true },
    { name: "Italy trip", host: "Emilie", isClosed: true },
    { name: "Beach Volley dinner", host: "Arnau", isClosed: false },
    { name: "Italy trip", host: "Emilie", isClosed: true },
    { name: "Beach Volley dinner", host: "Arnau", isClosed: false },
  ];


  constructor() { }

  ngOnInit() {
  }

}
