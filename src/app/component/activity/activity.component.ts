import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
  providers: [ActivityService]
})
export class ActivityComponent implements OnInit {

  activities;

  constructor(private activity: ActivityService) { }

  ngOnInit() {
    this.activity.getActivity()
      .subscribe((activities)=>{
        this.activities = activities;
      })
  }

}
