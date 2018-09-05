webpackJsonp([6],{

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JccsPageModule", function() { return JccsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jccs__ = __webpack_require__(695);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JccsPageModule = /** @class */ (function () {
    function JccsPageModule() {
    }
    JccsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__jccs__["a" /* JccsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__jccs__["a" /* JccsPage */]),
            ],
        })
    ], JccsPageModule);
    return JccsPageModule;
}());

//# sourceMappingURL=jccs.module.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JccsPage; });
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
 * Generated class for the JccsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JccsPage = /** @class */ (function () {
    function JccsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.list = [{ "key": "liang", "value": '全选', "chek": false }, { "key": "cha", "value": '全新推荐', "chek": false }];
        this.data = { "key": "you", "value": '优', "chek": true };
    }
    JccsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JccsPage');
    };
    JccsPage.prototype.updateCucumber = function () {
        console.log(this.mushrooms + "22222" + this.pepperoni);
    };
    JccsPage.prototype.chekFun = function (i) {
        var me = this;
        this.list.forEach(function (data, inde, array) {
            if (i == inde) {
                if (data.chek) {
                    data.chek = false;
                }
                else {
                    data.chek = true;
                }
                me.data = data;
            }
            else {
                data.chek = false;
            }
        });
    };
    JccsPage.prototype.gocstj = function () {
        this.navCtrl.push('CstjPage');
    };
    JccsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jccs',template:/*ion-inline-start:"F:\ionic4\lyt\src\pages\jccs\jccs.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="title-text-z">产品/项目/参数</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-color: #f8f8f8">\n\n  <ion-grid text-center>\n    <ion-row style="font-size: 1.2em;" style="padding-left: 15%">\n      <ion-col col-4 *ngFor="let item of list,let i =index" (click)="chekFun(i)">{{item.value}}&nbsp;\n        <ion-icon name="checkmark-circle" [ngClass]="{\'button-clear-ios-primary\': item.chek,\'button-clear-ios-my\':!item.chek}"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>Pepperoni</ion-label>\n      <ion-checkbox [(ngModel)]="pepperoni" (ionChange)="updateCucumber()"></ion-checkbox>\n      <ion-badge item-end color="danger">推荐</ion-badge>\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Pepperoni</ion-label>\n      <ion-checkbox [(ngModel)]="pepperoi" (ionChange)="updateCucumber()"></ion-checkbox>\n      <ion-badge item-end color="danger">推荐</ion-badge>\n    </ion-item>\n    <ion-item>\n\n      <ion-label>Pepperoni</ion-label>\n      <ion-checkbox [(ngModel)]="peperoni" (ionChange)="updateCucumber()"></ion-checkbox>\n      <ion-badge item-end color="danger">推荐</ion-badge>\n    </ion-item>\n\n\n\n    <ion-item>\n      <ion-label>Mushrooms</ion-label>\n      <ion-checkbox [(ngModel)]="mushroms" (ionChange)="updateCucumber()"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Mushrooms</ion-label>\n      <ion-checkbox [(ngModel)]="muhrooms" (ionChange)="updateCucumber()"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Mushrooms</ion-label>\n      <ion-checkbox [(ngModel)]="musooms" (ionChange)="updateCucumber()"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Mushrooms</ion-label>\n      <ion-checkbox [(ngModel)]="musoms" (ionChange)="updateCucumber()"></ion-checkbox>\n    </ion-item>\n\n\n  </ion-list>\n\n  <button ion-button color="secondary" style="width: 100%" (click)="gocstj()">确认信息，选择检测项</button>\n</ion-content>'/*ion-inline-end:"F:\ionic4\lyt\src\pages\jccs\jccs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], JccsPage);
    return JccsPage;
}());

//# sourceMappingURL=jccs.js.map

/***/ })

});
//# sourceMappingURL=6.js.map