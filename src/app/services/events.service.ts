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
export class EventsService {

// BASE_URL: string = "http://localhost:3000";
BASE_URL = environment.BASE_URL;

  constructor(
    private http: Http,
    private session: SessionService
  ) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  getEvents() {
    return this.http.get(`${this.BASE_URL}/api/event`, this.requestOptions())
      .map((res) => res.json())
      .catch(this.handleError);

  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/api/event/${id}`,this.requestOptions())
      .map((res) => res.json());
  }
  
  update(groupeeEvent) {
    return this.http.put(`${this.BASE_URL}/api/event/${groupeeEvent._id}`, groupeeEvent,this.requestOptions())
      .map((res) => res.json());
  }

  add(groupeeEvent){
    return this.http.post(`${this.BASE_URL}/api/event`,groupeeEvent,this.requestOptions()).map((res)=> res.json());
  }

  remove(id) {
    return this.http.delete(`${this.BASE_URL}/api/event/${id}`,this.requestOptions())
      .map((res) => res.json());
  }

  private requestOptions(): RequestOptions {
    let headers = new Headers({ 'Authorization': `JWT ${this.session.token}` });
    return new RequestOptions({ headers: headers });
  }

}