import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../../services/events.service';
import { FormsModule }  from '@angular/forms'

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  groupeeEvent: any;


  states=[
    {name: "OPEN", view: "OPEN"},
    {name: "REQUEST PAYMENTS",view: "REQUEST PAYMENTS"},
    {name: "PAYOUTS",view: "SENDING PAYOUTS"},
    {name: "DONE",view: "DONE"}
   ];

  constructor(private eventAPI: EventsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.groupeeEvent = {
      host:'',
      name:'',
      state:'',
      payments:[]
    }
    this.route.params.subscribe(params => {
      this.getEventDetails(params['id']);
    });
  }

  getEventDetails(id) {
    this.eventAPI.get(id)
      .subscribe((theEvent)=>{
        this.groupeeEvent = theEvent;
        console.log('get Event Details',theEvent);
      });
  }
}
 