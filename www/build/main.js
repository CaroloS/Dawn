webpackJsonp([1],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InACrisisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InACrisisPage = (function () {
    function InACrisisPage(theInAppBrowser) {
        this.theInAppBrowser = theInAppBrowser;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
    }
    InACrisisPage.prototype.openWithInAppBrowser = function (url) {
        var target = "_blank";
        this.theInAppBrowser.create(url, target, this.options);
    };
    return InACrisisPage;
}());
InACrisisPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-in-acrisis',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/in-acrisis/in-acrisis.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page47">\n  <div id="inACrisis-markdown2" class="show-list-numbers-and-dots">\n     <p>\n       am i in a crisis?\n    </p>\n    <p>\n       a crisis can be very different from person to person. if you answer \'yes\' to any of the following questions, you may be in a crisis. \n    </p>\n      <UL>\n          <p>\n      <li> do you feel as if your mental health is close to breaking point?</li>\n      <li> are you having thoughts of suicide or self-harm?</li>\n      <li> does your behaviour feel out of control?</li> \n      <li> are you unable to control your alcohol or substance intake?</li>\n      <li> are family/friends more concerned for your safety than you are?</li>\n      <li> are you experiencing sensations around you that aren’t real (delusions, hallucinations, hearing voices)?</li>\n      </UL>\n    <p>\n      what should i do?\n    </p>\n    <p>\n      speak with someone now if you urgently need medical help or advice, call:\n    </p>\n     <p>\n      nhs emergency and urgent care service: <a href="tel:111" id="hyperlink1">111</a>\n    </p>\n    <p>\n      tyneside crisis number: <a href="tel:03031231146" id="hyperlink1">0303 123 1146</a>\n    </p>\n    <p>\n      samaritans: <a href="tel:116123" id="hyperlink1">116 123</a>\n    </p>\n    <p>\n      for urgent medical attention visit your local accident & emergency (a&e) or book an emergency gp appointment.\n    </p>\n     <p>\n      helping someone else?\n   <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.mind.org.uk/information-support/helping-someone-else\');" id="hyperlink1">\n                click here\n            </a>\n    </p>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/in-acrisis/in-acrisis.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], InACrisisPage);

//# sourceMappingURL=in-acrisis.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarerSupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarerSupportPage = (function () {
    function CarerSupportPage(theInAppBrowser) {
        this.theInAppBrowser = theInAppBrowser;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
    }
    CarerSupportPage.prototype.openWithInAppBrowser = function (url) {
        var target = "_blank";
        this.theInAppBrowser.create(url, target, this.options);
    };
    return CarerSupportPage;
}());
CarerSupportPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-carer-support',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/carer-support/carer-support.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page41">\n  <div padding id="carerSupport-markdown3" class="show-list-numbers-and-dots">\nyou are a carer if you provide (unpaid) support and care for someone who has an illness, disability, mental health problem or addiction. being a carer can be mentally and physically tiring.\nyou may also feel isolated or be struggling financially.\n      </div>\n\n	<div padding>\n	there is a growing carer support movement in the uk. you can get assistance with a range of carer issues:\n	</div>\n\n<div class="spacer" style="height:10px;" id="nhsSelfHelpLeaflets-spacer28"></div>\n\n  <ion-grid>\n    <ion-row>\n<ion-col col-6>\n<ion-thumbnail (click)="openWithInAppBrowser(\'https://www.carersuk.org/help-and-advice/financial-support\')" id="hyperlink1">\n      <img src="assets/img/Financialsupport.png" />\n    </ion-thumbnail>\n</ion-col>\n<ion-col col-6>\n<ion-thumbnail (click)="openWithInAppBrowser(\'https://www.carersuk.org/help-and-advice/practical-support\')" >\n<img src="assets/img/Practicalsupport.png" />\n</ion-thumbnail>\n</ion-col>\n</ion-row>\n</ion-grid>\n<ion-grid>\n  <ion-row>\n    <ion-col col-6>\n  <ion-thumbnail (click)="openWithInAppBrowser(\'https://www.carersuk.org/help-and-advice/work-and-career\')" >\n    <img src="assets/img/workandcareer.png" />\n  </ion-thumbnail>\n</ion-col>\n<ion-col col-6>\n<ion-thumbnail (click)="openWithInAppBrowser(\'https://www.carersuk.org/help-and-advice/technology-and-equipment\')" id="hyperlink1">\n    <img src="assets/img/technologyandequipment.png" />\n  </ion-thumbnail>\n</ion-col>\n</ion-row>\n</ion-grid>\n<ion-grid>\n  <ion-row>\n    <ion-col col-6>\n  <ion-thumbnail (click)="openWithInAppBrowser(\'https://www.carersuk.org/help-and-advice/your-relationships\')" >\n    <img src="assets/img/Yourrelationships.png" />\n  </ion-thumbnail>\n</ion-col>\n<ion-col col-6>\n<ion-thumbnail (click)="openWithInAppBrowser(\'https://www.carersuk.org/help-and-advice/get-support\')" id="hyperlink1">\n    <img src="assets/img/Getsupport.png" />\n  </ion-thumbnail>\n</ion-col>\n</ion-row>\n</ion-grid>\n\n<!--\n<div padding>\nmobile device features such as alarms can help you to keep track of tasks and remind you of key times during the day where you may need to talk to a friend, go to an appointment or take medicaiton.\n</div> -->\n\n<p>more information for carers can be found here:</p>\n	<div>\n    <ul>\n    <p>\n     <li> <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.nhs.uk/Conditions/social-care-and-support-guide/Pages/carers-direct-helpline.aspx\');">social care and support guide</a>\n    </p>\n\n    <p>\n      <li> <a class="item" href="#" (click)="openWithInAppBrowser(\'https://youngminds.org.uk/find-help/your-guide-to-support/guide-to-camhs\');">child and adolescent mental health services</a>\n    </p>\n    <p>\n      <li> <a class="item" href="#" (click)="openWithInAppBrowser(\'https://carers.org/article/alcohol-drugs-and-addiction\');">are you affected by someone else’s drinking or drug use? </a>\n    </p>\n  </ul>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/carer-support/carer-support.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], CarerSupportPage);

//# sourceMappingURL=carer-support.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KnowYourRightsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KnowYourRightsPage = (function () {
    function KnowYourRightsPage(theInAppBrowser) {
        this.theInAppBrowser = theInAppBrowser;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
    }
    KnowYourRightsPage.prototype.openWithInAppBrowser = function (url) {
        var target = "_blank";
        this.theInAppBrowser.create(url, target, this.options);
    };
    return KnowYourRightsPage;
}());
KnowYourRightsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-know-your-rights',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/know-your-rights/know-your-rights.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page37">\n  <div id="knowYourRights-markdown7" class="show-list-numbers-and-dots">\n<h1>if you or a loved one have been admitted to hospital you may want to know about the mental health act and the mental capacity act . . </h1>\n\n    <p>\n\n      the <b>\'mental health act\'</b> is a piece of legislation which informs people with mental health problems what their rights are regarding factors such as:\n    </p>\n    <UL>\n      <p>\n      <li> assessment and treatment in hospital\n      <li> treatment in the community\n      <li> safe and legal pathways into hospital\n    </UL>\n    <p>\n      <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.mind.org.uk/information-support/legal-rights/mental-health-act-1983/#.WfuhOBO0P5Y\');">\n                to learn more about your rights click here\n            </a>\n    </p>\n\n    <p>\n      the <b>\'mental capacity act\'</b> is....\n    </p>\n\n    <p>\n   <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.nhs.uk/Conditions/social-care-and-support-guide/Pages/mental-capacity.aspx\');">what is the mental capacity act?</a>\n    </p>\n'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/know-your-rights/know-your-rights.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], KnowYourRightsPage);

//# sourceMappingURL=know-your-rights.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindAServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FindAServicePage = (function () {
    function FindAServicePage(theInAppBrowser) {
        this.theInAppBrowser = theInAppBrowser;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
    }
    FindAServicePage.prototype.openWithInAppBrowser = function (url) {
        var target = "_blank";
        this.theInAppBrowser.create(url, target, this.options);
    };
    return FindAServicePage;
}());
FindAServicePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-find-aservice',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/find-aservice/find-aservice.html"*/'<ion-header style="color:black;">\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page38" >\n\n<ion-searchbar ></ion-searchbar>\n\n  <ion-list  no-lines id="findAService-list60">\n\n  <ion-item class="service-title">\n    bipolar disorder\n  </ion-item>\n    <ion-item class="service-information">\n        <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.bipolaruk.org/Pages/Category/support-groups\')" id="hyperlink1">\n                bipolar uk nt support group\n            </a>\n    </ion-item>\n    <ion-item class="service-title">\n    carers\n    </ion-item>\n  	<ion-item class="service-information">\n      <a class="item" href="#" (click)="openWithInAppBrowser(\'http://www.carersuk.org/\', \'_blank\', \'location=yes\')" id="hyperlink1">\n                carers uk\n            </a>\n    </ion-item>\n  	<ion-item class="service-information">\n       <a class="item" href="#" (click)="openWithInAppBrowser(\'http://carers-network.org.uk/\', \'_blank\', \'location=yes\')" id="hyperlink1">\n                carers network\n            </a>\n    </ion-item>\n    <ion-item class="service-title">\n    dementia and elderly care\n    </ion-item>\n  	<ion-item class="service-information">\n       <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.ageuk.org.uk/\', \'_blank\', \'location=yes\')" id="hyperlink1">\n                age uk\n            </a>\n    </ion-item>\n  	<ion-item class="service-information">\n      <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.alzheimers.org.uk/\', \'_blank\', \'location=yes\')" id="hyperlink1">\n                alzheimer’s society\n            </a>\n    </ion-item>\n    <ion-item class="service-title">\n    general\n    </ion-item>\n  	<ion-item class="service-information">\n       <a class="item" href="#" (click)="openWithInAppBrowser(\'http://www.changing-lives.org.uk/\', \'_blank\', \'location=yes\')" id="hyperlink1">\n                changing lives\n            </a>\n    </ion-item>\n  	<ion-item class="service-information">\n       <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.mentalhealth.org.uk/\', \'_blank\', \'location=yes\')" id="hyperlink1">\n                mental health foundation\n            </a>\n    </ion-item>\n  	<ion-item class="service-information">\n       <a class="item" href="#" (click)="openWithInAppBrowser(\'http://www.mentalhealthconcern.org/\', \'_blank\', \'location=yes\')" id="hyperlink1">\n                mental health concern\n            </a>\n    </ion-item>\n  	<ion-item class="service-information">\n       <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.time-to-change.org.uk/\', \'_blank\', \'location=yes\')" id="hyperlink1">\n                time to change\n            </a>\n    </ion-item>\n    <ion-item class="service-title">\n    get active\n    </ion-item>\n  	<ion-item class="service-information">\n        <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.walkingforhealth.org.uk/walkfinder/linskill-healthy-walks-community-interest-company\')" id="hyperlink1">\n                linskill centre healthy walks\n            </a>\n    </ion-item>\n    <ion-item class="service-information">\n    know your rights\n    </ion-item>\n  	<ion-item class="service-information">\n       <a class="item" href="#" (click)="openWithInAppBrowser(\'http://independentadvocacy.org/\', \'_blank\', \'location=yes\')" id="hyperlink1">\n                independent advocacy\n            </a>\n    </ion-item>\n  	<ion-item class="service-information">\n      <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.internationalsos.com/\', \'_blank\', \'location=yes\')" id="hyperlink1">\n                isos\n            </a>\n    </ion-item>\n    <ion-item class="service-title">\n    learn a skill\n    </ion-item>\n  	<ion-item class="service-information">\n       <a class="item" href="#" (click)="openWithInAppBrowser(\'http://www.key-enterprises.com/\', \'_blank\', \'location=yes\')" id="hyperlink1">\n                key enterprises\n            </a>\n    </ion-item>\n  	<ion-item class="service-information">\n      <a class="item" href="#" (click)="openWithInAppBrowser(\'http://northtynesideartstudio.org.uk/\', \'_blank\', \'location=yes\')" id="hyperlink1">\n                north tyneside art studio\n            </a>\n    </ion-item>\n    <ion-item class="service-title">\n    learning disability\n    </ion-item>\n  	<ion-item class="service-information">\n      <a class="item" href="#" (click)="openWithInAppBrowser(\'http://www.ldne.org.uk/\', \'_blank\', \'location=yes\')" id="hyperlink1">\n                ld: north east\n            </a>\n    </ion-item>\n  	<ion-item class="service-information">\n      <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.mencap.org.uk/?gclid=CjwKCAiA6K_QBRA8EiwASvtjZSGa1shvRZd2oqMyx93UKoPcNn34mEFx9CbP6pHcerpdWhEkbXTekRoCgGQQAvD_BwE\')" id="hyperlink1">\n                mencap north tyneside\n            </a>\n    </ion-item>\n  	<ion-item class="service-information">\n      <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.newprospects.org.uk/\')" id="hyperlink1">\n                new prospects\n            </a>\n    </ion-item>\n    <ion-item class="service-title">\n    meet people\n    </ion-item>\n  	<ion-item class="service-information">\n      <a class="item" href="#" (click)="openWithInAppBrowser(\'http://www.cameonorthtyneside.org.uk/\')" id="hyperlink1">\n                cameo (come and meet each other)\n            </a>\n    </ion-item>\n  	<ion-item class="service-information">\n        <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.northumbria.nhs.uk/our-services/mental-health-services/north-tyneside-talking-therapies\')" id="hyperlink1">\n                  northumberland tyne and wear nhs foundation trust\n              </a>\n      </ion-item>\n    <ion-item class="service-title">\n    national services\n    </ion-item>\n  	<ion-item class="service-information">\n      <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.ntw.nhs.uk/\')" id="hyperlink1">\n                northumberland tyne and wear nhs foundation trust\n            </a>\n    </ion-item>\n  	<ion-item class="service-information">\n      <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.northumbria.nhs.uk/\')" id="hyperlink1">\n                northumbria healthcare nhs foundation trust\n            </a>\n    </ion-item>\n  	<ion-item class="service-information">\n      <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.gov.uk/government/organisations/public-health-england\')" id="hyperlink1">\n                 public health england\n            </a>\n    </ion-item>\n  	<ion-item class="service-information">\n      <a class="item" href="#" (click)="openWithInAppBrowser(\'http://mhne.org.uk/\')" id="hyperlink1">\n                 mental health north east\n            </a>\n    </ion-item>\n  	<ion-item class="service-information">\n      <a class="item" href="#" (click)="openWithInAppBrowser(\'http://www.socialprescribing.org.uk/\')" id="hyperlink1">\n                 social prescribing\n            </a>\n    </ion-item>\n    <ion-item class="service-title">\n    substance misuse\n    </ion-item>\n  	<ion-item class="service-information">\n       <a class="item" href="#" (click)="openWithInAppBrowser(\'http://www.talktofrank.com/\')" id="hyperlink1">\n                 talk to frank\n            </a>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/find-aservice/find-aservice.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], FindAServicePage);

