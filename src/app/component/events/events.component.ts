import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events;
  pattern: '';
  toggleContent = false;
  states = [
    'All',
    'open',
    'wip',
    'done',
  ];
  selectedState: 'All';

  constructor(private eventAPI: EventsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.eventAPI.getEvents()
      .subscribe((events) => {
        this.events = events;
      })
      
  }

  deleteActivity(id) {

    if (window.confirm('Are you sure?')) {
      this.eventAPI.remove(id)
        .subscribe(() => {
          this.router.navigate(['']);
        });
    }
  }

}
