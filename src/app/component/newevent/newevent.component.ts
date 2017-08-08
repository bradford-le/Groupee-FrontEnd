import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DataSource} from '@angular/cdk';
import { EventsService } from '../../services/events.service';
import {MdDialog, MdDialogRef} from '@angular/material';

// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/observable/of';

@Component({
  selector: 'app-newevent',
  templateUrl: './newevent.component.html',
  styleUrls: ['./newevent.component.css']
})
export class NeweventComponent implements OnInit {

  // eventname :String;
  // description: String;
  
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

  // dataSource: EventsDataSource | null;
  // displayedColumns = ['name', 'description', 'amount'];
  
  constructor(){}
  // constructor(private eventsService: EventsService) { }

  ngOnInit() {
    // this.dataSource = new EventsDataSource(this.eventsService);
  }

  addEvent(form){
    //something
  }

  addRow() {
    // this.eventsService.addEventItem("Test", "Test", 0.99);
    this.rowData.push({
      name: 'another',
      description: 'beers',
      amount: 20
    })
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
