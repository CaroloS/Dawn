webpackJsonp([1],{

<<<<<<< HEAD
/***/ 491:
=======
/***/ 489:
>>>>>>> 19f52bed1339a8e9cf86551c4afaf7bcee294e16
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventModalPageModule", function() { return EventModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_modal__ = __webpack_require__(495);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_modal__ = __webpack_require__(493);
>>>>>>> 19f52bed1339a8e9cf86551c4afaf7bcee294e16
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventModalPageModule = (function () {
    function EventModalPageModule() {
    }
    return EventModalPageModule;
}());
EventModalPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__event_modal__["a" /* EventModalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_modal__["a" /* EventModalPage */]),
        ],
    })
], EventModalPageModule);

//# sourceMappingURL=event-modal.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 495:
=======
/***/ 493:
>>>>>>> 19f52bed1339a8e9cf86551c4afaf7bcee294e16
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventModalPage = (function () {
    function EventModalPage(navCtrl, navParams, viewCtrl, sqlite) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.sqlite = sqlite;
        this.event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false };
        this.minDate = new Date().toISOString();
        var preselectedDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.navParams.get('selectedDay')).format();
        this.event.startTime = preselectedDate;
        this.event.endTime = preselectedDate;
    }
    EventModalPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    EventModalPage.prototype.save = function () {
        var _this = this;
        this.sqlite.create({
            name: 'data.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql("INSERT INTO mood_journal_entries (date_from, date_until, all_day, mood, entry) VALUES ('" + _this.event.startTime + "', '" + _this.event.endTime + "', '" + _this.event.allDay + "', '" + _this.event.mood + "', '" + _this.event.title + "')", {})
                .then(function () { return console.log('saved entry'); })
                .catch(function (e) { return console.log(e); });
        })
            .catch(function (e) { return console.log(e); });
        this.viewCtrl.dismiss(this.event);
    };
    return EventModalPage;
}());
EventModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-event-modal',template:/*ion-inline-start:"/Users/jasondeakin/GC02_2017_Team18/src/pages/event-modal/event-modal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title id="title">mood journal</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<h2> how are you feeling today? </h2>\n\n\n    <ion-item>\n      <ion-textarea id="myInput" placeholder="write your journal entry here"  [(ngModel)]="event.title"></ion-textarea>\n    <!--  <ion-input type="text" placeholder="Title" [(ngModel)]="event.title"></ion-input> -->\n    </ion-item>\n   \n	<ion-item>\n 	 <ion-label>mood</ion-label>\n 	 	<ion-select [(ngModel)]="mood">\n 	   <ion-option value="bad">bad</ion-option>\n  	  <ion-option value="ok">ok</ion-option>\n	  <ion-option value="good">good</ion-option>\n  	</ion-select>\n	</ion-item>\n\n<ion-list>\n    <ion-item>\n      <ion-label>Start</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="event.startTime" [min]="minDate"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label id="endtime">End</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="event.endTime" [min]="minDate"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>All Day?</ion-label>\n      <ion-checkbox [(ngModel)]="event.allDay"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button large  block  id="submit"   icon-left  (click)="save()">\n    <ion-icon name="checkmark"> </ion-icon>   add mood entry\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/jasondeakin/GC02_2017_Team18/src/pages/event-modal/event-modal.html"*/,
=======
        selector: 'page-event-modal',template:/*ion-inline-start:"/Users/carolinesmith/GC02_2017_Team18/src/pages/event-modal/event-modal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title id="title">mood journal</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<h2> how are you feeling today? </h2>\n\n\n    <ion-item>\n      <ion-textarea id="myInput" placeholder="write your jounral entry here"  [(ngModel)]="event.title"></ion-textarea>\n    <!--  <ion-input type="text" placeholder="Title" [(ngModel)]="event.title"></ion-input> -->\n    </ion-item>\n\n\n<ion-list>\n    <ion-item>\n      <ion-label>Start</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="event.startTime" [min]="minDate"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label id="endtime">End</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="event.endTime" [min]="minDate"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>All Day?</ion-label>\n      <ion-checkbox [(ngModel)]="event.allDay"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button large  block  id="submit"   icon-left  (click)="save()">\n    <ion-icon name="checkmark"> </ion-icon>   add mood entry\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/carolinesmith/GC02_2017_Team18/src/pages/event-modal/event-modal.html"*/,
>>>>>>> 19f52bed1339a8e9cf86551c4afaf7bcee294e16
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */]) === "function" && _d || Object])
], EventModalPage);

var _a, _b, _c, _d;
//# sourceMappingURL=event-modal.js.map

/***/ })

});
//# sourceMappingURL=1.js.map