webpackJsonp([8],{

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CstjPageModule", function() { return CstjPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cstj__ = __webpack_require__(693);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CstjPageModule = /** @class */ (function () {
    function CstjPageModule() {
    }
    CstjPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cstj__["a" /* CstjPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cstj__["a" /* CstjPage */]),
            ],
        })
    ], CstjPageModule);
    return CstjPageModule;
}());

//# sourceMappingURL=cstj.module.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CstjPage; });
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
 * Generated class for the CstjPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CstjPage = /** @class */ (function () {
    function CstjPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CstjPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CstjPage');
    };
    CstjPage.prototype.goyplist = function () {
        this.navCtrl.push('YplistPage');
    };
    CstjPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cstj',template:/*ion-inline-start:"F:\ionic4\lyt\src\pages\cstj\cstj.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="title-text-z">参数调节</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-color: #f8f8f8">\n  <ion-list>\n    <ion-item>\n      <ion-label>公路等级</ion-label>\n      <ion-select [(ngModel)]="gaming">\n        <ion-option value="nes">NES</ion-option>\n        <ion-option value="n64">Nintendo64</ion-option>\n        <ion-option value="ps">PlayStation</ion-option>\n        <ion-option value="genesis">Sega Genesis</ion-option>\n        <ion-option value="saturn">Sega Saturn</ion-option>\n        <ion-option value="snes">SNES</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-item>\n      <ion-label>有机质</ion-label>\n      <ion-select [(ngModel)]="gamin">\n        <ion-option value="nes">NES</ion-option>\n        <ion-option value="n64">Nintendo64</ion-option>\n        <ion-option value="ps">PlayStation</ion-option>\n        <ion-option value="genesis">Sega Genesis</ion-option>\n        <ion-option value="saturn">Sega Saturn</ion-option>\n        <ion-option value="snes">SNES</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-item>\n      <ion-label>含泥量</ion-label>\n      <ion-select [(ngModel)]="gamg">\n        <ion-option value="nes">NES</ion-option>\n        <ion-option value="n64">Nintendo64</ion-option>\n        <ion-option value="ps">PlayStation</ion-option>\n        <ion-option value="genesis">Sega Genesis</ion-option>\n        <ion-option value="saturn">Sega Saturn</ion-option>\n        <ion-option value="snes">SNES</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-item>\n      <ion-label>筛分</ion-label>\n      <ion-select [(ngModel)]="gamng">\n        <ion-option value="nes">NES</ion-option>\n        <ion-option value="n64">Nintendo64</ion-option>\n        <ion-option value="ps">PlayStation</ion-option>\n        <ion-option value="genesis">Sega Genesis</ion-option>\n        <ion-option value="saturn">Sega Saturn</ion-option>\n        <ion-option value="snes">SNES</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-item>\n      <ion-label>硫酸盐含量</ion-label>\n      <ion-select [(ngModel)]="gming">\n        <ion-option value="nes">NES</ion-option>\n        <ion-option value="n64">Nintendo64</ion-option>\n        <ion-option value="ps">PlayStation</ion-option>\n        <ion-option value="genesis">Sega Genesis</ion-option>\n        <ion-option value="saturn">Sega Saturn</ion-option>\n        <ion-option value="snes">SNES</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-item>\n      <ion-label>塑性指数</ion-label>\n      <ion-select [(ngModel)]="ging">\n        <ion-option value="nes">NES</ion-option>\n        <ion-option value="n64">Nintendo64</ion-option>\n        <ion-option value="ps">PlayStation</ion-option>\n        <ion-option value="genesis">Sega Genesis</ion-option>\n        <ion-option value="saturn">Sega Saturn</ion-option>\n        <ion-option value="snes">SNES</ion-option>\n      </ion-select>\n    </ion-item>\n\n\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>压碎值</ion-label>\n      <ion-input type="text" placeholder="123456789"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button color="secondary" style="width: 100%" (click)="goyplist()">确认信息，选择检测项</button>\n</ion-content>'/*ion-inline-end:"F:\ionic4\lyt\src\pages\cstj\cstj.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CstjPage);
    return CstjPage;
}());

//# sourceMappingURL=cstj.js.map

/***/ })

});
//# sourceMappingURL=8.js.map