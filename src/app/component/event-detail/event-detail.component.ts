import {  Component, OnInit } from '@angular/core';
import {  ActivatedRoute,Router } from '@angular/router';
import {  EventsService } from '../../services/events.service';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: any;
  
  constructor(private EventAPI: EventsService, private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {

    this.event = {
      host:'',
      name:'',
      members: [],
      state:'',
      payments:[]
    };

    this.route.params.subscribe(params => {
      this.getEventDetails(params['id']);
    });
  }

  getEventDetails(id){
    this.EventAPI.get(id)
      .subscribe((event)=>{
        this.event = event;
        console.log('getEventDetails',event);
      });
  }

}
