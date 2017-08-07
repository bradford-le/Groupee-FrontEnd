import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'member'
})
export class MemberPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any {
    if (!items) { return []; }
    if (!value) { return items; }

    const myPattern = new RegExp(value, 'i');

    return items.filter(item => item[field].match(myPattern) );
  }

}
