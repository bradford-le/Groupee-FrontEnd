import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ActivityService {

  BASE_URL: string = "http://localhost:3000";

  constructor(private http: Http) { }

  getActivity() {
    return this.http.get(`${this.BASE_URL}/api/event`)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/api/event/${id}`)
      .map((res) => res.json());
  }

  add(event) {
    return this.http.post(`${this.BASE_URL}/api/event`, event).map((res) => res.json());
  }

  edit(event) {
    return this.http.put(`${this.BASE_URL}/api/event/${event.id}`, event)
      .map((res) => res.json());
  }

  remove(id) {
    return this.http.delete(`${this.BASE_URL}/api/event/${id}`)
      .map((res) => res.json());
  }

}
