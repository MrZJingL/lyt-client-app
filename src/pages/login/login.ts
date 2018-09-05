import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
   selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: any = {
    name: '',
    pwd: '',
    type:'2'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public myHttp: HttpProvider) {

  }


  ionViewDidLoad() {
    
  }
 
  sub():void{   
    let date =   this.myHttp.hPost(this.myHttp.getUrl()+"login", JSON.stringify(this.user));
  }
}
