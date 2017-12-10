import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    // If there is no search term, return the entire array back
    if (!value) return items;

    // Initiate an empty array to return at the end
    let result = [];
    // convert the value to lowercase, so the search is not case-sensitive
    value = value.toLowerCase();

    // because its a two level object to filter, we first iterate through the first level
    for (let index = 0; index < items.length; index++) {
      // initiate an empty array for the links to come back in
      let links = [];

      // Now we can process each link
      for (let i = 0; i < items[index][field[0]].length; i++) {
        // convert the text of the link to lowercase so it is not case sensitive

        // from items is the section, index is the section number in the for loop for the first level, field 0 is the first field send in the pipe array, i is the index number for the second level for loop, field 1 is the second field passed in the pipe array
        // translates to items[0]['links'][0]['keywords'] for eg
        let text = items[index][field[0]][i][field[1]].toLowerCase();

        // starting at the beginning of the string, search for the value, if the match is at the start (position 0) or greater, itll return true. If the string is not found, the index returned is -1
        if (text.indexOf(value) > -1) {
          // add the matched link object to the links array we have created for this section
          links.push(items[index][field[0]][i]);
        }
      }

      // add the completed section to the results array at the same index
      result[index] = {
        // the spread operator (...) is used to expand the object into this new object, overriding the value for key field[0] with the links array
        ...items[index],
        [field[0]]: links
      }

    }

    // return the new results array
    return result;
  }
}
