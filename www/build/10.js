webpackJsonp([10],{

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddypPageModule", function() { return AddypPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addyp__ = __webpack_require__(691);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddypPageModule = /** @class */ (function () {
    function AddypPageModule() {
    }
    AddypPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addyp__["a" /* AddypPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addyp__["a" /* AddypPage */]),
            ],
        })
    ], AddypPageModule);
    return AddypPageModule;
}());

//# sourceMappingURL=addyp.module.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddypPage; });
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
 * Generated class for the AddypPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddypPage = /** @class */ (function () {
    function AddypPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddypPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddypPage');
    };
    AddypPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addyp',template:/*ion-inline-start:"F:\ionic4\lyt\src\pages\addyp\addyp.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="title-text-z">添加样品</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-color: #f8f8f8">\n\n  <ion-list>\n    <ion-item  class="list-font">\n      <ion-label  color="primary">批量及代表数量</ion-label>\n      <ion-input placeholder="请输入批量及代表数量"></ion-input>\n    </ion-item>\n    <ion-item  class="list-font">\n      <ion-label color="primary">样品名称</ion-label>\n      <ion-input placeholder="请输入样品名称"></ion-input>\n    </ion-item>\n    <ion-item  class="list-font">\n      <ion-label color="primary">样品规格</ion-label>\n      <ion-input placeholder="请输入样品规格"></ion-input>\n    </ion-item>\n    <ion-item  class="list-font">\n      <ion-label color="primary">样品数量</ion-label>\n      <ion-input type="number" placeholder="请输入样品数量"></ion-input>\n    </ion-item>\n    <ion-item  class="list-font">\n      <ion-label color="primary">生产厂家</ion-label>\n      <ion-input placeholder="请输入生产厂家"></ion-input>\n    </ion-item>\n    <ion-item  class="list-font">\n      样品图片（可上传合格证、设计文件、其他要求文件）\n    </ion-item>\n    <ion-item>\n     \n    </ion-item>\n  </ion-list>\n\n  <button ion-button color="secondary" style="width: 100%" >确认提交</button>\n</ion-content>'/*ion-inline-end:"F:\ionic4\lyt\src\pages\addyp\addyp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AddypPage);
    return AddypPage;
}());

//# sourceMappingURL=addyp.js.map

/***/ })

});
//# sourceMappingURL=10.js.map