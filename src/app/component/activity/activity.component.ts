import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  activities = [
    { pay: false, reciver: "Brad",    amount: 28, event: "Spring break" },
    { pay: true,  reciver: "Brad",    amount: 15, event: "Dinner at Jhon's" },
    { pay: false, reciver: "Julius",  amount: 20, event: "Ironhack launch" },
    { pay: true,  reciver: "Matias",  amount: 8,  event: "Beach Volley" },
    { pay: false, reciver: "Emilie",  amount: 32, event: "Italy trip" },
    { pay: true,  reciver: "Tair",    amount: 2,  event: "Breakfast" },
  ]

  constructor() { }

  ngOnInit() {
  }

}