//# sourceMappingURL=find-aservice.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhatIsSelfHelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WhatIsSelfHelpPage = (function () {
    function WhatIsSelfHelpPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return WhatIsSelfHelpPage;
}());
WhatIsSelfHelpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-what-is-self-help',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/what-is-self-help/what-is-self-help.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page42">\n  <div id="whatIsSelfHelp-markdown5" class="show-list-numbers-and-dots">\n    <p>\n      self-help can be a useful first step in dealing with your problems if you’re unsure whether to seek further help.\n    </p>\n    <p>\n    change is difficult but even ingrained habits can be altered. it\'s never too late to change.\n    </p>\n\n    <ion-card class="helpcards">\n      <ion-card-header>\n        self help is\n      </ion-card-header>\n        <ion-card-content>\n          doing things yourself to try and solve problems. \'group\' self help is providing support and help for each other in an informal way\n    </ion-card-content>\n    </ion-card>\n\n    <ion-card class="helpcards">\n\n      <ion-card-header>\n        setting and achieving goals\n      </ion-card-header>\n\n      <ion-card-content>\n        set small, achievable goals and review them regularly. this will build motivation and self-control\n      </ion-card-content>\n\n    </ion-card>\n\n    \n\n        <ion-card class="helpcards">\n\n          <ion-card-header>\n            breaking habit formation\n          </ion-card-header>\n\n          <ion-card-content>\n            habit formation is the process by which new behaviors become automatic.through repetition, it is possible to form new habits\n            and break with old ones.\n          </ion-card-content>\n\n        </ion-card>\n\n\n    <ion-card class="helpcards" id= "helpcards">\n\n      <ion-card-header>\n        self help groups\n      </ion-card-header>\n\n      <ion-card-content>\n a self-help or mutual support group is any group which offers emotional support and practical help. see the link at the bottom to find a group near you.\n      </ion-card-content>\n\n    </ion-card>\n\n\n      <p>\n        look through the \'self help leafelts\' page of this app to find a leaflet for a condition affecting you.\n      </p>\n\n    <p>\n      if you don’t feel any effects after trying self-help therapy, you can also talk to your gp.\n    </p>\n    <p>\n\n      for more information or to join a peer support group visit\n      <a href="https://www.mind.org.uk/information-support/guides-to-support-and-services/peer-support-directory/#.Wh8Sc7SMhE4">mind.org</a>\n\n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/what-is-self-help/what-is-self-help.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], WhatIsSelfHelpPage);

//# sourceMappingURL=what-is-self-help.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MindfulnessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MindfulnessPage = (function () {
    function MindfulnessPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    MindfulnessPage.prototype.breatheAlert = function (event) {
        var alert = this.alertCtrl.create({
            title: 'Breathe Deeply',
            subTitle: 'Meditation revolves arounds breathing. It\'s a great way to relax and centre yourself\. To begin practising, inhale for 3 seconds and exhale for 3 seconds. As you practice more, increase the amount of seconds\. ',
            buttons: ['OK']
        });
        alert.present();
    };
    MindfulnessPage.prototype.exerciseAlert = function (event) {
        var alert = this.alertCtrl.create({
            title: 'Eat Well and Exercise',
            subTitle: 'Mindful eating involves paying full attention to the experience of eating and drinking, both inside and outside the body. Pay attention to the colors, smells, textures and flavours. Pay attention to the experience of the body. Avoid sitting for extended periods and move regularly during the day.  ',
            buttons: ['OK']
        });
        alert.present();
    };
    MindfulnessPage.prototype.noticeAlert = function (event) {
        var alert = this.alertCtrl.create({
            title: 'Notice and Listen',
            subTitle: 'Be present in the moment. Allow your mind to let go and simply notice what\'s around you. Listen to what others are saying, attempt to avoid judgements and focus on the content of what they\'re saying ',
            buttons: ['OK']
        });
        alert.present();
    };
    MindfulnessPage.prototype.gratitudeAlert = function (event) {
        var alert = this.alertCtrl.create({
            title: 'Practice Gratitude',
            subTitle: 'Being grateful is important habit to form. It reminds us to enjoy what we have, rather than desiring what we don\'t. Write down 3 things you\'re grateful for when you wake up and be specific.',
            buttons: ['OK']
        });
        alert.present();
    };
    return MindfulnessPage;
}());
MindfulnessPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mindfulness',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/mindfulness/mindfulness.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page43">\n  <div id="mindfulness-markdown6" class="show-list-numbers-and-dots">\n    <p>\n      paying more attention to the present moment - to your own thoughts and feelings, and to the world around you - you can improve your mental wellbeing. some people call this awareness ‘mindfulness’.\n    </p>\n\n      <nav class="slidemenu">\n\n      <input on-click="breatheAlert()" type="radio" name="slideItem" id="slide-item-1" class="slide-toggle" checked />\n        <label for="slide-item-1"><ion-icon class="icon"name="body"></ion-icon><span>Breathe Deeply</span></label>\n\n        <!--  <p class="icon"> ♬</p><span>Breathe Deeply</span></label> -->\n\n        <!-- Item 2 -->\n        <input on-click="exerciseAlert()" type="radio" name="slideItem" id="slide-item-2" class="slide-toggle"/>\n        <label for="slide-item-2"><ion-icon class="icon"name="ios-bicycle-outline"></ion-icon><span>Eat Well Exercise</span></label>\n\n        <!-- Item 3 -->\n        <input on-click="noticeAlert()" type="radio" name="slideItem" id="slide-item-3" class="slide-toggle"/>\n        <label for="slide-item-3"><ion-icon class="icon"name="ios-musical-notes-outline"></ion-icon><span>Notice Listen</span></label>\n\n        <!-- Item 4 -->\n        <input on-click="gratitudeAlert()" type="radio" name="slideItem" id="slide-item-4" class="slide-toggle"/>\n        <label for="slide-item-4"><ion-icon class="icon"name="ios-flower-outline"></ion-icon><span>Practice Gratitude</span></label>\n\n        <div class="clear"></div>\n\n        <!-- Bar -->\n        <div class="slider">\n          <div class="bar"></div>\n        </div>\n    </nav>\n\n\n\n    <p>\n      mindfulness can help us enjoy life more and understand ourselves better.\n      follow the 4 steps above to develop mindfulness in your own life and explore the relax space for mindfulness inspiration!\n    </p>\n\n\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/mindfulness/mindfulness.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MindfulnessPage);

//# sourceMappingURL=mindfulness.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NhsSelfHelpLeafletsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NhsSelfHelpLeafletsPage = (function () {
    function NhsSelfHelpLeafletsPage(theInAppBrowser) {
        this.theInAppBrowser = theInAppBrowser;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
    }
    NhsSelfHelpLeafletsPage.prototype.openWithCordovaBrowser = function (url) {
        var target = "_self";
        this.theInAppBrowser.create(url, target, this.options);
    };
    NhsSelfHelpLeafletsPage.prototype.openWithSystemBrowser = function (url) {
        var target = "_system";
        this.theInAppBrowser.create(url, target, this.options);
    };
    NhsSelfHelpLeafletsPage.prototype.openWithInAppBrowser = function (url) {
        var target = "_blank";
        this.theInAppBrowser.create(url, target, this.options);
    };
    return NhsSelfHelpLeafletsPage;
}());
NhsSelfHelpLeafletsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-nhs-self-help-leaflets',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/nhs-self-help-leaflets/nhs-self-help-leaflets.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page44">\n  <h3 style="color:#464646;" id="nhsSelfHelpLeaflets-heading2">\n    nhs easy-read self help leaflets a-z\n  </h3>\n  <div id="nhsSelfHelpLeaflets-markdown8" class="show-list-numbers-and-dots">\n    <p>\n    <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.penninecare.nhs.uk/resources/self-help-leaflets/\')" id="hyperlink1">\n        click here for more information, audio clips and british sign language self help guides\n      </a>\n    </p>\n  </div>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n      <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Abuse.pdf\');" id="hyperlink1">\n        <img src="assets/img/Abuse.jpeg" />\n      </ion-thumbnail>\n    </ion-col>\n  <ion-col col-6>\n  <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Alcohol%20and%20You.pdf\');" id="hyperlink1">\n        <img src="assets/img/Alcoholandyou.jpeg" />\n      </ion-thumbnail>\n</ion-col>\n</ion-row>\n  </ion-grid>\n<div class="spacer" style="height:10px;" id="nhsSelfHelpLeaflets-spacer28"></div>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n      <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Anxiety.pdf\');" id="hyperlink1">\n        <img src="assets/img/Anxiety.jpeg" />\n      </ion-thumbnail>\n    </ion-col>\n  <ion-col col-6>\n  <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Bereavement.pdf\', \'location=yes\')" id="hyperlink1">\n        <img src="assets/img/Bereavement.jpeg" />\n      </ion-thumbnail>\n</ion-col>\n</ion-row>\n  </ion-grid>\n \n <div class="spacer" style="height:10px;" id="nhsSelfHelpLeaflets-spacer28"></div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n      <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Controlling%20Anger.pdf\')" id="hyperlink1">\n        <img src="assets/img/Controllinganger.jpeg" />\n      </ion-thumbnail>\n    </ion-col>\n  <ion-col col-6>\n <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Depression%20and%20Low%20Mood.pdf\')" id="hyperlink1">\n        <img src="assets/img/Depressionandlowmood.jpeg" />\n      </ion-thumbnail>\n</ion-col>\n</ion-row>\n  </ion-grid>\n \n <div class="spacer" style="height:10px;" id="nhsSelfHelpLeaflets-spacer28"></div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n       <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Domestic%20Violence.pdf\')" id="hyperlink1">\n        <img src="assets/img/Domesticviolence.jpeg" />\n      </ion-thumbnail>\n    </ion-col>\n  <ion-col col-6>\n   <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Eating%20Disorders.pdf\')" id="hyperlink1"><img src="assets/img/Eatingdisorders.jpeg" />\n      </ion-thumbnail>\n</ion-col>\n</ion-row>\n  </ion-grid>\n\n  <div class="spacer" style="height:10px;" id="nhsSelfHelpLeaflets-spacer28"></div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n     <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Food%20for%20thought.pdf\')" id="hyperlink1">\n        <img src="assets/img/foodforthought.jpeg" />\n      </ion-thumbnail>\n    </ion-col>\n  <ion-col col-6>\n  <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Health%20Anxiety.pdf\')" id="hyperlink1">\n        <img src="assets/img/Healthanxiety.jpeg" />\n      </ion-thumbnail>\n</ion-col>\n</ion-row>\n  </ion-grid>\n\n  <div class="spacer" style="height:10px;" id="nhsSelfHelpLeaflets-spacer28"></div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n       <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Hearing%20Voices.pdf\')" id="hyperlink1">\n        <img src="assets/img/Hearingvoices.jpeg" />\n      </ion-thumbnail>\n    </ion-col>\n  <ion-col col-6>\n <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Obsessions%20and%20Compulsions.pdf\')" id="hyperlink1">\n        <img src="assets/img/OCD.jpeg" />\n      </ion-thumbnail>\n</ion-col>\n</ion-row>\n  </ion-grid>\n\n  <div class="spacer" style="height:10px;" id="nhsSelfHelpLeaflets-spacer28"></div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n       <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Panic.pdf\')" id="hyperlink1">\n        <img src="assets/img/Panic.jpeg" />\n      </ion-thumbnail>\n    </ion-col>\n  <ion-col col-6>\n <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Post%20traumatic%20Stress.pdf\')" id="hyperlink1">\n        <img src="assets/img/PTSD.jpeg" />\n      </ion-thumbnail>\n</ion-col>\n</ion-row>\n  </ion-grid>\n\n  <div class="spacer" style="height:10px;" id="nhsSelfHelpLeaflets-spacer28"></div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n       <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Postnatal%20Depression.pdf\')" id="hyperlink1">\n        <img src="assets/img/Postnataldepression.jpeg" />\n      </ion-thumbnail>\n    </ion-col>\n  <ion-col col-6>\n <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Self%20Harm.pdf\')" id="hyperlink1">\n        <img src="assets/img/Selfharm.jpeg" />\n      </ion-thumbnail>\n</ion-col>\n</ion-row>\n  </ion-grid>\n\n  <div class="spacer" style="height:10px;" id="nhsSelfHelpLeaflets-spacer28"></div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n       <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Shyness%20and%20Social%20Anxiety.pdf\')" id="hyperlink1">\n        <img src="assets/img/Socialanxiety.jpeg" />\n      </ion-thumbnail>\n    </ion-col>\n  <ion-col col-6>\n <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Sleeping%20Problems.pdf\')" id="hyperlink1">\n        <img src="assets/img/Sleepingproblems.jpeg" />\n      </ion-thumbnail>\n</ion-col>\n</ion-row>\n  </ion-grid>\n\n   <div class="spacer" style="height:10px;" id="nhsSelfHelpLeaflets-spacer28"></div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n       <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Stress.pdf\')" id="hyperlink1">\n        <img src="assets/img/Stress.jpeg" />\n      </ion-thumbnail>\n    </ion-col>\n  <ion-col col-6>\n</ion-col>\n</ion-row>\n  </ion-grid>'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/nhs-self-help-leaflets/nhs-self-help-leaflets.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], NhsSelfHelpLeafletsPage);

