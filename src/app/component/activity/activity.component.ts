import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
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
