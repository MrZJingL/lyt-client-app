webpackJsonp([9],{

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyPageModule", function() { return CompanyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company__ = __webpack_require__(692);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CompanyPageModule = /** @class */ (function () {
    function CompanyPageModule() {
    }
    CompanyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__company__["a" /* CompanyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__company__["a" /* CompanyPage */]),
            ],
        })
    ], CompanyPageModule);
    return CompanyPageModule;
}());

//# sourceMappingURL=company.module.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyPage; });
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
 * Generated class for the CompanyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompanyPage = /** @class */ (function () {
    function CompanyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CompanyPage.prototype.ionViewDidLoad = function () {
        var data = this.navParams.get('company');
        this.companyName = data.company_name;
    };
    CompanyPage.prototype.goEntrust = function () {
        this.navCtrl.push('EntrustPage');
    };
    CompanyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-company',template:/*ion-inline-start:"F:\ionic4\lyt\src\pages\company\company.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name=\'ios-menu-outline\'></ion-icon>\n    </button>\n    <ion-title>{{companyName}}公司</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides pager style="width: 100% ; height: 30%; ;" loop="true" autoplay="3000">\n\n    <ion-slide style="background-color: green">\n      <h2>Slide 1</h2>\n    </ion-slide>\n\n    <ion-slide style="background-color: blue">\n      <h2>Slide 2</h2>\n    </ion-slide>\n\n    <ion-slide style="background-color: red">\n      <h2>Slide 3</h2>\n    </ion-slide>\n\n  </ion-slides>\n\n\n  <ion-grid padding>\n    <ion-row padding>\n      <ion-col (click)="goEntrust()" col-6 style="background-color: red">This column wsssssssssssssssssssssssssssssssssssssssssssssssssssssill take 12 columns</ion-col>\n      <ion-col col-1></ion-col>\n      <ion-col col-5 style="background-color: red">This column will take 12 columns</ion-col>\n    </ion-row>\n    <ion-row padding>\n      <ion-col col-8 style="background-color: red">This column wssssssssssssssssssssssssssssssssill take 12 columns</ion-col>\n    </ion-row>\n    <ion-row padding>\n      <ion-col col-6 style="background-color: red">This column wssssssssssssssssssssssssssssssssill take 12 columns</ion-col>\n      <ion-col col-1></ion-col>\n      <ion-col col-5 style="background-color: red">This column will take 12 columns</ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"F:\ionic4\lyt\src\pages\company\company.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CompanyPage);
    return CompanyPage;
}());

//# sourceMappingURL=company.js.map

/***/ })

});
//# sourceMappingURL=9.js.map