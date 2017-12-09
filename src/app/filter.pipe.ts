import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    console.log(items);
    if (!value) return items;
    let result=[];
    value=value.toLowerCase();
    for (let i=0; i<items.length; i++) {
      let text=items[i][field].toLowerCase();
      if (text.indexOf(value)>-1) {
        result.push(items[i]);
      }
    }
    return result;
  }
}
