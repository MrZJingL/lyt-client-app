webpackJsonp([7],{

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrustPageModule", function() { return EntrustPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entrust__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(147);
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
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__entrust__["a" /* EntrustPage */]),
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

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntrustPage; });
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
 * Generated class for the EntrustPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EntrustPage = /** @class */ (function () {
    function EntrustPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.url = 'http://127.0.0.1:8099/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        });
        this.getTime();
    }
    EntrustPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EntrustPage');
    };
    EntrustPage.prototype.goJclb = function () {
        this.navCtrl.push('JclbPage');
    };
    EntrustPage.prototype.getTime = function () {
        var _this = this;
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: this.headers
        });
        var urlSearchParams = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        var param = urlSearchParams.toString();
        this.http.post(this.url + 'getTime', param, options)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.maxTime = data.time;
            console.log(_this.maxTime);
        }, function (err) {
            console.log(err);
        });
    };
    EntrustPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-entrust',template:/*ion-inline-start:"F:\ionic4\lyt\src\pages\entrust\entrust.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title class="title-text-z">委托检测</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-color: #f8f8f8">\n    <ion-list>\n        <ion-item class="list-font">\n            <ion-label color="primary">工程名称：</ion-label>\n            <ion-input placeholder="请输入工程名称"></ion-input>\n        </ion-item>\n        <ion-item class="list-font">\n            <ion-label color="primary">委托单位：</ion-label>\n            <ion-input placeholder="请输入委托单位"></ion-input>\n        </ion-item>\n        <ion-item class="list-font">\n            <ion-label color="primary">送 样 人：</ion-label>\n            <ion-input placeholder="请输入送样人"></ion-input>\n        </ion-item>\n        <ion-item class="list-font">\n            <ion-label color="primary">联系电话：</ion-label>\n            <ion-input type="number" placeholder="请输入联系电话"></ion-input>\n        </ion-item>\n        <ion-item class="list-font">\n            <ion-label  color="primary">公里等级</ion-label>\n            <ion-select [(ngModel)]="gaming" cancelText=\'取消\' okText=\'确认\'>\n                <ion-option value="nes">NES</ion-option>\n                <ion-option value="n64">Nintendo64</ion-option>\n                <ion-option value="ps">PlayStation</ion-option>\n                <ion-option value="genesis">Sega Genesis</ion-option>\n                <ion-option value="saturn">Sega Saturn</ion-option>\n                <ion-option value="snes">SNES</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label color="primary">取样日期：</ion-label>\n            <ion-datetime placeholder="请选择取样日期" displayFormat="YYYY/MM/DD" [(ngModel)]="myDate" max=\'{{maxTime}}\' cancelText=\'取消\' doneText=\'确认\'></ion-datetime>\n        </ion-item>\n        <ion-item class="list-font">\n            <ion-label color="primary">试样用途：</ion-label>\n            <ion-input placeholder="请输入试样用途"></ion-input>\n        </ion-item>\n    </ion-list>\n    <button ion-button color="secondary" style="width: 100%" (click)="goJclb()">确认信息，选择检测项</button>\n</ion-content>'/*ion-inline-end:"F:\ionic4\lyt\src\pages\entrust\entrust.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], EntrustPage);
    return EntrustPage;
}());

//# sourceMappingURL=entrust.js.map

/***/ })

});
//# sourceMappingURL=7.js.map