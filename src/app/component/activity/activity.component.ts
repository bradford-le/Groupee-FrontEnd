import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-event',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
  providers: [ActivityService]
})
export class ActivityComponent implements OnInit {

  activities;

  constructor(private event: ActivityService) { }

  ngOnInit() {
    this.event.getActivity()
      .subscribe((activities)=>{
        this.activities = activities;
      })
  }

}
