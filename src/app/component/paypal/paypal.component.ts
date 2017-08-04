import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {

  states = [
    "open","wip","done"
  ];

  constructor() { }

  ngOnInit() {
  }

  submitForm(myForm) {
    
    console.log(myForm);
  }
}
