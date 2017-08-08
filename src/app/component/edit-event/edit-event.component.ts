import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../../services/events.service';
import { FormsModule }  from '@angular/forms'
import { FormGroup, FormArray,FormBuilder,Validators} from '@angular/forms';
import {groupeeEvent} from './event.interface';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  groupeeEvent: any;

  public myForm: FormGroup;

  states=[
    {name: "OPEN", view: "OPEN"},
    {name: "REQUEST PAYMENTS",view: "REQUEST PAYMENTS"},
    {name: "PAYOUTS",view: "SENDING PAYOUTS"},
    {name: "DONE",view: "DONE"}
   ];

  constructor(private eventAPI: EventsService, private router: Router, private route: ActivatedRoute,private _fb:FormBuilder) { }

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

    this.myForm = this._fb.group({
      name:[''],
      items: this._fb.array([
          this.initItem(),
      ])
  });
  }

  initItem() {
    return this._fb.group({
        description: [''],
        amount: ['']
    });
}

  addItem() {
    const control = <FormArray>this.myForm.controls['items'];
    control.push(this.initItem());
  }

  removeItem(i: number) {
    const control = <FormArray>this.myForm.controls['items'];
    control.removeAt(i);
  }

  getEventDetails(id) {
    this.eventAPI.get(id)
      .subscribe((theEvent)=>{
        this.groupeeEvent = theEvent;
        console.log('get Event Details',theEvent);
      });
  }

  save(model: groupeeEvent) {
    // call API to save
    // ...
    console.log(model);
}
}
 