//# sourceMappingURL=nhs-self-help-leaflets.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InspirationalVideosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abuse_abuse__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alcohol_and_you_alcohol_and_you__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__anxiety_anxiety__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bereavement_bereavement__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__controlling_anger_controlling_anger__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__depression_and_low_mood_depression_and_low_mood__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__domestic_violence_domestic_violence__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__eating_disorders_eating_disorders__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__food_for_thought_food_for_thought__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__health_anxiety_health_anxiety__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__hearing_voices_and_disturbing_beliefs_hearing_voices_and_disturbing_beliefs__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__obsessions_and_compulsions_obsessions_and_compulsions__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__panic_panic__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__post_traumatic_stress_post_traumatic_stress__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__postnatal_depression_postnatal_depression__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__self_harm_self_harm__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__social_anxiety_social_anxiety__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__sleeping_problems_sleeping_problems__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__stress_stress__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var InspirationalVideosPage = (function () {
    function InspirationalVideosPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    InspirationalVideosPage.prototype.goToAbuse = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__abuse_abuse__["a" /* AbusePage */]);
    };
    InspirationalVideosPage.prototype.goToAlcoholAndYou = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__alcohol_and_you_alcohol_and_you__["a" /* AlcoholAndYouPage */]);
    };
    InspirationalVideosPage.prototype.goToAnxiety = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__anxiety_anxiety__["a" /* AnxietyPage */]);
    };
    InspirationalVideosPage.prototype.goToBereavement = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__bereavement_bereavement__["a" /* BereavementPage */]);
    };
    InspirationalVideosPage.prototype.goToControllingAnger = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__controlling_anger_controlling_anger__["a" /* ControllingAngerPage */]);
    };
    InspirationalVideosPage.prototype.goToDepressionAndLowMood = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__depression_and_low_mood_depression_and_low_mood__["a" /* DepressionAndLowMoodPage */]);
    };
    InspirationalVideosPage.prototype.goToDomesticViolence = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__domestic_violence_domestic_violence__["a" /* DomesticViolencePage */]);
    };
    InspirationalVideosPage.prototype.goToEatingDisorders = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__eating_disorders_eating_disorders__["a" /* EatingDisordersPage */]);
    };
    InspirationalVideosPage.prototype.goToFoodForThought = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__food_for_thought_food_for_thought__["a" /* FoodForThoughtPage */]);
    };
    InspirationalVideosPage.prototype.goToHealthAnxiety = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__health_anxiety_health_anxiety__["a" /* HealthAnxietyPage */]);
    };
    InspirationalVideosPage.prototype.goToHearingVoicesAndDisturbingBeliefs = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__hearing_voices_and_disturbing_beliefs_hearing_voices_and_disturbing_beliefs__["a" /* HearingVoicesAndDisturbingBeliefsPage */]);
    };
    InspirationalVideosPage.prototype.goToObsessionsAndCompulsions = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__obsessions_and_compulsions_obsessions_and_compulsions__["a" /* ObsessionsAndCompulsionsPage */]);
    };
    InspirationalVideosPage.prototype.goToPanic = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__panic_panic__["a" /* PanicPage */]);
    };
    InspirationalVideosPage.prototype.goToPostTraumaticStress = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__post_traumatic_stress_post_traumatic_stress__["a" /* PostTraumaticStressPage */]);
    };
    InspirationalVideosPage.prototype.goToPostnatalDepression = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_18__postnatal_depression_postnatal_depression__["a" /* PostnatalDepressionPage */]);
    };
    InspirationalVideosPage.prototype.goToSelfHarm = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_19__self_harm_self_harm__["a" /* SelfHarmPage */]);
    };
    InspirationalVideosPage.prototype.goToSocialAnxiety = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_20__social_anxiety_social_anxiety__["a" /* SocialAnxietyPage */]);
    };
    InspirationalVideosPage.prototype.goToSleepingProblems = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_21__sleeping_problems_sleeping_problems__["a" /* SleepingProblemsPage */]);
    };
    InspirationalVideosPage.prototype.goToStress = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_22__stress_stress__["a" /* StressPage */]);
    };
    return InspirationalVideosPage;
}());
InspirationalVideosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-inspirational-videos',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/inspirational-videos/inspirational-videos.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page29">\n  <h3 id="inspirationalVideos-heading1">\n    a-z\n  </h3>\n  <ion-list id="inspirationalVideos-list5">\n    <ion-item on-click="goToAbuse()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      abuse\n    </ion-item>\n    <ion-item color="none" on-click="goToAlcoholAndYou()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      alcohol and you\n    </ion-item>\n    <ion-item color="none" on-click="goToAnxiety()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      anxiety\n    </ion-item>\n    <ion-item color="none" on-click="goToBereavement()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      bereavement\n    </ion-item>\n    <ion-item color="none" on-click="goToControllingAnger()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      controlling anger\n    </ion-item>\n    <ion-item color="none" on-click="goToDepressionAndLowMood()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      depression and low mood\n    </ion-item>\n    <ion-item color="none" on-click="goToDomesticViolence()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      domestic violence\n    </ion-item>\n    <ion-item color="none" on-click="goToEatingDisorders()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      eating disorders\n    </ion-item>\n    <ion-item color="none" on-click="goToFoodForThought()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      food for thought\n    </ion-item>\n    <ion-item color="none" on-click="goToHealthAnxiety()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      health anxiety\n    </ion-item>\n    <ion-item color="none" on-click="goToHearingVoicesAndDisturbingBeliefs()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      hearing voices and disturbing beliefs\n    </ion-item>\n    <ion-item color="none" on-click="goToObsessionsAndCompulsions()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      obsessions and compulsions\n    </ion-item>\n    <ion-item color="none" on-click="goToPanic()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      panic\n    </ion-item>\n    <ion-item color="none" on-click="goToPostTraumaticStress()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      post traumatic stress\n    </ion-item>\n    <ion-item color="none" on-click="goToPostnatalDepression()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      postnatal depression\n    </ion-item>\n    <ion-item color="none" on-click="goToSelfHarm()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      self harm\n    </ion-item>\n    <ion-item color="none" on-click="goToSocialAnxiety()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      social anxiety\n    </ion-item>\n    <ion-item color="none" on-click="goToSleepingProblems()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      sleeping problems\n    </ion-item>\n    <ion-item color="none" on-click="goToStress()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      stress\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/inspirational-videos/inspirational-videos.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], InspirationalVideosPage);

//# sourceMappingURL=inspirational-videos.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_sqlite__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DatabaseProvider = (function () {
    function DatabaseProvider(sqlite, platform) {
        var _this = this;
        this.sqlite = sqlite;
        this.platform = platform;
        this.platform.ready().then(function () {
            _this.sqlite.create({
                name: 'dawn.db',
                location: 'default'
            }).then(function (db) {
                _this.database = db;
            }).catch(function (e) { return console.error(JSON.stringify(e)); });
        });
    }
    DatabaseProvider.prototype.connection = function () {
        return this.database;
    };
    return DatabaseProvider;
}());
DatabaseProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */]])
], DatabaseProvider);

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 139;

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/mood-journal-entry/mood-journal-entry.module": [
		438,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 183;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__advice_services_advice_services__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__in_acrisis_in_acrisis__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carer_support_carer_support__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__know_your_rights_know_your_rights__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__find_aservice_find_aservice__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__self_help_self_help__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__what_is_self_help_what_is_self_help__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mindfulness_mindfulness__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nhs_self_help_leaflets_nhs_self_help_leaflets__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__inspirational_videos_inspirational_videos__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__abuse_abuse__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__alcohol_and_you_alcohol_and_you__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__anxiety_anxiety__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__bereavement_bereavement__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__controlling_anger_controlling_anger__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__depression_and_low_mood_depression_and_low_mood__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__domestic_violence_domestic_violence__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__eating_disorders_eating_disorders__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__food_for_thought_food_for_thought__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__health_anxiety_health_anxiety__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__hearing_voices_and_disturbing_beliefs_hearing_voices_and_disturbing_beliefs__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__obsessions_and_compulsions_obsessions_and_compulsions__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__panic_panic__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__post_traumatic_stress_post_traumatic_stress__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__postnatal_depression_postnatal_depression__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__self_harm_self_harm__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__social_anxiety_social_anxiety__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__sleeping_problems_sleeping_problems__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__stress_stress__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__mood_journal_mood_journal__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__relax_space_relax_space__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

































