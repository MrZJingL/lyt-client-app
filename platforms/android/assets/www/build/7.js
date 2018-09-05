webpackJsonp([7],{

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrustPageModule", function() { return EntrustPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entrust__ = __webpack_require__(693);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EntrustPageModule = /** @class */ (function () {
    function EntrustPageModule() {
    }
    EntrustPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__entrust__["a" /* EntrustPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__entrust__["a" /* EntrustPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__entrust__["a" /* EntrustPage */],
            ]
        })
    ], EntrustPageModule);
    return EntrustPageModule;
}());

//# sourceMappingURL=entrust.module.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntrustPage; });
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
 * Generated class for the EntrustPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EntrustPage = /** @class */ (function () {
    function EntrustPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EntrustPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EntrustPage');
    };
    EntrustPage.prototype.goJclb = function () {
        this.navCtrl.push('JclbPage');
    };
    EntrustPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-entrust',template:/*ion-inline-start:"F:\ionic4\lyt\src\pages\entrust\entrust.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title class="title-text-z">委托检测</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-color: #f8f8f8">\n\n    <ion-list>\n        <ion-item>工程名称</ion-item>\n        <ion-item>委托单位</ion-item>\n        <ion-item>送样人</ion-item>\n        <ion-item>联系电话</ion-item>\n        <ion-item>取样地点</ion-item>\n        <ion-item>取样日期</ion-item>\n        <ion-item>式样用途</ion-item>\n    </ion-list>\n\n    <button ion-button color="secondary" style="width: 100%" (click)="goJclb()">确认信息，选择检测项</button>\n</ion-content>'/*ion-inline-end:"F:\ionic4\lyt\src\pages\entrust\entrust.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EntrustPage);
    return EntrustPage;
}());

//# sourceMappingURL=entrust.js.map

/***/ })

});
//# sourceMappingURL=7.js.map