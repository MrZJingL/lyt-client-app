import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

/**
 * Generated class for the EntrustPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entrust',
  templateUrl: 'entrust.html',
})
export class EntrustPage {

  url:string = 'http://127.0.0.1:8099/';

  maxTime : any ;

  public headers = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'  
  });

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: Http,) {
               this.getTime();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntrustPage');
  }

  goJclb():void{
    this.navCtrl.push('JclbPage');
  }


  getTime(): void {
    let options = new RequestOptions({
      headers: this.headers
    });

    let urlSearchParams = new URLSearchParams();
    let param = urlSearchParams.toString()
    this.http.post(this.url+'getTime', param, options)
      .map(res => res.json())
      .subscribe(data => {
       this.maxTime = data.time;
      console.log(this.maxTime);
      }, err => {
        console.log(err)
      })
  }


}