var MenuPage = (function () {
    function MenuPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MenuPage.prototype.goToAdviceServices = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__advice_services_advice_services__["a" /* AdviceServicesPage */]);
    };
    MenuPage.prototype.goToInACrisis = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__in_acrisis_in_acrisis__["a" /* InACrisisPage */]);
    };
    MenuPage.prototype.goToCarerSupport = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__carer_support_carer_support__["a" /* CarerSupportPage */]);
    };
    MenuPage.prototype.goToKnowYourRights = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__know_your_rights_know_your_rights__["a" /* KnowYourRightsPage */]);
    };
    MenuPage.prototype.goToFindAService = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__find_aservice_find_aservice__["a" /* FindAServicePage */]);
    };
    MenuPage.prototype.goToSelfHelp = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__self_help_self_help__["a" /* SelfHelpPage */]);
    };
    MenuPage.prototype.goToWhatIsSelfHelp = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__what_is_self_help_what_is_self_help__["a" /* WhatIsSelfHelpPage */]);
    };
    MenuPage.prototype.goToMindfulness = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__mindfulness_mindfulness__["a" /* MindfulnessPage */]);
    };
    MenuPage.prototype.goToNhsSelfHelpLeaflets = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__nhs_self_help_leaflets_nhs_self_help_leaflets__["a" /* NhsSelfHelpLeafletsPage */]);
    };
    MenuPage.prototype.goToInspirationalVideos = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__inspirational_videos_inspirational_videos__["a" /* InspirationalVideosPage */]);
    };
    MenuPage.prototype.goToAbuse = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__abuse_abuse__["a" /* AbusePage */]);
    };
    MenuPage.prototype.goToAlcoholAndYou = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__alcohol_and_you_alcohol_and_you__["a" /* AlcoholAndYouPage */]);
    };
    MenuPage.prototype.goToAnxiety = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__anxiety_anxiety__["a" /* AnxietyPage */]);
    };
    MenuPage.prototype.goToBereavement = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__bereavement_bereavement__["a" /* BereavementPage */]);
    };
    MenuPage.prototype.goToControllingAnger = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__controlling_anger_controlling_anger__["a" /* ControllingAngerPage */]);
    };
    MenuPage.prototype.goToDepressionAndLowMood = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__depression_and_low_mood_depression_and_low_mood__["a" /* DepressionAndLowMoodPage */]);
    };
    MenuPage.prototype.goToDomesticViolence = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_18__domestic_violence_domestic_violence__["a" /* DomesticViolencePage */]);
    };
    MenuPage.prototype.goToEatingDisorders = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_19__eating_disorders_eating_disorders__["a" /* EatingDisordersPage */]);
    };
    MenuPage.prototype.goToFoodForThought = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_20__food_for_thought_food_for_thought__["a" /* FoodForThoughtPage */]);
    };
    MenuPage.prototype.goToHealthAnxiety = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_21__health_anxiety_health_anxiety__["a" /* HealthAnxietyPage */]);
    };
    MenuPage.prototype.goToHearingVoicesAndDisturbingBeliefs = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_22__hearing_voices_and_disturbing_beliefs_hearing_voices_and_disturbing_beliefs__["a" /* HearingVoicesAndDisturbingBeliefsPage */]);
    };
    MenuPage.prototype.goToObsessionsAndCompulsions = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_23__obsessions_and_compulsions_obsessions_and_compulsions__["a" /* ObsessionsAndCompulsionsPage */]);
    };
    MenuPage.prototype.goToPanic = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_24__panic_panic__["a" /* PanicPage */]);
    };
    MenuPage.prototype.goToPostTraumaticStress = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_25__post_traumatic_stress_post_traumatic_stress__["a" /* PostTraumaticStressPage */]);
    };
    MenuPage.prototype.goToPostnatalDepression = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_26__postnatal_depression_postnatal_depression__["a" /* PostnatalDepressionPage */]);
    };
    MenuPage.prototype.goToSelfHarm = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_27__self_harm_self_harm__["a" /* SelfHarmPage */]);
    };
    MenuPage.prototype.goToSocialAnxiety = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_28__social_anxiety_social_anxiety__["a" /* SocialAnxietyPage */]);
    };
    MenuPage.prototype.goToSleepingProblems = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_29__sleeping_problems_sleeping_problems__["a" /* SleepingProblemsPage */]);
    };
    MenuPage.prototype.goToStress = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_30__stress_stress__["a" /* StressPage */]);
    };
    MenuPage.prototype.goToMoodJournal = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_31__mood_journal_mood_journal__["a" /* MoodJournalPage */]);
    };
    MenuPage.prototype.goToRelaxSpace = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_32__relax_space_relax_space__["a" /* RelaxSpacePage */]);
    };
    return MenuPage;
}());
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menu',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/menu/menu.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page1">\n  <form id="menu-form1">\n    <div id="menu-markdown1" class="show-list-numbers-and-dots">\n      <p style="color:#464646;">\n        hey, how are you?\n      </p>\n	  <div></div>\n	  <p>\n		dawn is here to help ...\n	  </p>\n    </div>\n  </form>\n<ion-grid>\n  <ion-row>\n    <ion-col col-6>\n  <button ion-button  class="menu-button action-button" on-click="goToSelfHelp()">\n    self help\n  </button>\n</ion-col>\n<ion-col col-6>\n  <button ion-button class="menu-button action-button" on-click="goToAdviceServices()">\n    advice & services\n  </button>\n</ion-col>\n</ion-row>\n<ion-row>\n  <ion-col col-6>\n  <button ion-button class="menu-button action-button" on-click="goToMoodJournal()">\n    mood journal\n  </button>\n</ion-col>\n<ion-col col-6>\n  <button ion-button class="menu-button action-button"  on-click="goToRelaxSpace()">\n    relax space\n  </button>\n</ion-col>\n</ion-row>\n</ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/menu/menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdviceServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__in_acrisis_in_acrisis__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carer_support_carer_support__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__know_your_rights_know_your_rights__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__find_aservice_find_aservice__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdviceServicesPage = (function () {
    function AdviceServicesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AdviceServicesPage.prototype.goToInACrisis = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__in_acrisis_in_acrisis__["a" /* InACrisisPage */]);
    };
    AdviceServicesPage.prototype.goToCarerSupport = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__carer_support_carer_support__["a" /* CarerSupportPage */]);
    };
    AdviceServicesPage.prototype.goToKnowYourRights = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__know_your_rights_know_your_rights__["a" /* KnowYourRightsPage */]);
    };
    AdviceServicesPage.prototype.goToFindAService = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__find_aservice_find_aservice__["a" /* FindAServicePage */]);
    };
    return AdviceServicesPage;
}());
AdviceServicesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-advice-services',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/advice-services/advice-services.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page46">\n  <button id="adviceServices-button5" class="action-button" ion-button color="light" block on-click="goToInACrisis()">\n    in a crisis?\n  </button>\n  <button id="adviceServices-button6" class="action-button" ion-button color="light" block on-click="goToCarerSupport()">\n    carer support\n  </button>\n  <button id="adviceServices-button7" class="action-button" ion-button color="light" block on-click="goToKnowYourRights()">\n    know your rights\n  </button>\n  <button id="adviceServices-button8" class="action-button" ion-button color="light" block on-click="goToFindAService()">\n    find a service\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/advice-services/advice-services.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], AdviceServicesPage);

//# sourceMappingURL=advice-services.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelfHelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__what_is_self_help_what_is_self_help__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mindfulness_mindfulness__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nhs_self_help_leaflets_nhs_self_help_leaflets__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inspirational_videos_inspirational_videos__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__abuse_abuse__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__alcohol_and_you_alcohol_and_you__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__anxiety_anxiety__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bereavement_bereavement__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__controlling_anger_controlling_anger__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__depression_and_low_mood_depression_and_low_mood__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__domestic_violence_domestic_violence__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__eating_disorders_eating_disorders__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__food_for_thought_food_for_thought__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__health_anxiety_health_anxiety__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__hearing_voices_and_disturbing_beliefs_hearing_voices_and_disturbing_beliefs__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__obsessions_and_compulsions_obsessions_and_compulsions__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__panic_panic__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__post_traumatic_stress_post_traumatic_stress__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__postnatal_depression_postnatal_depression__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__self_harm_self_harm__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__social_anxiety_social_anxiety__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__sleeping_problems_sleeping_problems__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__stress_stress__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

























var SelfHelpPage = (function () {
    function SelfHelpPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SelfHelpPage.prototype.goToWhatIsSelfHelp = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__what_is_self_help_what_is_self_help__["a" /* WhatIsSelfHelpPage */]);
    };
    SelfHelpPage.prototype.goToMindfulness = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mindfulness_mindfulness__["a" /* MindfulnessPage */]);
    };
    SelfHelpPage.prototype.goToNhsSelfHelpLeaflets = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__nhs_self_help_leaflets_nhs_self_help_leaflets__["a" /* NhsSelfHelpLeafletsPage */]);
    };
    SelfHelpPage.prototype.goToInspirationalVideos = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__inspirational_videos_inspirational_videos__["a" /* InspirationalVideosPage */]);
    };
    SelfHelpPage.prototype.goToAbuse = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__abuse_abuse__["a" /* AbusePage */]);
    };
    SelfHelpPage.prototype.goToAlcoholAndYou = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__alcohol_and_you_alcohol_and_you__["a" /* AlcoholAndYouPage */]);
    };
    SelfHelpPage.prototype.goToAnxiety = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__anxiety_anxiety__["a" /* AnxietyPage */]);
    };
    SelfHelpPage.prototype.goToBereavement = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__bereavement_bereavement__["a" /* BereavementPage */]);
    };
    SelfHelpPage.prototype.goToControllingAnger = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__controlling_anger_controlling_anger__["a" /* ControllingAngerPage */]);
    };
    SelfHelpPage.prototype.goToDepressionAndLowMood = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__depression_and_low_mood_depression_and_low_mood__["a" /* DepressionAndLowMoodPage */]);
    };
    SelfHelpPage.prototype.goToDomesticViolence = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__domestic_violence_domestic_violence__["a" /* DomesticViolencePage */]);
    };
    SelfHelpPage.prototype.goToEatingDisorders = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__eating_disorders_eating_disorders__["a" /* EatingDisordersPage */]);
    };
    SelfHelpPage.prototype.goToFoodForThought = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__food_for_thought_food_for_thought__["a" /* FoodForThoughtPage */]);
    };
    SelfHelpPage.prototype.goToHealthAnxiety = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__health_anxiety_health_anxiety__["a" /* HealthAnxietyPage */]);
    };
    SelfHelpPage.prototype.goToHearingVoicesAndDisturbingBeliefs = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__hearing_voices_and_disturbing_beliefs_hearing_voices_and_disturbing_beliefs__["a" /* HearingVoicesAndDisturbingBeliefsPage */]);
    };
    SelfHelpPage.prototype.goToObsessionsAndCompulsions = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__obsessions_and_compulsions_obsessions_and_compulsions__["a" /* ObsessionsAndCompulsionsPage */]);
    };
    SelfHelpPage.prototype.goToPanic = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_18__panic_panic__["a" /* PanicPage */]);
    };
    SelfHelpPage.prototype.goToPostTraumaticStress = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_19__post_traumatic_stress_post_traumatic_stress__["a" /* PostTraumaticStressPage */]);
    };
    SelfHelpPage.prototype.goToPostnatalDepression = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_20__postnatal_depression_postnatal_depression__["a" /* PostnatalDepressionPage */]);
    };
    SelfHelpPage.prototype.goToSelfHarm = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_21__self_harm_self_harm__["a" /* SelfHarmPage */]);
    };
    SelfHelpPage.prototype.goToSocialAnxiety = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_22__social_anxiety_social_anxiety__["a" /* SocialAnxietyPage */]);
    };
    SelfHelpPage.prototype.goToSleepingProblems = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_23__sleeping_problems_sleeping_problems__["a" /* SleepingProblemsPage */]);
    };
    SelfHelpPage.prototype.goToStress = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_24__stress_stress__["a" /* StressPage */]);
    };
    return SelfHelpPage;
}());
SelfHelpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-self-help',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/self-help/self-help.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n  <button id="selfHelp-button1" class="action-button" ion-button color="light" block on-click="goToWhatIsSelfHelp()">\n    what is self help?\n  </button>\n  <button id="selfHelp-button2" class="action-button" ion-button color="light" block on-click="goToMindfulness()">\n    mindfulness\n  </button>\n  <button id="selfHelp-button3" class="action-button" ion-button color="light" block on-click="goToNhsSelfHelpLeaflets()">\n    nhs self help leaflets\n  </button>\n  <button id="selfHelp-button4" class="action-button" ion-button color="light" block on-click="goToInspirationalVideos()">\n    inspirational videos\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/self-help/self-help.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], SelfHelpPage);

