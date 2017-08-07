import { Component, OnInit } from '@angular/core';
import {ActivityService} from '../../services/activity.service';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css'],
  providers: [ActivityService]
})
export class PaypalComponent implements OnInit {

  activities;

  constructor(private activity: ActivityService) { }

  ngOnInit() {
    this.activity.getActivity()
      .subscribe((activities)=>{
        this.activities = activities;
      })
  }

  

}
