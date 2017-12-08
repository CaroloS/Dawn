import { Pipe, PipeTransform } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the YoutubePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'youtube',
})
export class YoutubePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */

constructor (private dom:DomSanitizer) {
	
}



  transform(value: string) {
  	console.log(this.dom.bypassSecurityTrustResourceUrl("http://www.youtube.com/embed/" + value));
  	return this.dom.bypassSecurityTrustResourceUrl("http://www.youtube.com/embed/" + value);
  }
}
