import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class EventsService {

  items = [
    {name: "Coffee", description: "Time for a coffee", amount: 15},
    {name: "Coffee", description: "Time for a coffee", amount: 15},
    {name: "Coffee", description: "Time for a coffee", amount: 15},
    {name: "Coffee", description: "Time for a coffee", amount: 15}
  ];

  eventItemsChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  get getChangedEventItems(): any[] { return this.eventItemsChange.value; }

  constructor() { }

  getEventItems(): any[] {
    return this.items;
  }

  addEventItem(name: string, description: string, amount: number) {
    const copiedData = this.getChangedEventItems.slice();
    copiedData.push({name, description, amount});
    this.eventItemsChange.next(copiedData);
  }
}