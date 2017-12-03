webpackJsonp([0],{

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoodJournalEntryModule", function() { return MoodJournalEntryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mood_journal_entry__ = __webpack_require__(439);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MoodJournalEntryModule = (function () {
    function MoodJournalEntryModule() {
    }
    return MoodJournalEntryModule;
}());
MoodJournalEntryModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__mood_journal_entry__["a" /* MoodJournalEntry */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mood_journal_entry__["a" /* MoodJournalEntry */]),
        ],
    })
], MoodJournalEntryModule);

//# sourceMappingURL=mood-journal-entry.module.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoodJournalEntry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MoodJournalEntry = (function () {
    function MoodJournalEntry(navCtrl, navParams, viewCtrl, databaseprovider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.databaseprovider = databaseprovider;
        this.event = {
            startTime: __WEBPACK_IMPORTED_MODULE_2_moment___default()().format(),
            endTime: __WEBPACK_IMPORTED_MODULE_2_moment___default()().format(),
            allDay: false,
            mood: 'bad',
            title: ''
        };
        this.minDate = __WEBPACK_IMPORTED_MODULE_2_moment___default()().toISOString();
        var preselectedDate = __WEBPACK_IMPORTED_MODULE_2_moment___default()(this.navParams.get('selectedDay')).format();
        this.event.startTime = preselectedDate;
        this.event.endTime = preselectedDate;
    }
    MoodJournalEntry.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    MoodJournalEntry.prototype.save = function () {
        this.databaseprovider.connection().executeSql('INSERT INTO mood_journal_entries (date_from, date_until, all_day, mood, entry) VALUES (?,?,?,?,?)', [this.event.startTime, this.event.endTime, this.event.allDay, this.event.mood, this.event.title])
            .then(function () { return console.log('saved entry'); })
            .catch(function (e) { return console.error(JSON.stringify(e)); });
        this.viewCtrl.dismiss(this.event);
    };
    return MoodJournalEntry;
}());
MoodJournalEntry = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-event-modal',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/mood-journal-entry/mood-journal-entry.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-buttons start>\n            <button ion-button icon-only (click)="cancel()">\n                <ion-icon name="close"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n     <ion-item>\n        <ion-textarea id="myInput" placeholder="write your journal entry here" [(ngModel)]="event.title"></ion-textarea>\n    </ion-item>\n    <ion-item>\n        <ion-label>mood</ion-label>\n        <ion-select [(ngModel)]="mood">\n            <ion-option value="bad">bad</ion-option>\n            <ion-option value="ok">ok</ion-option>\n            <ion-option value="good">good</ion-option>\n        </ion-select>\n    </ion-item>\n\n    <ion-list>\n        <ion-item>\n            <ion-label>Start</ion-label>\n            <ion-datetime displayFormat="DD/MM/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="event.startTime"\n                          [min]="minDate"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n            <ion-label id="endtime">End</ion-label>\n            <ion-datetime displayFormat="DD/MM/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="event.endTime"\n                          [min]="minDate"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>All Day?</ion-label>\n            <ion-checkbox [(ngModel)]="event.allDay"></ion-checkbox>\n        </ion-item>\n    </ion-list>\n\n    <button ion-button large block id="submit" icon-left (click)="save()">\n        <ion-icon name="checkmark"></ion-icon>\n        add mood entry\n    </button>\n</ion-content>\n'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/mood-journal-entry/mood-journal-entry.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
], MoodJournalEntry);

//# sourceMappingURL=mood-journal-entry.js.map

/***/ })

});
//# sourceMappingURL=0.js.map