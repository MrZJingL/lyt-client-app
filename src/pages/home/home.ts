import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(public navCtrl: NavController,
    private app: App) {

  }

  goLogin(): void {
    this.app.getRootNav().push('LoginPage');
  }


  goContac(): void {
    this.navCtrl.push('ContactPage');
  }


}
