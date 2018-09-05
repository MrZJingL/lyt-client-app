import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

/**
 * Generated class for the KeywordPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */

 
@Pipe({
  name: 'keyWord',
})
export class KeywordPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }
  /**
   * Takes a value and makes it lowercase.
   */
  transform(val: string, keyword: string): any {
    let Reg = new RegExp(keyword, 'i');
    if(val) {
      let res = val.replace(Reg, `<span style="color:#338ec3;">${keyword?keyword:''}</span>`);
      return this.sanitizer.bypassSecurityTrustHtml(res);
    }
  }
}