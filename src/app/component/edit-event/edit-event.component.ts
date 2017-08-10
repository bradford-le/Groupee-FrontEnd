import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../../services/events.service';
import { FormsModule }  from '@angular/forms'
import { FormGroup, FormArray,FormBuilder,Validators} from '@angular/forms';
import { groupeeEvent, Item,Member } from './event.interface';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  groupeeEvent: any;
  total: Number;
  median: Number;

  public myForm: FormGroup;

  selectedState: string;

  states = [
    "OPEN",
    "REQUEST PAYMENTS",
    "PAYOUTS"
  ];

  constructor(private eventAPI: EventsService, private router: Router, private route: ActivatedRoute,private _fb:FormBuilder) { }

  ngOnInit() {
    this.groupeeEvent = {
      host:'',
      name:'',
      state:'',
      members:[],
      payments:[],
      items:[]
    }
    this.route.params.subscribe(params => {
      this.getEventDetails(params['id']);
    });

    this.myForm = this._fb.group({
      name:[''],
      state:[''],
      members: this._fb.array([
        this.initMember(),
      ]),
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

  initMember() {
    return this._fb.group({
      username: ['']
    });
  }

  addItem() {
    const control = <FormArray>this.myForm.controls['items'];
    control.push(this.initItem());
  }

  addMember() {
    const control = <FormArray>this.myForm.controls['members'];
    control.push(this.initMember());
  }

  removeItem(i: number) {
    const control = <FormArray>this.myForm.controls['items'];
    control.removeAt(i);
  }

  removeMember(i:number) {
    const control = <FormArray>this.myForm.controls['members'];
    control.removeAt(i);  
  }

  getEventDetails(id) {
    this.eventAPI.get(id)
      .subscribe((theEvent)=>{
        this.groupeeEvent = theEvent;
        console.log('get Event Details',theEvent);
        this.total = this.totalItems();
        console.log("Median",Number(this.median));
        console.log("MEMBERS",this.groupeeEvent.members.length);
        console.log("TOTAL:",this.groupeeEvent.total);
      });
  }

  save(item,member) {
    item = this.myForm.value.items;
    member = this.myForm.value.members;

    this.eventAPI.update(this.groupeeEvent)
      .subscribe((newEvent)=>{
        this.groupeeEvent = newEvent;
      });

    console.log("FORM VALUES:", this.myForm);
  
      this.myForm.value.items.forEach((item) => {
        if(item.amount !=="" && item.desription !==""){
        console.log("inside item",item);
        this.eventAPI.createItem(this.groupeeEvent._id, item.amount, item.description)
          .subscribe((newEvent)=>{
            console.log("THE NEW EVENT",newEvent);
        });
      }
        this.router.navigate(['/dashboard']);
      });

      if(this.groupeeEvent.state === "REQUEST PAYMENTS"){
        console.log("CAUGHT REQUEST PAYMENT! NEED TO CALL ALGORITHM");
      }
  }
  
  totalItems(): number {
    return this.groupeeEvent.items.reduce(function(sum, el) { return sum + el.amount }, 0);
  }

}