//# sourceMappingURL=self-help.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoodJournalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MoodJournalPage = (function () {
    function MoodJournalPage(navCtrl, modalCtrl, alertCtrl, databaseprovider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.databaseprovider = databaseprovider;
        this.eventSource = [];
        this.selectedDay = new Date();
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
            dateFormatter: {
                formatMonthViewDay: function (date) {
                    return date.getDate().toString();
                },
                formatMonthViewDayHeader: function (date) {
                    return 'MonMH';
                },
                formatMonthViewTitle: function (date) {
                    return 'testMT';
                },
                formatWeekViewDayHeader: function (date) {
                    return 'MonWH';
                },
                formatWeekViewTitle: function (date) {
                    return 'testWT';
                },
                formatWeekViewHourColumn: function (date) {
                    return 'testWH';
                },
                formatDayViewHourColumn: function (date) {
                    return 'testDH';
                },
                formatDayViewTitle: function (date) {
                    return 'testDT';
                }
            }
        };
        setTimeout(function () {
            _this.createDb().then(function () { return _this.getData(); }).catch(function (e) { return console.log(JSON.stringify(e)); });
            ;
        }, 500);
    }
    MoodJournalPage.prototype.createDb = function () {
        return this.databaseprovider.connection().executeSql('CREATE TABLE IF NOT EXISTS mood_journal_entries (id INTEGER PRIMARY KEY, date_from DATETIME, date_until DATETIME, all_day BOOL, mood VARCHAR(4), entry TEXT);', {})
            .then(function () { return console.log('🛠 Create if table doesnt exist'); });
    };
    MoodJournalPage.prototype.getData = function () {
        var _this = this;
        // create an empty array for the events from the database
        var events = [];
        // use the database provider to open the SQLite file and query the data. Once this is done, process the results.
        this.databaseprovider.connection().executeSql('SELECT * FROM mood_journal_entries', []).then(function (results) {
            // if more than zero results are returned from the query...
            if (results.rows.length > 0) {
                // loop through each result by way of an increment counter
                for (var i = 0; i < results.rows.length; i++) {
                    // extract the following variables from each result row for easy use in the following
                    var _a = results.rows.item(i), entry = _a.entry, date_from = _a.date_from, date_until = _a.date_until;
                    // add an object to the empty array created above
                    events.push({
                        title: entry,
                        startTime: new Date(date_from),
                        endTime: new Date(date_until),
                        allDay: false // set all day to false, ignoring the database
                    });
                }
            }
            // reset the calendars data feed to an empty array
            _this.eventSource = [];
            // wait for a ms before assigning the event array created above to the eventsource (which is picked up by the calendar).
            // the timeout is forcing the calendar to recognise a change in data because when it is first rendered on page load, it is opening the blank array
            setTimeout(function () { return _this.eventSource = events; });
        }).catch(function (e) { return console.error(JSON.stringify(e)); });
    };
    MoodJournalPage.prototype.addEvent = function () {
        var _this = this;
        var modal = this.modalCtrl.create('MoodJournalEntry', { selectedDay: this.selectedDay });
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.getData();
        });
    };
    MoodJournalPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    MoodJournalPage.prototype.onEventSelected = function (event) {
        var start = __WEBPACK_IMPORTED_MODULE_2_moment__(event.startTime).format('LLLL');
        var end = __WEBPACK_IMPORTED_MODULE_2_moment__(event.endTime).format('LLLL');
        var alert = this.alertCtrl.create({
            title: '' + event.title,
            subTitle: 'From: ' + start + '<br>To: ' + end,
            buttons: ['OK']
        });
        alert.present();
    };
    MoodJournalPage.prototype.onTimeSelected = function (ev) {
        this.selectedDay = ev.selectedTime;
    };
    return MoodJournalPage;
}());
MoodJournalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mood-journal',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/mood-journal/mood-journal.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page39">\n    <p>would you like to write in your mood journal?</p>\n    <button ion-button block (click)="addEvent()" class="action-button" >\n     add entry\n    </button>\n    <p style="text-align:center">{{ viewTitle}}\n	</p>\n    <calendar [eventSource]="eventSource"\n      [calendarMode]="calendar.mode"\n      [currentDate]="calendar.currentDate"\n      (onEventSelected)="onEventSelected($event)"\n      (onTitleChanged)="onViewTitleChanged($event)"\n      (onTimeSelected)="onTimeSelected($event)"\n      step="30"\n      class="calendar">\n    </calendar>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/mood-journal/mood-journal.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
], MoodJournalPage);

//# sourceMappingURL=mood-journal.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelaxSpacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listen_listen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__motivational_quotes_motivational_quotes__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__positive_visualisation_positive_visualisation__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mentalhealthfeelslike_mentalhealthfeelslike__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RelaxSpacePage = (function () {
    function RelaxSpacePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RelaxSpacePage.prototype.goToListen = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__listen_listen__["a" /* ListenPage */]);
    };
    RelaxSpacePage.prototype.goToMotivationalQuotes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__motivational_quotes_motivational_quotes__["a" /* MotivationalQuotesPage */]);
    };
    RelaxSpacePage.prototype.goToPositiveVisualisation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__positive_visualisation_positive_visualisation__["a" /* PositiveVisualisationPage */]);
    };
    RelaxSpacePage.prototype.goToMentalhealthfeelslike = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__mentalhealthfeelslike_mentalhealthfeelslike__["a" /* MentalhealthfeelslikePage */]);
    };
    return RelaxSpacePage;
}());
RelaxSpacePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-relax-space',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/relax-space/relax-space.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page40">\n  <button id="relaxSpace-button9" class="action-button" ion-button color="light" block on-click="goToListen()">\n    listen\n  </button>\n  <button id="relaxSpace-button10" class="action-button" ion-button color="light" block on-click="goToMotivationalQuotes()">\n    motivational quotes\n  </button>\n  <button id="relaxSpace-button11" class="action-button" ion-button color="light" block on-click="goToPositiveVisualisation()">\n    positive visualisation\n  </button>\n  <button id="relaxSpace-button12" class="action-button" ion-button color="light" block on-click="goToMentalhealthfeelslike()">\n    #mentalhealthfeelslike\n  </button>\n</ion-content>\n\n'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/relax-space/relax-space.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], RelaxSpacePage);

//# sourceMappingURL=relax-space.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListenPage = (function () {
    function ListenPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ListenPage;
}());
ListenPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-listen',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/listen/listen.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page35">\n  <form id="listen-form12">\n    <ion-item class="video-title">\n      <ion-label>\n        deep sleep\n      </ion-label>\n    </ion-item>\n    <div class="video">\n      <iframe src="https://www.youtube.com/embed/2fvPad12Gb8?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="listen-form13">\n    <ion-item class="video-title">\n      <ion-label>\n        meditation\n      </ion-label>\n    </ion-item>\n    <div class="video">\n      <iframe src="https://www.youtube.com/embed/5PIBMLvcAzc?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="listen-form14">\n    <ion-item class="video-title">\n      <ion-label>\n        "om" chants\n      </ion-label>\n    </ion-item>\n    <div class="video">\n      <iframe src="https://www.youtube.com/embed/SBiwLibZqfw?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="listen-form15">\n    <ion-item class="video-title">\n      <ion-label>\n        ocean waves\n      </ion-label>\n    </ion-item>\n    <div class="video">\n      <iframe src="https://www.youtube.com/embed/5PyLgaqvYhA?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="listen-form15">\n    <ion-item class="video-title">\n      <ion-label>\n        rain\n      </ion-label>\n    </ion-item>\n    <div class="video">\n      <iframe src="https://www.youtube.com/embed/Mr9T-943BnE?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="listen-form18">\n    <ion-item class="video-title">\n      <ion-label>\n        relaxing river\n      </ion-label>\n    </ion-item>\n    <div class="video">\n      <iframe src="https://www.youtube.com/embed/LiiYMEWKVnY?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="listen-form60">\n    <ion-item class="video-title">\n      <ion-label>\n        sleep\n      </ion-label>\n    </ion-item>\n    <div class="video">\n      <iframe src="https://www.youtube.com/embed/xQ6xgDI7Whc?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="listen-form17">\n    <ion-item class="video-title">\n      <ion-label>\n        white noise\n      </ion-label>\n    </ion-item>\n    <div class="video">\n      <iframe src="https://www.youtube.com/embed/KD_mbn0uncc?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="listen-form19">\n    <ion-item class="video-title">\n      <ion-label>\n        zen\n      </ion-label>\n    </ion-item>\n    <div class="video">\n      <iframe src="https://www.youtube.com/embed/dE_XVl7fwBQ?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/listen/listen.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], ListenPage);

//# sourceMappingURL=listen.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotivationalQuotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MotivationalQuotesPage = (function () {
    /*constructor(public navCtrl: NavController) {
    }*/
    function MotivationalQuotesPage(theInAppBrowser) {
        this.theInAppBrowser = theInAppBrowser;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
    }
    MotivationalQuotesPage.prototype.openWithInAppBrowser = function (url) {
        var target = "_blank";
        this.theInAppBrowser.create(url, target, this.options);
    };
    return MotivationalQuotesPage;
}());
MotivationalQuotesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-motivational-quotes',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/motivational-quotes/motivational-quotes.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page29">\n<p>this page includes great quotes can be inspirational and motivational. you can use quotes to help guide your decisions in life, work and love. here are 50 of the best inspirational quotes to motivate you</p>\n       <a class="first-item" href="#" (click)="openWithInAppBrowser(\'https://www.entrepreneur.com/article/247213\')" id="hyperlink1">\n                click here for more motivational quotes\n            </a>\n  <ion-list id="inspirationalVideos-list5">\n    <ion-item class="video-item action-button">\n	nothing is impossible, the word itself says \'I’m possible\'! —audrey hepburn\n    </ion-item>\n    <ion-item class="video-item action-button">\n	i’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. —maya angelou\n    </ion-item>\n    <ion-item class="video-item action-button">\n	whether you think you can or you think you can’t, you’re right. —henry ford\n    </ion-item>\n    <ion-item class="video-item action-button">\n	perfection is not attainable, but if we chase perfection we can catch excellence. —vince lombardi\n    </ion-item>\n    <ion-item class="video-item action-button">\n	life is 10% what happens to me and 90% of how I react to it. —charles swindoll\n    </ion-item>\n    <ion-item class="video-item action-button">\n	if you look at what you have in life, you’ll always have more. if you look at what you don’t have in life, you’ll never have enough. —oprah winfrey\n    </ion-item>\n    <ion-item class="video-item action-button">\n	remember no one can make you feel inferior without your consent. —eleanor roosevelt\n    </ion-item>\n    <ion-item class="video-item action-button">\n	i can’t change the direction of the wind, but i can adjust my sails to always reach my destination. —jimmy dean\n    </ion-item>\n	<ion-item class="video-item action-button">\n	believe you can and you’re halfway there. —theodore roosevelt\n	</ion-item>\n	<ion-item class="video-item action-button">\n	to handle yourself, use your head; to handle others, use your heart. —eleanor roosevelt\n	</ion-item>\n	<ion-item class="video-item action-button">\n	too many of us are not living our dreams because we are living our fears. —les brown\n	</ion-item>\n	<ion-item class="video-item action-button">\n	do or do not. there is no try. —yoda\n	</ion-item>\n	<ion-item class="video-item action-button">\n	whatever the mind of man can conceive and believe, it can achieve. —napoleon hill\n	</ion-item>\n	<ion-item class="video-item action-button">\n	twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. explore, dream, discover. —mark twain\n	</ion-item>\n	<ion-item class="video-item action-button">\n	i’ve missed more than 9000 shots in my career. i’ve lost almost 300 games. 26 times i’ve been trusted to take the game winning shot and missed. i’ve failed over and over and over again in my life. and that is why i succeed. —michael jordan\n	</ion-item>\n	<ion-item class="video-item action-button">\n	strive not to be a success, but rather to be of value. —albert einstein\n	</ion-item>\n	<ion-item class="video-item action-button">\n	i am not a product of my circumstances. i am a product of my decisions. —stephen covey\n	</ion-item>\n	<ion-item class="video-item action-button">\n	when everything seems to be going against you, remember that the airplane takes off against the wind, not with it. —henry ford\n	</ion-item>\n	<ion-item class="video-item action-button">\n	the most common way people give up their power is by thinking they don’t have any. —alice walker\n	</ion-item>\n	<ion-item class="video-item action-button">\n	the most difficult thing is the decision to act, the rest is merely tenacity. —amelia earhart\n	</ion-item>\n	<ion-item class="video-item action-button">\n	it is during our darkest moments that we must focus to see the light. —aistotle onassis\n	</ion-item>\n	<ion-item class="video-item action-button">\n	don’t judge each day by the harvest you reap but by the seeds that you plant. —robert louis stevenson\n	</ion-item>\n	<ion-item class="video-item action-button">\n	the only way to do great work is to love what you do. —steve jobs\n	</ion-item>\n	<ion-item class="video-item action-button">\n	change your thoughts and you change your world. —norman vincent peale\n	</ion-item>\n	<ion-item class="video-item action-button">\n	the question isn’t who is going to let me; it’s who is going to stop me. —ayn rand\n	</ion-item>\n	<ion-item class="video-item action-button">\n	if you hear a voice within you say "you cannot paint," then by all means paint and that voice will be silenced. —vincent van gogh\n	</ion-item>\n	<ion-item class="video-item action-button">\n	build your own dreams, or someone else will hire you to build theirs. —farrah gray\n	</ion-item>\n	<ion-item class="video-item action-button">\n	remember that not getting what you want is sometimes a wonderful stroke of luck. —dalai lama\n	</ion-item>\n	<ion-item class="video-item action-button">\n	you can’t use up creativity. The more you use, the more you have. —maya angelou\n	</ion-item>\n	<ion-item class="video-item action-button">\n	i have learned over the years that when one’s mind is made up, this diminishes fear. —rosa parks\n	</ion-item>\n  </ion-list>\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/motivational-quotes/motivational-quotes.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], MotivationalQuotesPage);

