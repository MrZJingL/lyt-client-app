import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JccsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jccs',
  templateUrl: 'jccs.html',
})
export class JccsPage {

  mushrooms: boolean;

  pepperoni:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JccsPage');
  }

  updateCucumber() {
    console.log(this.mushrooms +"22222"+this.pepperoni );
  }

  list=[{"key":"liang","value":'全选',"chek":false},{"key":"cha","value":'全新推荐',"chek":false}];
  data={"key":"you","value":'优',"chek":true};

     chekFun(i):void{
    
      let me=this;
      this.list.forEach(function(data,inde,array) {
        if(i==inde){
          if(data.chek){
            data.chek=false
          }else{
            data.chek=true;
          }
       
          me.data=data;
        }else{
          data.chek=false
        }
      });
    }
 
    gocstj():void{
      this.navCtrl.push('CstjPage');
    }
}
