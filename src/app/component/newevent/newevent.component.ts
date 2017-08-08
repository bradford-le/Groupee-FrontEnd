import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DataSource} from '@angular/cdk';
import { EventsService } from '../../services/events.service';
import {MdDialog, MdDialogRef} from '@angular/material';
import {FormBuilder,FormArray, FormControl, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';

// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/observable/of';

@Component({
  selector: 'app-newevent',
  templateUrl: './newevent.component.html',
  styleUrls: ['./newevent.component.css']
})
export class NeweventComponent implements OnInit {
  
  groupeeEvent = {
    host: '',
    email: '',
    items: [],
    state: ''
  };
  item = '';

  public myForm: FormGroup;

  options = [
    {value: 'open-0',   viewValue: 'Open'},
    {value: 'wip-1',    viewValue: 'In progress'},
    {value: 'closed-2', viewValue: 'Closed'}
  ];

  rowData = [
    {
      name: "another",
      description: "beers",
      amount: 20
    }    
  ];
  
  constructor(private _fb: FormBuilder, private eventsAPI: EventsService,private router:Router){}
  
  ngOnInit() {
    this.myForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      items: this._fb.array([
          this.initItem(),
      ])  
    });
  }

  initItem() {
    return this._fb.group({
      description: ['', Validators.required],
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

  save() {
    this.eventsAPI.add(this.groupeeEvent)
    .subscribe((res)=>{
      console.log(res)
      this.router.navigate(['/events'])		
    })
   console.log(this.groupeeEvent);
  }
}

// export class EventsDataSource extends DataSource<any> {
//   constructor(private eventsService: EventsService) {
//     super();
//   }
//   connect(): Observable<any[]> {
//     return Observable.of(this.eventsService.getEventItems());
//   }

//   disconnect() {}
// }
