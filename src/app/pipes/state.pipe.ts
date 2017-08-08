import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

  transform(items: any, field: any): any {
    
    if (!field) { return items; }

    if (field === 'All') {
      return items;
    } else {
      return items.filter(item => item.state === field);
    }

  }

}