//# sourceMappingURL=motivational-quotes.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositiveVisualisationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PositiveVisualisationPage = (function () {
    function PositiveVisualisationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return PositiveVisualisationPage;
}());
PositiveVisualisationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-positive-visualisation',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/positive-visualisation/positive-visualisation.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page30">\n\n<p>swipe through the pictures for some positive visualisation </p>\n<div>\n  <ion-slides>\n    <ion-slide>\n      <img src="assets/img/pf0gEqqpRE2fqOXDJKP4_goodday.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/33jjfqITf6YucMJDu4Ij_heart.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/uNVu94E1Rei4fYTxYYNg_inspiration.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/Ou2GHO8LTQSHKUR59ccn_cat.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/AXgEoQdmQ3fpatcmkOwN_Sunset.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/sqfU8lqgTEeDzcBTQiZc_Sitting.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/m3DTzzUQQUi0pMWNoGMb_Yoga.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/acT1tYzjS1u9HgJ3Xryu_happiness.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n    </ion-slide>\n  </ion-slides>\n</div>\n\n<p>you can use <a href="https://www.pinterest.co.uk/">pinterest</a> to start your own positive inspiration board</p>\n\n<!--\n  <img src="assets/img/pf0gEqqpRE2fqOXDJKP4_goodday.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="positiveVisualisation-spacer48"></div>\n  <img src="assets/img/33jjfqITf6YucMJDu4Ij_heart.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="positiveVisualisation-spacer49"></div>\n  <img src="assets/img/uNVu94E1Rei4fYTxYYNg_inspiration.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="positiveVisualisation-spacer50"></div>\n  <img src="assets/img/Ou2GHO8LTQSHKUR59ccn_cat.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="positiveVisualisation-spacer51"></div>\n  <img src="assets/img/AXgEoQdmQ3fpatcmkOwN_Sunset.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="positiveVisualisation-spacer52"></div>\n  <img src="assets/img/sqfU8lqgTEeDzcBTQiZc_Sitting.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="positiveVisualisation-spacer53"></div>\n  <img src="assets/img/m3DTzzUQQUi0pMWNoGMb_Yoga.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="positiveVisualisation-spacer54"></div>\n  <img src="assets/img/acT1tYzjS1u9HgJ3Xryu_happiness.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="positiveVisualisation-spacer55"></div>\n  <img src="assets/img/EMwmA31lQ5C1xGwHsyBQ_neverstopdreaming.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="positiveVisualisation-spacer56"></div>\n\n-->\n\n</ion-content>\n'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/positive-visualisation/positive-visualisation.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], PositiveVisualisationPage);

//# sourceMappingURL=positive-visualisation.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MentalhealthfeelslikePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MentalhealthfeelslikePage = (function () {
    function MentalhealthfeelslikePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return MentalhealthfeelslikePage;
}());
MentalhealthfeelslikePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mentalhealthfeelslike',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/mentalhealthfeelslike/mentalhealthfeelslike.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page31">\n  <div id="Mentalhealthfeelslike-markdown9" class="show-list-numbers-and-dots">\n    <h4>\n       <p>difficulty putting it into words? Follow the #mentalhealthfeelslike campaign <a href="#" onclick="cordova.InAppBrowser.open(\'http://www.mentalhealthamerica.net/feelslike\', \'_blank\', \'location=yes\'); return false;" id="hyperlink1">here</a></p>\n    </h4>\n  </div>\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer6"></div>\n  <img src="assets/img/mFt60LzZStyx05dJsDH4_4.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer6"></div>\n  <img src="assets/img/NxLX5vUQacXXqSWykM9A_3.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer5"></div>\n  <img src="assets/img/2QyaDTPRPukRP4SCi7em_5.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer8"></div>\n  <img src="assets/img/KuqBwGN1TPSr6TYN4g4z_2.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer9"></div>\n  <img src="assets/img/DUWeB8dgTSOqwd8M51jX_7.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer11"></div>\n  <img src="assets/img/X9SMH5tnSKyg9TbwQtQQ_1.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer10"></div>\n  <img src="assets/img/BFlDFbRBe0B2pgOgZYfQ_6.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer12"></div>\n  <img src="assets/img/mah2hAB8SGiMwow1zOSF_9.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer13"></div>\n  <img src="assets/img/T8SicR6URjaLAr3gVk1g_10.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer14"></div>\n  <img src="assets/img/PENiy5RQQYqrjUVecZcD_11.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer15"></div>\n  <img src="assets/img/IKFo7sgSVG5jxrAI1das_14.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer16"></div>\n  <img src="assets/img/b5pxpdZfSqqqfHrf8S8t_12.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer17"></div>\n  <img src="assets/img/DhIGBJ8R0mgH93QlOldg_15.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer18"></div>\n  <img src="assets/img/kWyGS92WQumQvj8uqZsm_13.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer19"></div>\n  <img src="assets/img/sIJchlTTF2nlvceE45JS_16.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer20"></div>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/mentalhealthfeelslike/mentalhealthfeelslike.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], MentalhealthfeelslikePage);

//# sourceMappingURL=mentalhealthfeelslike.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(373);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_youtube_youtube__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_self_help_self_help__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_what_is_self_help_what_is_self_help__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_mindfulness_mindfulness__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_nhs_self_help_leaflets_nhs_self_help_leaflets__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_advice_services_advice_services__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_in_acrisis_in_acrisis__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_carer_support_carer_support__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_know_your_rights_know_your_rights__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_find_aservice_find_aservice__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_mood_journal_mood_journal__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_relax_space_relax_space__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_listen_listen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_inspirational_videos_inspirational_videos__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_positive_visualisation_positive_visualisation__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_mentalhealthfeelslike_mentalhealthfeelslike__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_abuse_abuse__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_alcohol_and_you_alcohol_and_you__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_anxiety_anxiety__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_bereavement_bereavement__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_controlling_anger_controlling_anger__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_depression_and_low_mood_depression_and_low_mood__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_domestic_violence_domestic_violence__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_eating_disorders_eating_disorders__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_food_for_thought_food_for_thought__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_hearing_voices_and_disturbing_beliefs_hearing_voices_and_disturbing_beliefs__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_health_anxiety_health_anxiety__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_obsessions_and_compulsions_obsessions_and_compulsions__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_panic_panic__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_post_traumatic_stress_post_traumatic_stress__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_postnatal_depression_postnatal_depression__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_self_harm_self_harm__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_social_anxiety_social_anxiety__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_sleeping_problems_sleeping_problems__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_stress_stress__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_motivational_quotes_motivational_quotes__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_status_bar__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_splash_screen__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_ionic2_calendar__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_sqlite__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_database_database__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_self_help_self_help__["a" /* SelfHelpPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_what_is_self_help_what_is_self_help__["a" /* WhatIsSelfHelpPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_mindfulness_mindfulness__["a" /* MindfulnessPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_nhs_self_help_leaflets_nhs_self_help_leaflets__["a" /* NhsSelfHelpLeafletsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_advice_services_advice_services__["a" /* AdviceServicesPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_in_acrisis_in_acrisis__["a" /* InACrisisPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_carer_support_carer_support__["a" /* CarerSupportPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_know_your_rights_know_your_rights__["a" /* KnowYourRightsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_find_aservice_find_aservice__["a" /* FindAServicePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_mood_journal_mood_journal__["a" /* MoodJournalPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_relax_space_relax_space__["a" /* RelaxSpacePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_listen_listen__["a" /* ListenPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_inspirational_videos_inspirational_videos__["a" /* InspirationalVideosPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_positive_visualisation_positive_visualisation__["a" /* PositiveVisualisationPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_mentalhealthfeelslike_mentalhealthfeelslike__["a" /* MentalhealthfeelslikePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_abuse_abuse__["a" /* AbusePage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_alcohol_and_you_alcohol_and_you__["a" /* AlcoholAndYouPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_anxiety_anxiety__["a" /* AnxietyPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_bereavement_bereavement__["a" /* BereavementPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_controlling_anger_controlling_anger__["a" /* ControllingAngerPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_depression_and_low_mood_depression_and_low_mood__["a" /* DepressionAndLowMoodPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_domestic_violence_domestic_violence__["a" /* DomesticViolencePage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_eating_disorders_eating_disorders__["a" /* EatingDisordersPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_food_for_thought_food_for_thought__["a" /* FoodForThoughtPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_hearing_voices_and_disturbing_beliefs_hearing_voices_and_disturbing_beliefs__["a" /* HearingVoicesAndDisturbingBeliefsPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_health_anxiety_health_anxiety__["a" /* HealthAnxietyPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_obsessions_and_compulsions_obsessions_and_compulsions__["a" /* ObsessionsAndCompulsionsPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_panic_panic__["a" /* PanicPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_post_traumatic_stress_post_traumatic_stress__["a" /* PostTraumaticStressPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_postnatal_depression_postnatal_depression__["a" /* PostnatalDepressionPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_self_harm_self_harm__["a" /* SelfHarmPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_social_anxiety_social_anxiety__["a" /* SocialAnxietyPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_sleeping_problems_sleeping_problems__["a" /* SleepingProblemsPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_stress_stress__["a" /* StressPage */],
            __WEBPACK_IMPORTED_MODULE_7__pipes_youtube_youtube__["a" /* YoutubePipe */],
            __WEBPACK_IMPORTED_MODULE_42__pages_motivational_quotes_motivational_quotes__["a" /* MotivationalQuotesPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_45_ionic2_calendar__["a" /* NgCalendarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/mood-journal-entry/mood-journal-entry.module#MoodJournalEntryModule', name: 'MoodJournalEntry', segment: 'mood-journal-entry', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_self_help_self_help__["a" /* SelfHelpPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_what_is_self_help_what_is_self_help__["a" /* WhatIsSelfHelpPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_mindfulness_mindfulness__["a" /* MindfulnessPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_nhs_self_help_leaflets_nhs_self_help_leaflets__["a" /* NhsSelfHelpLeafletsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_advice_services_advice_services__["a" /* AdviceServicesPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_in_acrisis_in_acrisis__["a" /* InACrisisPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_carer_support_carer_support__["a" /* CarerSupportPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_know_your_rights_know_your_rights__["a" /* KnowYourRightsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_find_aservice_find_aservice__["a" /* FindAServicePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_mood_journal_mood_journal__["a" /* MoodJournalPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_relax_space_relax_space__["a" /* RelaxSpacePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_listen_listen__["a" /* ListenPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_inspirational_videos_inspirational_videos__["a" /* InspirationalVideosPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_positive_visualisation_positive_visualisation__["a" /* PositiveVisualisationPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_mentalhealthfeelslike_mentalhealthfeelslike__["a" /* MentalhealthfeelslikePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_abuse_abuse__["a" /* AbusePage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_alcohol_and_you_alcohol_and_you__["a" /* AlcoholAndYouPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_anxiety_anxiety__["a" /* AnxietyPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_bereavement_bereavement__["a" /* BereavementPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_controlling_anger_controlling_anger__["a" /* ControllingAngerPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_depression_and_low_mood_depression_and_low_mood__["a" /* DepressionAndLowMoodPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_domestic_violence_domestic_violence__["a" /* DomesticViolencePage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_eating_disorders_eating_disorders__["a" /* EatingDisordersPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_food_for_thought_food_for_thought__["a" /* FoodForThoughtPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_hearing_voices_and_disturbing_beliefs_hearing_voices_and_disturbing_beliefs__["a" /* HearingVoicesAndDisturbingBeliefsPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_health_anxiety_health_anxiety__["a" /* HealthAnxietyPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_obsessions_and_compulsions_obsessions_and_compulsions__["a" /* ObsessionsAndCompulsionsPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_panic_panic__["a" /* PanicPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_post_traumatic_stress_post_traumatic_stress__["a" /* PostTraumaticStressPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_postnatal_depression_postnatal_depression__["a" /* PostnatalDepressionPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_self_harm_self_harm__["a" /* SelfHarmPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_social_anxiety_social_anxiety__["a" /* SocialAnxietyPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_sleeping_problems_sleeping_problems__["a" /* SleepingProblemsPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_stress_stress__["a" /* StressPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_motivational_quotes_motivational_quotes__["a" /* MotivationalQuotesPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_43__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_44__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_46__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_47__providers_database_database__["a" /* DatabaseProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 184,
	"./af.js": 184,
	"./ar": 185,
	"./ar-dz": 186,
	"./ar-dz.js": 186,
	"./ar-kw": 187,
	"./ar-kw.js": 187,
	"./ar-ly": 188,
	"./ar-ly.js": 188,
	"./ar-ma": 189,
	"./ar-ma.js": 189,
	"./ar-sa": 190,
	"./ar-sa.js": 190,
	"./ar-tn": 191,
	"./ar-tn.js": 191,
	"./ar.js": 185,
	"./az": 192,
	"./az.js": 192,
	"./be": 193,
	"./be.js": 193,
	"./bg": 194,
	"./bg.js": 194,
	"./bm": 195,
	"./bm.js": 195,
	"./bn": 196,
	"./bn.js": 196,
	"./bo": 197,
	"./bo.js": 197,
	"./br": 198,
	"./br.js": 198,
	"./bs": 199,
	"./bs.js": 199,
	"./ca": 200,
	"./ca.js": 200,
	"./cs": 201,
	"./cs.js": 201,
	"./cv": 202,
	"./cv.js": 202,
	"./cy": 203,
	"./cy.js": 203,
	"./da": 204,
	"./da.js": 204,
	"./de": 205,
	"./de-at": 206,
	"./de-at.js": 206,
	"./de-ch": 207,
	"./de-ch.js": 207,
	"./de.js": 205,
	"./dv": 208,
	"./dv.js": 208,
	"./el": 209,
	"./el.js": 209,
	"./en-au": 210,
	"./en-au.js": 210,
	"./en-ca": 211,
	"./en-ca.js": 211,
	"./en-gb": 212,
	"./en-gb.js": 212,
	"./en-ie": 213,
	"./en-ie.js": 213,
	"./en-nz": 214,
	"./en-nz.js": 214,
	"./eo": 215,
	"./eo.js": 215,
	"./es": 216,
	"./es-do": 217,
	"./es-do.js": 217,
	"./es-us": 218,
	"./es-us.js": 218,
	"./es.js": 216,
	"./et": 219,
	"./et.js": 219,
	"./eu": 220,
	"./eu.js": 220,
	"./fa": 221,
	"./fa.js": 221,
	"./fi": 222,
	"./fi.js": 222,
	"./fo": 223,
	"./fo.js": 223,
	"./fr": 224,
	"./fr-ca": 225,
	"./fr-ca.js": 225,
	"./fr-ch": 226,
	"./fr-ch.js": 226,
	"./fr.js": 224,
	"./fy": 227,
	"./fy.js": 227,
	"./gd": 228,
	"./gd.js": 228,
	"./gl": 229,
	"./gl.js": 229,
	"./gom-latn": 230,
	"./gom-latn.js": 230,
	"./gu": 231,
	"./gu.js": 231,
	"./he": 232,
	"./he.js": 232,
	"./hi": 233,
	"./hi.js": 233,
	"./hr": 234,
	"./hr.js": 234,
	"./hu": 235,
	"./hu.js": 235,
	"./hy-am": 236,
	"./hy-am.js": 236,
	"./id": 237,
	"./id.js": 237,
	"./is": 238,
	"./is.js": 238,
	"./it": 239,
	"./it.js": 239,
	"./ja": 240,
	"./ja.js": 240,
	"./jv": 241,
	"./jv.js": 241,
	"./ka": 242,
	"./ka.js": 242,
	"./kk": 243,
	"./kk.js": 243,
	"./km": 244,
	"./km.js": 244,
	"./kn": 245,
	"./kn.js": 245,
	"./ko": 246,
	"./ko.js": 246,
	"./ky": 247,
	"./ky.js": 247,
	"./lb": 248,
	"./lb.js": 248,
	"./lo": 249,
	"./lo.js": 249,
	"./lt": 250,
	"./lt.js": 250,
	"./lv": 251,
	"./lv.js": 251,
	"./me": 252,
	"./me.js": 252,
	"./mi": 253,
	"./mi.js": 253,
	"./mk": 254,
	"./mk.js": 254,
	"./ml": 255,
	"./ml.js": 255,
	"./mr": 256,
	"./mr.js": 256,
	"./ms": 257,
	"./ms-my": 258,
	"./ms-my.js": 258,
	"./ms.js": 257,
	"./my": 259,
	"./my.js": 259,
	"./nb": 260,
	"./nb.js": 260,
	"./ne": 261,
	"./ne.js": 261,
	"./nl": 262,
	"./nl-be": 263,
	"./nl-be.js": 263,
	"./nl.js": 262,
	"./nn": 264,
	"./nn.js": 264,
	"./pa-in": 265,
	"./pa-in.js": 265,
	"./pl": 266,
	"./pl.js": 266,
	"./pt": 267,
	"./pt-br": 268,
	"./pt-br.js": 268,
	"./pt.js": 267,
	"./ro": 269,
	"./ro.js": 269,
	"./ru": 270,
	"./ru.js": 270,
	"./sd": 271,
	"./sd.js": 271,
	"./se": 272,
	"./se.js": 272,
	"./si": 273,
	"./si.js": 273,
	"./sk": 274,
	"./sk.js": 274,
	"./sl": 275,
	"./sl.js": 275,
	"./sq": 276,
	"./sq.js": 276,
	"./sr": 277,
	"./sr-cyrl": 278,
	"./sr-cyrl.js": 278,
	"./sr.js": 277,
	"./ss": 279,
	"./ss.js": 279,
	"./sv": 280,
	"./sv.js": 280,
	"./sw": 281,
	"./sw.js": 281,
	"./ta": 282,
	"./ta.js": 282,
	"./te": 283,
	"./te.js": 283,
	"./tet": 284,
	"./tet.js": 284,
	"./th": 285,
	"./th.js": 285,
	"./tl-ph": 286,
	"./tl-ph.js": 286,
	"./tlh": 287,
	"./tlh.js": 287,
	"./tr": 288,
	"./tr.js": 288,
	"./tzl": 289,
	"./tzl.js": 289,
	"./tzm": 290,
	"./tzm-latn": 291,
	"./tzm-latn.js": 291,
	"./tzm.js": 290,
	"./uk": 292,
	"./uk.js": 292,
	"./ur": 293,
	"./ur.js": 293,
	"./uz": 294,
	"./uz-latn": 295,
	"./uz-latn.js": 295,
	"./uz.js": 294,
	"./vi": 296,
	"./vi.js": 296,
	"./x-pseudo": 297,
	"./x-pseudo.js": 297,
	"./yo": 298,
	"./yo.js": 298,
	"./zh-cn": 299,
	"./zh-cn.js": 299,
	"./zh-hk": 300,
	"./zh-hk.js": 300,
	"./zh-tw": 301,
	"./zh-tw.js": 301
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 405;

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_menu_menu__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_menu_menu__["a" /* MenuPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/app/app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(22);
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
 * Generated class for the YoutubePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var YoutubePipe = (function () {
    /**
     * Takes a value and makes it lowercase.
     */
    function YoutubePipe(dom) {
        this.dom = dom;
    }
    YoutubePipe.prototype.transform = function (value) {
        console.log(this.dom.bypassSecurityTrustResourceUrl("http://www.youtube.com/embed/" + value));
        return this.dom.bypassSecurityTrustResourceUrl("http://www.youtube.com/embed/" + value);
    };
    return YoutubePipe;
}());
YoutubePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'youtube',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
], YoutubePipe);

