import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Rx';
import { SessionService } from '../../services/session.service';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  groupeeEvents;

  constructor(private event: EventsService) { }

  ngOnInit() {
    this.event.getEvents()
      .subscribe((groupeeEvents) => {
        this.groupeeEvents = groupeeEvents;
      })
  }

}
