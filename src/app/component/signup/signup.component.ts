import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../services/session.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  newUser = {
    username: '',
    password: ''
  };

  constructor(private session: SessionService, ) { }

  ngOnInit() {
  }

  // signup() {
  // 	this.session.signup(this.newUser)
  //     .subscribe(result => {
  //         if (result === true) {
  //             // login successful
  //             console.log('result ok', result);              
  //         } else {
  //         		console.log('result ko', result);
  //             // login failed
  //             // this.error = 'Username or password is incorrect';
  //         }
  //     });
  // }

}