//# sourceMappingURL=youtube.js.map

/***/ }),

/***/ 431:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbusePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AbusePage = (function () {
    function AbusePage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.channelId = 'UCsT0YIqwnpJCM-mx7-gSA4Q';
        this.maxResults = '10';
        this.googleToken = 'AIzaSyDlv0u0m3vplNVUrxIXGlKAGrN3lIAY8b8';
        this.search = 'abuse';
        this.posts = [];
        var url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=' + this.channelId + '&q=' + this.search + '&type=video&order=date&maxResults=' + this.maxResults + '&key=' + this.googleToken;
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = _this.posts.concat(data.items);
            console.log(_this.posts);
        });
    }
    return AbusePage;
}());
AbusePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-abuse',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/abuse/abuse.html"*/'<ion-header>\n  <ion-navbar>\n  <ion-title>\n  abuse </ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor = "let item of posts">\n    <ion-card-title>\n      {{item.snippet.title}}\n    </ion-card-title>\n    <ion-card-content>\n      <iframe width="290" height="163" [src]="item.id.videoId | youtube" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/abuse/abuse.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], AbusePage);

//# sourceMappingURL=abuse.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlcoholAndYouPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlcoholAndYouPage = (function () {
    function AlcoholAndYouPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AlcoholAndYouPage;
}());
AlcoholAndYouPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-alcohol-and-you',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/alcohol-and-you/alcohol-and-you.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page33">\n  <form id="alcoholAndYou-form23">\n	<ion-item id="alcoholAndYou-textarea14" class="video-title">\n	<ion-label>\n		changing the world\'s relationship with alcohol\n	</ion-label>\n	</ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="alcoholAndYou-video14">\n      <iframe src="https://www.youtube.com/embed/DJSLZGJaQdc?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n  \n  <form id="alcoholAndYou-form24">\n    <ion-item id="alcoholAndYou-textarea16" class="video-title">\n      <ion-label>\n        drinking and how it changed my life\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="alcoholAndYou-video16">\n      <iframe src="https://www.youtube.com/embed/LqtZjpI1oVQ?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="alcoholAndYou-form57">\n    <ion-item id="alcoholAndYou-textarea49" class="video-title">\n      <ion-label>\n        does safe alcohol use exist?\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="alcoholAndYou-video49">\n      <iframe src="https://www.youtube.com/embed/uyHb4XsqABQ&t=30s?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/alcohol-and-you/alcohol-and-you.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], AlcoholAndYouPage);

//# sourceMappingURL=alcohol-and-you.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnxietyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnxietyPage = (function () {
    function AnxietyPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AnxietyPage;
}());
AnxietyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-anxiety',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/anxiety/anxiety.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page34">\n  <form id="anxiety-form25">\n    <ion-item id="anxiety-textarea17" class="video-title">\n      <ion-label>\n        anxiety: a cancer of the mind\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="anxiety-video17">\n      <iframe src="https://www.youtube.com/embed/85QY_d-8J2M?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="anxiety-form26">\n    <ion-item id="anxiety-textarea18" class="video-title">\n      <ion-label>\n        be the warrior not the warrior\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="anxiety-video18">\n      <iframe src="https://www.youtube.com/embed/-FyVetL1MEw?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/anxiety/anxiety.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], AnxietyPage);

//# sourceMappingURL=anxiety.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BereavementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BereavementPage = (function () {
    function BereavementPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return BereavementPage;
}());
BereavementPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bereavement',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/bereavement/bereavement.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page28">\n  <form id="bereavement-form27">\n    <ion-item id="bereavement-textarea19" class="video-title">\n      <ion-label>\n        against grieving in silence\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="bereavement-video19">\n      <iframe src="https://www.youtube.com/embed/6zIFGl5tPQQ?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="bereavement-form28">\n    <ion-item id="bereavement-textarea20" class="video-title">\n      <ion-label>\n        good grief! what i learned from loss\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="bereavement-video20">\n      <iframe src="https://www.youtube.com/embed/PBzEwf1k59Y?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/bereavement/bereavement.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], BereavementPage);

//# sourceMappingURL=bereavement.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControllingAngerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ControllingAngerPage = (function () {
    function ControllingAngerPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ControllingAngerPage;
}());
ControllingAngerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-controlling-anger',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/controlling-anger/controlling-anger.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <form id="controllingAnger-form29">\n    <ion-item id="controllingAnger-textarea21" class="video-title">\n      <ion-label>\n        anger, compassion and what it means to be strong\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="controllingAnger-video21">\n      <iframe src="https://www.youtube.com/embed/QG4Z185MBJE?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="controllingAnger-form30">\n    <ion-item id="controllingAnger-textarea22" class="video-title">\n      <ion-label>\n        put your anger to constructive use\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="controllingAnger-video22">\n      <iframe src="https://www.youtube.com/embed/hZdMQa8FW_E?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/controlling-anger/controlling-anger.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], ControllingAngerPage);

//# sourceMappingURL=controlling-anger.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepressionAndLowMoodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DepressionAndLowMoodPage = (function () {
    function DepressionAndLowMoodPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return DepressionAndLowMoodPage;
}());
DepressionAndLowMoodPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-depression-and-low-mood',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/depression-and-low-mood/depression-and-low-mood.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page23">\n  <form id="depressionAndLowMood-form31">\n    <ion-item id="depressionAndLowMood-textarea23" class="video-title">\n      <ion-label>\n        how to get stuff done when you are depressed\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="depressionAndLowMood-video23">\n      <iframe src="https://www.youtube.com/embed/njESlZa2b10?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="depressionAndLowMood-form32">\n    <ion-item id="depressionAndLowMood-textarea24" class="video-title">\n      <ion-label>\n        the mindful way through depression\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="depressionAndLowMood-video24">\n      <iframe src="https://www.youtube.com/embed/1A4w3W94ygA?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/depression-and-low-mood/depression-and-low-mood.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], DepressionAndLowMoodPage);

