webpackJsonp([12],{

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-sign/add-sign.module": [
		676,
		11
	],
	"../pages/addyp/addyp.module": [
		677,
		10
	],
	"../pages/company/company.module": [
		678,
		9
	],
	"../pages/contact/contact.module": [
		679,
		1
	],
	"../pages/cstj/cstj.module": [
		680,
		8
	],
	"../pages/entrust/entrust.module": [
		681,
		7
	],
	"../pages/jccs/jccs.module": [
		682,
		6
	],
	"../pages/jcinfo/jcinfo.module": [
		683,
		5
	],
	"../pages/jclb/jclb.module": [
		684,
		0
	],
	"../pages/login/login.module": [
		685,
		4
	],
	"../pages/select-sign/select-sign.module": [
		686,
		3
	],
	"../pages/yplist/yplist.module": [
		687,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 204;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\ionic4\lyt\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="md-main"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="发现" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="我" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"F:\ionic4\lyt\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"F:\ionic4\lyt\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class=\'title-text-c\'>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"F:\ionic4\lyt\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, app) {
        this.navCtrl = navCtrl;
        this.app = app;
    }
    HomePage.prototype.goLogin = function () {
        this.app.getRootNav().push('LoginPage');
    };
    HomePage.prototype.goContac = function () {
        this.navCtrl.push('ContactPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\ionic4\lyt\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n    <!-- <button ion-button menuToggle icon-only>\n      <ion-icon name=\'ios-menu-outline\'></ion-icon>\n    </button> -->\n    <ion-title class="title-text-c">首页</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides pager style="width: 100% ; height: 30%; ;" loop="true" autoplay="2000">\n\n    <ion-slide style="background-color: green">\n      <h2>Slide 1</h2>\n    </ion-slide>\n\n    <ion-slide style="background-color: blue">\n      <h2>Slide 2</h2>\n    </ion-slide>\n\n    <ion-slide style="background-color: red">\n      <h2>Slide 3</h2>\n    </ion-slide>\n\n  </ion-slides>\n\n  <ion-grid padding>\n    <ion-row padding>\n      <ion-col (click)="goContac()" col-6 style="background-color: red">This column wsssssssssssssssssssssssssssssssssssssssssssssssssssssill take 12 columns</ion-col>\n      <ion-col col-1></ion-col>\n      <ion-col col-5 style="background-color: red">This column will take 12 columns</ion-col>\n    </ion-row>\n    <ion-row padding>\n      <ion-col col-8 style="background-color: red">This column wssssssssssssssssssssssssssssssssill take 12 columns</ion-col>\n    </ion-row>\n    <ion-row padding>\n      <ion-col (click)="goLogin()"  col-6 style="background-color: red">This column wssssssssssssssssssssssssssssssssill take 12 columns</ion-col>\n      <ion-col col-1></ion-col>\n      <ion-col col-5 style="background-color: red">This column will take 12 columns</ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"F:\ionic4\lyt\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams, http, 
        // private transactService:TransactService,
        toastCtrl, elementRef) {
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
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.elementRef = elementRef;
        /*搜索的关键字*/
        this.searchInput = '';
        this.url = 'http://127.0.0.1:8099/';
        this.gaming = '公司名称';
        /*请求通讯录的值*/
        this.contactsUrl = 'assets/contacts.json';
        /*字母的初始化*/
        this.aLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.letters = [];
        this.formatContacts = []; //按首字母顺序格式化后的数组
        this.searchingItems = []; //搜索显示的数组
        this.searchLetters = [];
        this.isSearching = false;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        });
        this.getCompany();
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        //  console.log('ionViewDidLoad ContactPage');
    };
    ContactPage.prototype.getCompany = function () {
        var _this = this;
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: this.headers
        });
        var urlSearchParams = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        var param = urlSearchParams.toString();
        this.http.post(this.url + 'getCompanyByJson', param, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.remitBanks = data;
            console.log(_this.remitBanks);
            _this.aLetters.forEach(function (res, index) {
                if (_this.remitBanks[res] && _this.remitBanks[res].lenght != 0) {
                    _this.formatContacts.push(_this.remitBanks[res]);
                    _this.letters.push(res);
                }
            });
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    /**
     *取消结果触发的值
     */
    ContactPage.prototype.onCancelSearch = function (event) {
        this.isSearching = false;
        this.searchingItems = [];
    };
    /**
     *定位查找首字母对应的通讯录
     */
    ContactPage.prototype.scrollToTop = function (letter) {
        // this.show(letter,1000);
        if (this.elementRef.nativeElement.querySelector("ion-item-divider#" + letter)) {
            var scrollTop = this.elementRef.nativeElement.querySelector("ion-item-divider#" + letter).offsetTop;
            this.content.scrollTo(0, scrollTop, 300);
        }
    };
    /**
     *通过关键字查询搜索的结果值
     */
    ContactPage.prototype.goSearchResult = function (ev) {
        var _this = this;
        this.isSearching = true;
        var val = ev.target.value;
        console.log(val);
        this.searchInput = val;
        if (val && val.trim() != '') {
            this.searchLetters = [];
            this.searchingItems = [];
            this.letters.forEach(function (res, index) {
                var search = _this.formatContacts[index].filter(function (item) {
                    return (item.company_name.indexOf(val) > -1);
                });
                if (search != null && search.length > 0) {
                    _this.searchLetters.push(res);
                    _this.searchingItems.push(search);
                }
            });
        }
        else {
            this.isSearching = false;
        }
    };
    ContactPage.prototype.goBack = function (data) {
        console.log(data);
        this.navCtrl.push('CompanyPage', { 'company': data });
    };
    ContactPage.prototype.ionViewWillEnter = function () {
        this.callback = this.navParams.get("callback");
    };
    ContactPage.prototype.onCancel = function () {
        this.navCtrl.pop();
    };
    ContactPage.prototype.onClear = function ($event) {
        this.searchInput = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], ContactPage.prototype, "content", void 0);
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"F:\ionic4\lyt\src\pages\contact\contact.html"*/'<ion-header class="bank" no-border>\n  <!--<form (ngSubmit)="onStoreKeyword(\'product\')" class="search-form">-->\n  <!--<search-bar #searchbar name="search"-->\n  <!--[placeholder]=""-->\n  <!--[cancelButtonText]="\'GLOBAL.CANCEL\'|translate"-->\n  <!--[(ngModel)]="searchInput"-->\n  <!--(ionCancel)="onCancel()"-->\n  <!--(ionClear)="onClear($event)"-->\n  <!--(ionInput)="goSearchResult($event)">-->\n  <!--</search-bar>-->\n  <!--</form>-->\n  <ion-navbar>\n    <ion-title class="title-text-z">公路工程</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!--左边导航-->\n<ion-content class="bank-from">\n  <ion-grid>\n    <ion-row>\n      <!-- <ion-col col-5>\n        <ion-item>\n          <ion-label style="font: .4em sans-serif;">{{gaming}}</ion-label>\n          <ion-select [(ngModel)]="gaming">\n            <ion-option value="公司名称">公司名称</ion-option>\n            <ion-option value="检测项">检测项</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col> -->\n      <ion-col col-12> \n            <ion-searchbar\n            [(ngModel)]="myInput"\n            [showCancelButton]="shouldShowCancel"\n            (ionInput)="goSearchResult($event)"\n            (ionCancel)="goSearchResult($event)"\n            placeholder="请输入公司名称">\n          </ion-searchbar>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div style="background-color: rgb(216, 240, 245)">\n    <ion-grid padding>\n     推荐单位\n      <ion-row padding>\n        <ion-col col-5>sssssssssssssssssssssss</ion-col>\n        <ion-col col-2></ion-col>\n        <ion-col col-5>Thisssssssssssss</ion-col>\n      </ion-row>\n\n      <ion-row padding>\n        <ion-col col-5>sssssssssssssssssss</ion-col>\n        <ion-col col-2></ion-col>\n        <ion-col col-5>Thissssssssssssssssssss</ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n\n  <div class="letter" *ngIf="!isSearching">\n    <div class="letter-right" style="margin-top: 1.5em">\n      <span *ngFor="let letter of letters" (click)="scrollToTop(letter)">{{letter}}</span>\n    </div>\n  </div>\n\n  <!--搜索的结果 -->\n  <ion-list *ngIf="isSearching">\n    <ion-item-group *ngFor="let contacts of searchingItems;let i = index">\n      <ion-item-divider color="light" id="{{searchLetters[i]}}">{{searchLetters[i]}}</ion-item-divider>\n      <ion-item *ngFor="let contact of contacts" (click)="goBack(contact)">\n\n        <h2 [innerHTML]="contact.company_name | keyWord:searchInput"></h2>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n\n\n  <!--未搜索的结果 -->\n  <ion-list *ngIf="!isSearching">\n    <ion-item-group *ngFor="let contacts of formatContacts;let i = index">\n      <ion-item-divider color="light" id="{{letters[i]}}">{{letters[i]}}</ion-item-divider>\n      <ion-item *ngFor="let contact of contacts" (click)="goBack(contact)">\n        <h2 [innerHTML]="contact.company_name | keyWord:searchInput"></h2>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"F:\ionic4\lyt\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(350);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    backButtonIcon: 'md-back',
                }, {
                    links: [
                        { loadChildren: '../pages/add-sign/add-sign.module#AddSignPageModule', name: 'AddSignPage', segment: 'add-sign', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addyp/addyp.module#AddypPageModule', name: 'AddypPage', segment: 'addyp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/company/company.module#CompanyPageModule', name: 'CompanyPage', segment: 'company', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cstj/cstj.module#CstjPageModule', name: 'CstjPage', segment: 'cstj', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/entrust/entrust.module#EntrustPageModule', name: 'EntrustPage', segment: 'entrust', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jccs/jccs.module#JccsPageModule', name: 'JccsPage', segment: 'jccs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jcinfo/jcinfo.module#JcinfoPageModule', name: 'JcinfoPage', segment: 'jcinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jclb/jclb.module#JclbPageModule', name: 'JclbPage', segment: 'jclb', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-sign/select-sign.module#SelectSignPageModule', name: 'SelectSignPage', segment: 'select-sign', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/yplist/yplist.module#YplistPageModule', name: 'YplistPage', segment: 'yplist', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\ionic4\lyt\src\app\app.html"*/'\n<ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n       少时诵诗书所所\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"F:\ionic4\lyt\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[345]);
//# sourceMappingURL=main.js.map