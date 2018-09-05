webpackJsonp([2],{

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YplistPageModule", function() { return YplistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__yplist__ = __webpack_require__(699);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var YplistPageModule = /** @class */ (function () {
    function YplistPageModule() {
    }
    YplistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__yplist__["a" /* YplistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__yplist__["a" /* YplistPage */]),
            ],
        })
    ], YplistPageModule);
    return YplistPageModule;
}());

//# sourceMappingURL=yplist.module.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YplistPage; });
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
 * Generated class for the YplistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var YplistPage = /** @class */ (function () {
    function YplistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    YplistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad YplistPage');
    };
    YplistPage.prototype.goaddyp = function () {
        this.navCtrl.push("AddypPage");
    };
    YplistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-yplist',template:/*ion-inline-start:"F:\ionic4\lyt\src\pages\yplist\yplist.html"*/'\n\n\n<ion-header>\n  <ion-navbar>\n    <ion-title class="title-text-z">样品列表</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background-color: #f8f8f8">\n  <div style="background-color: #ffffff">\n\n   \n   <ion-grid>\n    <ion-row>\n      <ion-col col-2.5 class="col-border" >\n        式样编号\n      </ion-col>\n      <ion-col col-2.5 class="col-border" >\n        样品名称\n      </ion-col>\n      <ion-col col-2.5 class="col-border" >\n        样品规格\n      </ion-col>\n      <ion-col col-2.5 class="col-border" >\n        样品数量\n      </ion-col>\n      <ion-col col-2.5 class="col-border" style="border-right:0px;">\n        生产厂家\n      </ion-col>\n    </ion-row>\n  </ion-grid> \n\n  <ion-scroll  scrollY="true" style="height:28em">\n \n  <ion-list >\n    <ion-item-sliding #item>\n      <ion-item style="height:1em">\n        <ion-grid  >\n          <ion-row >\n            <ion-col col-2.5 >\n              001\n            </ion-col>\n            <ion-col col-2.5 >\n              碎石\n            </ion-col>\n            <ion-col col-2.5 >\n              20G\n            </ion-col>\n            <ion-col col-2.5 >\n              10\n            </ion-col>\n            <ion-col col-2.5 >\n              乌鲁木齐\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" >删除</button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-list >\n    <ion-item-sliding #item>\n      <ion-item style="height:1em ;background-color: #f8f8f8">\n        <ion-grid  >\n          <ion-row >\n            <ion-col col-2.5 >\n              001\n            </ion-col>\n            <ion-col col-2.5 >\n              碎石\n            </ion-col>\n            <ion-col col-2.5 >\n              20G\n            </ion-col>\n            <ion-col col-2.5 >\n              10\n            </ion-col>\n            <ion-col col-2.5 >\n              乌鲁木齐\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" >删除</button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-list >\n    <ion-item-sliding #item>\n      <ion-item style="height:1em ;">\n        <ion-grid  >\n          <ion-row >\n            <ion-col col-2.5 >\n              001\n            </ion-col>\n            <ion-col col-2.5 >\n              碎石\n            </ion-col>\n            <ion-col col-2.5 >\n              20G\n            </ion-col>\n            <ion-col col-2.5 >\n              10\n            </ion-col>\n            <ion-col col-2.5 >\n              乌鲁木齐\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" >删除</button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  \n  <ion-list >\n    <ion-item-sliding #item>\n      <ion-item style="height:1em ;background-color: #f8f8f8">\n        <ion-grid  >\n          <ion-row >\n            <ion-col col-2.5 >\n              001\n            </ion-col>\n            <ion-col col-2.5 >\n              碎石\n            </ion-col>\n            <ion-col col-2.5 >\n              20G\n            </ion-col>\n            <ion-col col-2.5 >\n              10\n            </ion-col>\n            <ion-col col-2.5 >\n              乌鲁木齐\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" >删除</button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-list >\n    <ion-item-sliding #item>\n      <ion-item style="height:1em ;">\n        <ion-grid  >\n          <ion-row >\n            <ion-col col-2.5 >\n              001\n            </ion-col>\n            <ion-col col-2.5 >\n              碎石\n            </ion-col>\n            <ion-col col-2.5 >\n              20G\n            </ion-col>\n            <ion-col col-2.5 >\n              10\n            </ion-col>\n            <ion-col col-2.5 >\n              乌鲁木齐\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" >删除</button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list> \n\n  <ion-list >\n    <ion-item-sliding #item>\n      <ion-item style="height:1em ;background-color: #f8f8f8">\n        <ion-grid  >\n          <ion-row >\n            <ion-col col-2.5 >\n              001\n            </ion-col>\n            <ion-col col-2.5 >\n              碎石\n            </ion-col>\n            <ion-col col-2.5 >\n              20G\n            </ion-col>\n            <ion-col col-2.5 >\n              10\n            </ion-col>\n            <ion-col col-2.5 >\n              乌鲁木齐\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" >删除</button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-list >\n    <ion-item-sliding #item>\n      <ion-item style="height:1em ;">\n        <ion-grid  >\n          <ion-row >\n            <ion-col col-2.5 >\n              001\n            </ion-col>\n            <ion-col col-2.5 >\n              碎石\n            </ion-col>\n            <ion-col col-2.5 >\n              20G\n            </ion-col>\n            <ion-col col-2.5 >\n              10\n            </ion-col>\n            <ion-col col-2.5 >\n              乌鲁木齐\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" >删除</button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list> \n\n  <ion-list >\n    <ion-item-sliding #item>\n      <ion-item style="height:1em ;background-color: #f8f8f8">\n        <ion-grid  >\n          <ion-row >\n            <ion-col col-2.5 >\n              001\n            </ion-col>\n            <ion-col col-2.5 >\n              碎石\n            </ion-col>\n            <ion-col col-2.5 >\n              20G\n            </ion-col>\n            <ion-col col-2.5 >\n              10\n            </ion-col>\n            <ion-col col-2.5 >\n              乌鲁木齐\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" >删除</button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-list >\n    <ion-item-sliding #item>\n      <ion-item style="height:1em ;">\n        <ion-grid  >\n          <ion-row >\n            <ion-col col-2.5 >\n              001\n            </ion-col>\n            <ion-col col-2.5 >\n              碎石\n            </ion-col>\n            <ion-col col-2.5 >\n              20G\n            </ion-col>\n            <ion-col col-2.5 >\n              10\n            </ion-col>\n            <ion-col col-2.5 >\n              乌鲁木齐\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" >删除</button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list> \n\n</ion-scroll>\n\n</div>\n\n  <ion-grid padding>\n    <ion-row padding>\n      <ion-col col-5>\n        <button ion-button color="secondary" (click)="goaddyp()">&nbsp;&nbsp;&nbsp;&nbsp;样品添加&nbsp;&nbsp;&nbsp;&nbsp;</button>\n      </ion-col>\n      <ion-col col-2></ion-col>\n      <ion-col col-5>\n        <button ion-button>&nbsp;&nbsp;&nbsp;&nbsp;选择签名&nbsp;&nbsp;&nbsp;&nbsp;</button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n\n  <button ion-button color="secondary" style="width: 100%">提交委托检测单</button>\n</ion-content>'/*ion-inline-end:"F:\ionic4\lyt\src\pages\yplist\yplist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], YplistPage);
    return YplistPage;
}());

//# sourceMappingURL=yplist.js.map

/***/ })

});
//# sourceMappingURL=2.js.map