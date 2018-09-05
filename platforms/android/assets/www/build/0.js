webpackJsonp([0],{

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JclbPageModule", function() { return JclbPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jclb__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(687);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var JclbPageModule = /** @class */ (function () {
    function JclbPageModule() {
    }
    JclbPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__jclb__["a" /* JclbPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__jclb__["a" /* JclbPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__jclb__["a" /* JclbPage */]
            ]
        })
    ], JclbPageModule);
    return JclbPageModule;
}());

//# sourceMappingURL=jclb.module.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keyword_keyword__ = __webpack_require__(688);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__keyword_keyword__["a" /* KeywordPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__keyword_keyword__["a" /* KeywordPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeywordPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(37);
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
 * Generated class for the KeywordPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var KeywordPipe = /** @class */ (function () {
    function KeywordPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * Takes a value and makes it lowercase.
     */
    KeywordPipe.prototype.transform = function (val, keyword) {
        var Reg = new RegExp(keyword, 'i');
        if (val) {
            var res = val.replace(Reg, "<span style=\"color:#338ec3;\">" + (keyword ? keyword : '') + "</span>");
            return this.sanitizer.bypassSecurityTrustHtml(res);
        }
    };
    KeywordPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'keyWord',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], KeywordPipe);
    return KeywordPipe;
}());

//# sourceMappingURL=keyword.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JclbPage; });
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


/**
 * Generated class for the JclbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JclbPage = /** @class */ (function () {
    function JclbPage(navCtrl, navParams, 
        // private transactService:TransactService,
        toastCtrl, elementRef) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.elementRef = elementRef;
        /*搜索的关键字*/
        this.searchInput = '';
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
        this.fetch(function (data) {
            _this.remitBanks = data;
            _this.aLetters.forEach(function (res, index) {
                if (_this.remitBanks[res] && _this.remitBanks[res].lenght != 0) {
                    _this.formatContacts.push(_this.remitBanks[res]);
                    _this.letters.push(res);
                }
            });
        });
    }
    JclbPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JclbPage');
    };
    JclbPage.prototype.fetch = function (data) {
        var req = new XMLHttpRequest();
        req.open('GET', this.contactsUrl);
        req.onload = function () {
            data(JSON.parse(req.response));
        };
        req.send();
    };
    /**
     *取消结果触发的值
     */
    JclbPage.prototype.onCancelSearch = function (event) {
        this.isSearching = false;
        this.searchingItems = [];
    };
    /**
     *定位查找首字母对应的通讯录
     */
    JclbPage.prototype.scrollToTop = function (letter) {
        // this.show(letter,1000);
        if (this.elementRef.nativeElement.querySelector("ion-item-divider#" + letter)) {
            var scrollTop = this.elementRef.nativeElement.querySelector("ion-item-divider#" + letter).offsetTop;
            this.content.scrollTo(0, scrollTop, 300);
        }
    };
    /**
     *通过关键字查询搜索的结果值
     */
    JclbPage.prototype.goSearchResult = function (ev) {
        var _this = this;
        this.isSearching = true;
        var val = ev.target.value;
        this.searchInput = val;
        if (val && val.trim() != '') {
            this.searchLetters = [];
            this.searchingItems = [];
            this.letters.forEach(function (res, index) {
                var search = _this.formatContacts[index].filter(function (item) {
                    return (item.userName.indexOf(val) > -1);
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
    JclbPage.prototype.goBack = function (data) {
        console.log(data);
        this.navCtrl.push('JccsPage');
    };
    JclbPage.prototype.ionViewWillEnter = function () {
        this.callback = this.navParams.get("callback");
    };
    JclbPage.prototype.onCancel = function () {
        this.navCtrl.pop();
    };
    JclbPage.prototype.onClear = function ($event) {
        this.searchInput = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], JclbPage.prototype, "content", void 0);
    JclbPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jclb',template:/*ion-inline-start:"F:\ionic4\lyt\src\pages\jclb\jclb.html"*/'<ion-header class="bank" no-border>\n  <!--<form (ngSubmit)="onStoreKeyword(\'product\')" class="search-form">-->\n    <!--<search-bar #searchbar name="search"-->\n                <!--[placeholder]=""-->\n                <!--[cancelButtonText]="\'GLOBAL.CANCEL\'|translate"-->\n                <!--[(ngModel)]="searchInput"-->\n                <!--(ionCancel)="onCancel()"-->\n                <!--(ionClear)="onClear($event)"-->\n                <!--(ionInput)="goSearchResult($event)">-->\n    <!--</search-bar>-->\n  <!--</form>-->\n  <ion-navbar>\n    <ion-title class="title-text-z" >检测类别</ion-title>\n  </ion-navbar>\n</ion-header>\n\n  <!--左边导航-->\n<ion-content class="bank-from">\n\n  \n    <ion-grid>\n        <ion-row>\n          <ion-col col-12> \n              <ion-item>\n                  <ion-input type="text" placeholder="请输入检测类别或首字母" style="font: .4em sans-serif;" ></ion-input>\n              </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>      \n\n\n  <div class="letter" *ngIf="!isSearching">\n    <div class="letter-right" style="margin-top: 1.5em"  >\n      <span *ngFor="let letter of letters" (click)="scrollToTop(letter)">{{letter}}</span>\n    </div>\n  </div>\n\n  <!--搜索的结果 -->\n  <ion-list *ngIf="isSearching">\n    <ion-item-group *ngFor="let contacts of searchingItems;let i = index">\n      <ion-item-divider color="light" id="{{searchLetters[i]}}">{{searchLetters[i]}}</ion-item-divider>\n      <ion-item *ngFor="let contact of contacts" (click)="goBack(contact)">\n    \n        <h2 [innerHTML]="contact.userName | keyWord:searchInput"></h2>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n\n\n  <!--未搜索的结果 -->\n  <ion-list *ngIf="!isSearching">\n    <ion-item-group *ngFor="let contacts of formatContacts;let i = index">\n      <ion-item-divider color="light" id="{{letters[i]}}">{{letters[i]}}</ion-item-divider>\n      <ion-item *ngFor="let contact of contacts" (click)="goBack(contact)">\n        <h2 [innerHTML]="contact.userName | keyWord:searchInput"></h2>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"F:\ionic4\lyt\src\pages\jclb\jclb.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], JclbPage);
    return JclbPage;
}());

//# sourceMappingURL=jclb.js.map

/***/ })

});
//# sourceMappingURL=0.js.map