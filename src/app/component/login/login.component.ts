import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../services/session.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Object = {
		username: '',
		password: '',
  }
  
  error = null;

  constructor(private session: SessionService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.session.login(this.user).subscribe(
      (data) => {
        console.log("we are in login");
        this.router.navigate(['/dashboard']);  
      },
      (err) => {
        this.error = err;
      });
  }

  

}
