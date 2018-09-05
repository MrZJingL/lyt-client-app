import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';
/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {
 private url:string='http://127.0.0.1:8099/' ;
  constructor(public http: Http) {
    
  }
 
  getUrl():string{
    return this.url;
  }

  hPost(url: string, parameter: string): any {
    let header = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'token': localStorage.getItem('token')
    });
    let options = new RequestOptions({
      headers: header,
    });

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('json', parameter);
    let param = urlSearchParams.toString()
    this.http.post(url, param, options)
      .map(res => res.json())
      .subscribe(data => {
        return data;
      }, err => {
        return err;
      })
  }

}