//# sourceMappingURL=depression-and-low-mood.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomesticViolencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DomesticViolencePage = (function () {
    function DomesticViolencePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return DomesticViolencePage;
}());
DomesticViolencePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-domestic-violence',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/domestic-violence/domestic-violence.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page24">\n  <form id="domesticViolence-form33">\n    <ion-item id="domesticViolence-textarea25" class="video-title">\n    	<ion-label>\n		why domestic violence victims don\'t leave\n		</ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="domesticViolence-video25">\n      <iframe src="https://www.youtube.com/embed/V1yW5IsnSjo?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="domesticViolence-form34">\n    <ion-item id="domesticViolence-textarea26" class="video-title">\n      <ion-label>\n        unmasking the abuser\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="domesticViolence-video26">\n      <iframe src="https://www.youtube.com/embed/ythOTBEkUZM?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/domestic-violence/domestic-violence.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], DomesticViolencePage);

//# sourceMappingURL=domestic-violence.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EatingDisordersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EatingDisordersPage = (function () {
    function EatingDisordersPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return EatingDisordersPage;
}());
EatingDisordersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-eating-disorders',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/eating-disorders/eating-disorders.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page25">\n  <form id="eatingDisorders-form35">\n    <ion-item id="eatingDisorders-textarea27" class="video-title">\n    	<ion-label>\n		after anorexia: life\'s too short to weigh your cornflakes\n		</ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="eatingDisorders-video27">\n      <iframe src="https://www.youtube.com/embed/gZpcTVqpaPw?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="eatingDisorders-form36">\n    <ion-item id="eatingDisorders-textarea28" class="video-title">\n      <ion-label>\n        eating disorders have no face\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="eatingDisorders-video28">\n      <iframe src="https://www.youtube.com/embed/5rmQqT1YDAE?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/eating-disorders/eating-disorders.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], EatingDisordersPage);

//# sourceMappingURL=eating-disorders.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodForThoughtPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FoodForThoughtPage = (function () {
    function FoodForThoughtPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return FoodForThoughtPage;
}());
FoodForThoughtPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-food-for-thought',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/food-for-thought/food-for-thought.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page26">\n  <form id="foodForThought-form37">\n    <ion-item id="foodForThought-textarea29">\n      <ion-label>\n        food for thought: how your belly controls your brain\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="foodForThought-video29">\n      <iframe src="https://www.youtube.com/embed/awtmTJW9ic8?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="foodForThought-form38">\n    <ion-item id="foodForThought-textarea30">\n      <ion-label>\n        power foods for the brain\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="foodForThought-video30">\n      <iframe src="https://www.youtube.com/embed/v_ONFix_e4k?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/food-for-thought/food-for-thought.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], FoodForThoughtPage);

//# sourceMappingURL=food-for-thought.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HealthAnxietyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HealthAnxietyPage = (function () {
    function HealthAnxietyPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HealthAnxietyPage;
}());
HealthAnxietyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-health-anxiety',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/health-anxiety/health-anxiety.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page14">\n  <form id="healthAnxiety-form62">\n    <ion-item id="healthAnxiety-textarea52" class="video-title">\n      <ion-label>\n        overcoming health anxiety\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="healthAnxiety-video52">\n      <iframe src="https://www.youtube.com/embed/X4wg7n27Snw?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="healthAnxiety-form63">\n    <ion-item id="healthAnxiety-textarea53" class="video-title">\n    	<ion-label>\n		let\'s talk health anxiety\n		</ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="healthAnxiety-video53">\n      <iframe src="https://www.youtube.com/embed/QZIplhd0TBo?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/health-anxiety/health-anxiety.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HealthAnxietyPage);

//# sourceMappingURL=health-anxiety.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HearingVoicesAndDisturbingBeliefsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HearingVoicesAndDisturbingBeliefsPage = (function () {
    function HearingVoicesAndDisturbingBeliefsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HearingVoicesAndDisturbingBeliefsPage;
}());
HearingVoicesAndDisturbingBeliefsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-hearing-voices-and-disturbing-beliefs',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/hearing-voices-and-disturbing-beliefs/hearing-voices-and-disturbing-beliefs.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <form id="hearingVoicesAndDisturbingBeliefs-form39">\n    <ion-item id="hearingVoicesAndDisturbingBeliefs-textarea31" class="video-title">\n      <ion-label>\n        the voices in my head\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="hearingVoicesAndDisturbingBeliefs-video31">\n      <iframe src="https://www.youtube.com/embed/syjEN3peCJw?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="hearingVoicesAndDisturbingBeliefs-form40">\n    <ion-item id="hearingVoicesAndDisturbingBeliefs-textarea32" class="video-title">\n      <ion-label>\n        i am not a monster\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="hearingVoicesAndDisturbingBeliefs-video32">\n      <iframe src="https://www.youtube.com/embed/xbagFzcyNiM?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/hearing-voices-and-disturbing-beliefs/hearing-voices-and-disturbing-beliefs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HearingVoicesAndDisturbingBeliefsPage);

//# sourceMappingURL=hearing-voices-and-disturbing-beliefs.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObsessionsAndCompulsionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ObsessionsAndCompulsionsPage = (function () {
    function ObsessionsAndCompulsionsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ObsessionsAndCompulsionsPage;
}());
ObsessionsAndCompulsionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-obsessions-and-compulsions',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/obsessions-and-compulsions/obsessions-and-compulsions.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n  <form id="obsessionsAndCompulsions-form41">\n    <ion-item id="obsessionsAndCompulsions-textarea33" class="video-title">\n      <ion-label>\n        my hidden ocd exposed\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="obsessionsAndCompulsions-video33">\n      <iframe src="https://www.youtube.com/embed/A3f4Gf5Q_2w?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="obsessionsAndCompulsions-form42">\n    <ion-item id="obsessionsAndCompulsions-textarea34" class="video-title">\n      <ion-label>\n        living with #ocd\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="obsessionsAndCompulsions-video34">\n      <iframe src="https://www.youtube.com/embed/btO3kE2RrEY?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/obsessions-and-compulsions/obsessions-and-compulsions.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], ObsessionsAndCompulsionsPage);

//# sourceMappingURL=obsessions-and-compulsions.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PanicPage = (function () {
    function PanicPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return PanicPage;
}());
PanicPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-panic',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/panic/panic.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page9">\n  <form id="panic-form43">\n    <ion-item id="panic-textarea35" class="video-title">\n      <ion-label>\n        anxiety disorders and panic attacks\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="panic-video35">\n      <iframe src="https://www.youtube.com/embed/bl8_81JF3b8?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="panic-form44">\n    <ion-item id="panic-textarea36" class="video-title">\n    	<ion-label>\n		how to stay calm when you know you\'ll be stressed\n		</ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="panic-video36">\n      <iframe src="https://www.youtube.com/embed/8jPQjjsBbIc?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/panic/panic.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], PanicPage);

//# sourceMappingURL=panic.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostTraumaticStressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostTraumaticStressPage = (function () {
    function PostTraumaticStressPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return PostTraumaticStressPage;
}());
PostTraumaticStressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-post-traumatic-stress',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/post-traumatic-stress/post-traumatic-stress.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page10">\n  <form id="postTraumaticStress-form45">\n    <ion-item id="postTraumaticStress-textarea37" class="video-title">\n    	<ion-label>\n		uderstanding ptsd\'s effects on brain, body, and emotions\n		</ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="postTraumaticStress-video37">\n      <iframe src="https://www.youtube.com/embed/BEHDQeIRTgs?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="postTraumaticStress-form46">\n    <ion-item id="postTraumaticStress-textarea38" class="video-title">\n      <ion-label>\n        return from chaos: treating ptsd\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="postTraumaticStress-video38">\n      <iframe src="https://www.youtube.com/embed/ORs3-tRokGU?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/post-traumatic-stress/post-traumatic-stress.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], PostTraumaticStressPage);

//# sourceMappingURL=post-traumatic-stress.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostnatalDepressionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostnatalDepressionPage = (function () {
    function PostnatalDepressionPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return PostnatalDepressionPage;
}());
PostnatalDepressionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-postnatal-depression',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/postnatal-depression/postnatal-depression.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page11">\n  <form id="postnatalDepression-form47">\n    <ion-item id="postnatalDepression-textarea39" class="video-title">\n    <ion-label>\n	let\'s talk about postpartum depression\n	</ion-label>\n   	 	</ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="postnatalDepression-video39">\n      <iframe src="https://www.youtube.com/embed/6glBDRZUAM0?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="postnatalDepression-form48">\n    <ion-item id="postnatalDepression-textarea40" class="video-title">\n	    <ion-label>\n		what if it isn\'t \'the time of your life?\'\n		</ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="postnatalDepression-video40">\n      <iframe src="https://www.youtube.com/embed/ddns0LRIDhg?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/postnatal-depression/postnatal-depression.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], PostnatalDepressionPage);

//# sourceMappingURL=postnatal-depression.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelfHarmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelfHarmPage = (function () {
    function SelfHarmPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return SelfHarmPage;
}());
SelfHarmPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-self-harm',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/self-harm/self-harm.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page12">\n  <form id="selfHarm-form49">\n    <ion-item id="selfHarm-textarea41" class="video-title">\n      <ion-label>\n        the skeletons in my closet\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="selfHarm-video41">\n      <iframe src="https://www.youtube.com/embed/G17iMOw0ar8?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="selfHarm-form50">\n    <ion-item id="selfHarm-textarea42" class="video-title">\n      <ion-label>\n        self-harm, what is it about?\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="selfHarm-video42">\n      <iframe src="https://www.youtube.com/embed/HnQOTP30ve8?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/self-harm/self-harm.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], SelfHarmPage);

//# sourceMappingURL=self-harm.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialAnxietyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocialAnxietyPage = (function () {
    function SocialAnxietyPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return SocialAnxietyPage;
}());
SocialAnxietyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-social-anxiety',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/social-anxiety/social-anxiety.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page13">\n  <form id="socialAnxiety-form51">\n    <ion-item id="socialAnxiety-textarea43" class="video-title">\n      <ion-label>\n        "talk!"\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="socialAnxiety-video43">\n      <iframe src="https://www.youtube.com/embed/u50L9CMRgno?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="socialAnxiety-form52">\n    <ion-item id="socialAnxiety-textarea44" class="video-title">\n      <ion-label>\n        embracing awkwardness\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="socialAnxiety-video44">\n      <iframe src="https://www.youtube.com/embed/SmNqVdxKxOQ?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/social-anxiety/social-anxiety.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], SocialAnxietyPage);

//# sourceMappingURL=social-anxiety.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SleepingProblemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SleepingProblemsPage = (function () {
    function SleepingProblemsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return SleepingProblemsPage;
}());
SleepingProblemsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sleeping-problems',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/sleeping-problems/sleeping-problems.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page6">\n  <form id="sleepingProblems-form53">\n    <ion-item id="sleepingProblems-textarea45" class="video-title">\n      <ion-label>\n        sleep engineering: improve your life by manipulating your sleep\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="sleepingProblems-video45">\n      <iframe src="https://www.youtube.com/embed/9KaMufF0rAY?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="sleepingProblems-form54">\n    <ion-item id="sleepingProblems-textarea46" class="video-title">\n      <ion-label>\n        sleepy teens - a public health epidemic\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="sleepingProblems-video46">\n      <iframe src="https://www.youtube.com/embed/G0Zj_InJ4BQ?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/sleeping-problems/sleeping-problems.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], SleepingProblemsPage);

//# sourceMappingURL=sleeping-problems.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StressPage = (function () {
    function StressPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return StressPage;
}());
StressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-stress',template:/*ion-inline-start:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/stress/stress.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7">\n  <form id="stress-form55">\n    <ion-item id="stress-textarea47" class="video-title">\n      <ion-label> \n        how to make stress your friend\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="stress-video47">\n      <iframe src="https://www.youtube.com/embed/RcGyVTAoXEU?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="stress-form56">\n    <ion-item id="stress-textarea48" class="video-title">\n	<ion-label>\n    	how to stay calm when you know you\'ll be stressed\n	</ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="stress-video48">\n      <iframe src="https://www.youtube.com/embed/8jPQjjsBbIc?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/carolinesmith/Dropbox/GC02_2017_Team18/src/pages/stress/stress.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], StressPage);

//# sourceMappingURL=stress.js.map

/***/ })

},[354]);
//# sourceMappingURL=main.js.map