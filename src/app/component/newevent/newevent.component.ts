import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DataSource} from '@angular/cdk';
import { EventsService } from '../../services/events.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-newevent',
  templateUrl: './newevent.component.html',
  styleUrls: ['./newevent.component.css']
})
export class NeweventComponent implements OnInit {

  groupeeEvent = {
    name: '',
  };

  constructor(private eventAPI: EventsService,private router: Router){}
 
  ngOnInit() {
   
  }

  addEvent(){
    this.eventAPI.add(this.groupeeEvent)
    .subscribe((res)=>{
      console.log(res)
      this.router.navigate(['/dashboard'])		
    })
    console.log(this.groupeeEvent)
  }

}
