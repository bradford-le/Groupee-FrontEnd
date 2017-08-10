import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Rx';
import { SessionService } from './session.service';

// Environment variables
import { environment } from '../../environments/environment';

@Injectable()
export class PaymentService {

  // BASE_URL: string = "http://localhost:3000";
  BASE_URL = environment.BASE_URL;

  constructor(private session: SessionService, private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  executePayment(eventID){
    return this.http.get(`${this.BASE_URL}/api/payment/${eventID}`, this.requestOptions())
      .map((res) => res.json())
      .catch(this.handleError);
  }


  private requestOptions(): RequestOptions {
    let headers = new Headers({ 'Authorization': `JWT ${this.session.token}` });
    return new RequestOptions({ headers: headers });
  }

}
