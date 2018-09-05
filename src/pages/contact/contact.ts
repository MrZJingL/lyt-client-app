import {Component, ViewChild, ElementRef} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  @ViewChild(Content) content: Content;
  /*搜索的关键字*/
  searchInput: string = '';
  url:string = 'http://127.0.0.1:8099/'
  gaming : string = '公司名称';  
  /*请求通讯录的值*/
  contactsUrl = 'assets/contacts.json';
  /*字母的初始化*/
  aLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  letters = [];
  formatContacts: any = []; //按首字母顺序格式化后的数组
  searchingItems = []; //搜索显示的数组
  searchLetters = [];
  isSearching = false;
  callback:any;
  toast:any;
  remitBanks:any;
  public headers = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    
  });

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              // private transactService:TransactService,
              public toastCtrl: ToastController,
              public elementRef: ElementRef) {

    //获取通讯录数据
    // this.transactService.remitBanks().subscribe((res:any) => {
    //   this.remitBanks = res;
    //   this.aLetters.forEach((res, index) => {
    //     if(this.remitBanks[res] && this.remitBanks[res].lenght != 0) {
    //       this.formatContacts.push(this.remitBanks[res]);
    //       this.letters.push(res);
    //     }
    //   })
    // });

    
  

    this.getCompany();

  }
  ionViewDidLoad() {
  //  console.log('ionViewDidLoad ContactPage');
  }

  getCompany(): void {
    let options = new RequestOptions({
      headers: this.headers
    });

    let urlSearchParams = new URLSearchParams();
    let param = urlSearchParams.toString()
    this.http.post(this.url+'getCompanyByJson', param, options)
      .map(res => res.json())
      .subscribe(data => {
        this.remitBanks = data;
        console.log(this.remitBanks);
        this.aLetters.forEach((res, index) => {
              if(this.remitBanks[res] && this.remitBanks[res].lenght != 0) {
                this.formatContacts.push(this.remitBanks[res]);
                this.letters.push(res);
              }
        });
      console.log(data)
      }, err => {
        console.log(err)
      })
  }


 

  /**
   *取消结果触发的值
   */
  onCancelSearch(event) {
    this.isSearching = false;
    this.searchingItems = [];
  }
  /**
   *定位查找首字母对应的通讯录
   */
  scrollToTop(letter) {
    // this.show(letter,1000);
    if(this.elementRef.nativeElement.querySelector("ion-item-divider#" + letter)){
      let scrollTop = this.elementRef.nativeElement.querySelector("ion-item-divider#" + letter).offsetTop;
      this.content.scrollTo(0, scrollTop, 300);
    }
  }
  /**
   *通过关键字查询搜索的结果值
   */
  goSearchResult(ev: any) {
    this.isSearching = true;
    let val = ev.target.value;
    console.log(val)
    this.searchInput = val;
    if(val && val.trim() != '') {
      this.searchLetters =[];
      this.searchingItems =[];
      this.letters.forEach((res,index) => {
        let search = this.formatContacts[index].filter((item) => {
          return (item.company_name.indexOf(val) > -1);
        })
        if(search != null && search.length > 0) {
          this.searchLetters.push(res);
          this.searchingItems.push(search);
        }
      })
    } else {
      this.isSearching = false;
    }
  }

  goBack(data){
    console.log(data);
    this.navCtrl.push('CompanyPage',{'company':data});
  }

  ionViewWillEnter() {
    this.callback = this.navParams.get("callback")
  }

  onCancel() {
    this.navCtrl.pop();
  }

  onClear($event){
    this.searchInput = '';
  }

  // show = (message: string = '操作完成', duration: number = 2500) => {
  //   this.toast = this.toastCtrl.create({
  //     message: message,
  //     duration: duration,
  //     position: 'middle',
  //     cssClass:'hj-toast'
  //   });
  //   this.toast.present();
  // };
}