webpackJsonp([1],{

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InACrisisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__ = __webpack_require__(32);
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
        selector: 'page-in-acrisis',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/in-acrisis/in-acrisis.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page47">\n  <div id="inACrisis-markdown2" class="show-list-numbers-and-dots">\n     <p>\n       am i in a crisis?\n    </p>\n    <p>\n       a crisis can be very different from person to person. if you answer \'yes\' to any of the following questions, you may be in a crisis. \n    </p>\n      <UL>\n          <p>\n      <li> do you feel as if your mental health is close to breaking point?</li>\n      <li> are you having thoughts of suicide or self-harm?</li>\n      <li> does your behaviour feel out of control?</li> \n      <li> are you unable to control your alcohol or substance intake?</li>\n      <li> are family/friends more concerned for your safety than you are?</li>\n      <li> are you experiencing sensations around you that aren’t real (delusions, hallucinations, hearing voices)?</li>\n      </UL>\n    <p>\n      what should i do?\n    </p>\n    <p>\n      speak with someone now if you urgently need medical help or advice, call:\n    </p>\n     <p>\n      nhs emergency and urgent care service: <a href="tel:111" id="hyperlink1">111</a>\n    </p>\n    <p>\n      tyneside crisis number: <a href="tel:03031231146" id="hyperlink1">0303 123 1146</a>\n    </p>\n    <p>\n      samaritans: <a href="tel:116123" id="hyperlink1">116 123</a>\n    </p>\n    <p>\n      for urgent medical attention visit your local accident & emergency (a&e) or book an emergency gp appointment.\n    </p>\n     <p>\n      helping someone else?\n   <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.mind.org.uk/information-support/helping-someone-else\');" id="hyperlink1">\n                click here\n            </a>\n    </p>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/in-acrisis/in-acrisis.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], InACrisisPage);

//# sourceMappingURL=in-acrisis.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarerSupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__ = __webpack_require__(32);
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
        selector: 'page-carer-support',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/carer-support/carer-support.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page41">\n  <div padding id="carerSupport-markdown3" class="show-list-numbers-and-dots">\nyou are a carer if you provide (unpaid) support and care for someone who has an illness, disability, mental health problem or addiction. being a carer can be mentally and physically tiring.\nyou may also feel isolated or be struggling financially.\n      </div>\n\n	<div padding>\n	there is a growing carer support movement in the uk. you can get assistance with a range of carer issues:\n	</div>\n\n<div class="spacer" style="height:10px;" id="nhsSelfHelpLeaflets-spacer28"></div>\n\n  <ion-grid>\n    <ion-row>\n<ion-col col-6>\n<ion-thumbnail (click)="openWithInAppBrowser(\'https://www.carersuk.org/help-and-advice/financial-support\')" id="hyperlink1">\n      <img src="assets/img/Financialsupport.png" />\n    </ion-thumbnail>\n</ion-col>\n<ion-col col-6>\n<ion-thumbnail (click)="openWithInAppBrowser(\'https://www.carersuk.org/help-and-advice/practical-support\')" >\n<img src="assets/img/Practicalsupport.png" />\n</ion-thumbnail>\n</ion-col>\n</ion-row>\n</ion-grid>\n<ion-grid>\n  <ion-row>\n    <ion-col col-6>\n  <ion-thumbnail (click)="openWithInAppBrowser(\'https://www.carersuk.org/help-and-advice/work-and-career\')" >\n    <img src="assets/img/workandcareer.png" />\n  </ion-thumbnail>\n</ion-col>\n<ion-col col-6>\n<ion-thumbnail (click)="openWithInAppBrowser(\'https://www.carersuk.org/help-and-advice/technology-and-equipment\')" id="hyperlink1">\n    <img src="assets/img/technologyandequipment.png" />\n  </ion-thumbnail>\n</ion-col>\n</ion-row>\n</ion-grid>\n<ion-grid>\n  <ion-row>\n    <ion-col col-6>\n  <ion-thumbnail (click)="openWithInAppBrowser(\'https://www.carersuk.org/help-and-advice/your-relationships\')" >\n    <img src="assets/img/Yourrelationships.png" />\n  </ion-thumbnail>\n</ion-col>\n<ion-col col-6>\n<ion-thumbnail (click)="openWithInAppBrowser(\'https://www.carersuk.org/help-and-advice/get-support\')" id="hyperlink1">\n    <img src="assets/img/Getsupport.png" />\n  </ion-thumbnail>\n</ion-col>\n</ion-row>\n</ion-grid>\n\n<!--\n<div padding>\nmobile device features such as alarms can help you to keep track of tasks and remind you of key times during the day where you may need to talk to a friend, go to an appointment or take medicaiton.\n</div> -->\n\n<p>more information for carers can be found here:</p>\n	<div>\n    <ul>\n    <p>\n     <li> <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.nhs.uk/Conditions/social-care-and-support-guide/Pages/carers-direct-helpline.aspx\');">social care and support guide</a>\n    </p>\n\n    <p>\n      <li> <a class="item" href="#" (click)="openWithInAppBrowser(\'https://youngminds.org.uk/find-help/your-guide-to-support/guide-to-camhs\');">child and adolescent mental health services</a>\n    </p>\n    <p>\n      <li> <a class="item" href="#" (click)="openWithInAppBrowser(\'https://carers.org/article/alcohol-drugs-and-addiction\');">are you affected by someone else’s drinking or drug use? </a>\n    </p>\n  </ul>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/carer-support/carer-support.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], CarerSupportPage);

//# sourceMappingURL=carer-support.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KnowYourRightsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__ = __webpack_require__(32);
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
        selector: 'page-know-your-rights',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/know-your-rights/know-your-rights.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page37">\n  <div id="knowYourRights-markdown7" class="show-list-numbers-and-dots">\n<h1>if you or a loved one have been admitted to hospital you may want to know about the mental health act and the mental capacity act . . </h1>\n\n    <p>\n\n      the <b>\'mental health act\'</b> is a piece of legislation which informs people with mental health problems what their rights are regarding factors such as:\n    </p>\n    <UL>\n      <p>\n      <li> assessment and treatment in hospital\n      <li> treatment in the community\n      <li> safe and legal pathways into hospital\n    </UL>\n    <p>\n      <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.mind.org.uk/information-support/legal-rights/mental-health-act-1983/#.WfuhOBO0P5Y\');">\n                to learn more about your rights click here\n            </a>\n    </p>\n\n    <p>\n      the <b>\'mental capacity act\'</b> is....\n    </p>\n\n    <p>\n   <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.nhs.uk/Conditions/social-care-and-support-guide/Pages/mental-capacity.aspx\');">what is the mental capacity act?</a>\n    </p>\n'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/know-your-rights/know-your-rights.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], KnowYourRightsPage);

//# sourceMappingURL=know-your-rights.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindAServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__ = __webpack_require__(32);
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
        selector: 'page-find-aservice',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/find-aservice/find-aservice.html"*/'<ion-header style="color:black;">\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page38" >\n\n<ion-searchbar ></ion-searchbar>\n\n  <ion-list  no-lines id="findAService-list60">\n\n  <ion-item class="service-title">\n    bipolar disorder\n  </ion-item>\n    <ion-item class="service-information">\n        <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.bipolaruk.org/Pages/Category/support-groups\')" id="hyperlink1">\n                bipolar uk nt support group\n            </a>\n    </ion-item>\n    <ion-item class="service-title">\n    carers\n    </ion-item>\n  	<ion-item class="service-information">\n      <a class="item" href="#" (click)="openWithInAppBrowser(\'http://www.carersuk.org/\', \'_blank\', \'location=yes\')" id="hyperlink1">\n                carers uk\n            </a>\n    </ion-item>\n  	<ion-item class="service-information">\n       <a class="item" href="#" (click)="openWithInAppBrowser(\'http://carers-network.org.uk/\', \'_blank\', \'location=yes\')" id="hyperlink1">\n                carers network\n            </a>\n    </ion-item>\n    <ion-item class="service-title">\n    dementia and elderly care\n    </ion-item>\n  	<ion-item class="service-information">\n       <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.ageuk.org.uk/\', \'_blank\', \'location=yes\')" id="hyperlink1">\n                age uk\n            </a>\n    </ion-item>\n  	<ion-item class="service-information">\n      <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.alzheimers.org.uk/\', \'_blank\', \'location=yes\')" id="hyperlink1">\n                alzheimer’s society\n            </a>\n    </ion-item>\n    <ion-item class="service-title">\n    general\n    </ion-item>\n  	<ion-item class="service-information">\n       <a class="item" href="#" (click)="openWithInAppBrowser(\'http://www.changing-lives.org.uk/\', \'_blank\', \'location=yes\')" id="hyperlink1">\n                changing lives\n            </a>\n    </ion-item>\n  	<ion-item class="service-information">\n       <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.mentalhealth.org.uk/\', \'_blank\', \'location=yes\')" id="hyperlink1">\n                mental health foundation\n            </a>\n    </ion-item>\n  	<ion-item class="service-information">\n       <a class="item" href="#" (click)="openWithInAppBrowser(\'http://www.mentalhealthconcern.org/\', \'_blank\', \'location=yes\')" id="hyperlink1">\n                mental health concern\n            </a>\n    </ion-item>\n  	<ion-item class="service-information">\n       <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.time-to-change.org.uk/\', \'_blank\', \'location=yes\')" id="hyperlink1">\n                time to change\n            </a>\n    </ion-item>\n    <ion-item class="service-title">\n    get active\n    </ion-item>\n  	<ion-item class="service-information">\n        <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.walkingforhealth.org.uk/walkfinder/linskill-healthy-walks-community-interest-company\')" id="hyperlink1">\n                linskill centre healthy walks\n            </a>\n    </ion-item>\n    <ion-item class="service-information">\n    know your rights\n    </ion-item>\n  	<ion-item class="service-information">\n       <a class="item" href="#" (click)="openWithInAppBrowser(\'http://independentadvocacy.org/\', \'_blank\', \'location=yes\')" id="hyperlink1">\n                independent advocacy\n            </a>\n    </ion-item>\n  	<ion-item class="service-information">\n      <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.internationalsos.com/\', \'_blank\', \'location=yes\')" id="hyperlink1">\n                isos\n            </a>\n    </ion-item>\n    <ion-item class="service-title">\n    learn a skill\n    </ion-item>\n  	<ion-item class="service-information">\n       <a class="item" href="#" (click)="openWithInAppBrowser(\'http://www.key-enterprises.com/\', \'_blank\', \'location=yes\')" id="hyperlink1">\n                key enterprises\n            </a>\n    </ion-item>\n  	<ion-item class="service-information">\n      <a class="item" href="#" (click)="openWithInAppBrowser(\'http://northtynesideartstudio.org.uk/\', \'_blank\', \'location=yes\')" id="hyperlink1">\n                north tyneside art studio\n            </a>\n    </ion-item>\n    <ion-item class="service-title">\n    learning disability\n    </ion-item>\n  	<ion-item class="service-information">\n      <a class="item" href="#" (click)="openWithInAppBrowser(\'http://www.ldne.org.uk/\', \'_blank\', \'location=yes\')" id="hyperlink1">\n                ld: north east\n            </a>\n    </ion-item>\n  	<ion-item class="service-information">\n      <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.mencap.org.uk/?gclid=CjwKCAiA6K_QBRA8EiwASvtjZSGa1shvRZd2oqMyx93UKoPcNn34mEFx9CbP6pHcerpdWhEkbXTekRoCgGQQAvD_BwE\')" id="hyperlink1">\n                mencap north tyneside\n            </a>\n    </ion-item>\n  	<ion-item class="service-information">\n      <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.newprospects.org.uk/\')" id="hyperlink1">\n                new prospects\n            </a>\n    </ion-item>\n    <ion-item class="service-title">\n    meet people\n    </ion-item>\n  	<ion-item class="service-information">\n      <a class="item" href="#" (click)="openWithInAppBrowser(\'http://www.cameonorthtyneside.org.uk/\')" id="hyperlink1">\n                cameo (come and meet each other)\n            </a>\n    </ion-item>\n  	<ion-item class="service-information">\n        <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.northumbria.nhs.uk/our-services/mental-health-services/north-tyneside-talking-therapies\')" id="hyperlink1">\n                  northumberland tyne and wear nhs foundation trust\n              </a>\n      </ion-item>\n    <ion-item class="service-title">\n    national services\n    </ion-item>\n  	<ion-item class="service-information">\n      <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.ntw.nhs.uk/\')" id="hyperlink1">\n                northumberland tyne and wear nhs foundation trust\n            </a>\n    </ion-item>\n  	<ion-item class="service-information">\n      <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.northumbria.nhs.uk/\')" id="hyperlink1">\n                northumbria healthcare nhs foundation trust\n            </a>\n    </ion-item>\n  	<ion-item class="service-information">\n      <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.gov.uk/government/organisations/public-health-england\')" id="hyperlink1">\n                 public health england\n            </a>\n    </ion-item>\n  	<ion-item class="service-information">\n      <a class="item" href="#" (click)="openWithInAppBrowser(\'http://mhne.org.uk/\')" id="hyperlink1">\n                 mental health north east\n            </a>\n    </ion-item>\n  	<ion-item class="service-information">\n      <a class="item" href="#" (click)="openWithInAppBrowser(\'http://www.socialprescribing.org.uk/\')" id="hyperlink1">\n                 social prescribing\n            </a>\n    </ion-item>\n    <ion-item class="service-title">\n    substance misuse\n    </ion-item>\n  	<ion-item class="service-information">\n       <a class="item" href="#" (click)="openWithInAppBrowser(\'http://www.talktofrank.com/\')" id="hyperlink1">\n                 talk to frank\n            </a>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/find-aservice/find-aservice.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], FindAServicePage);

//# sourceMappingURL=find-aservice.js.map

/***/ }),

/***/ 129:
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
        selector: 'page-what-is-self-help',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/what-is-self-help/what-is-self-help.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page42">\n  <div id="whatIsSelfHelp-markdown5" class="show-list-numbers-and-dots">\n    <p>\n      self-help can be a useful first step in dealing with your problems if you’re unsure whether to seek further help.\n    </p>\n    <p>\n    change is difficult but even ingrained habits can be altered. it\'s never too late to change.\n    </p>\n\n    <ion-card class="helpcards">\n      <ion-card-header>\n        self help is\n      </ion-card-header>\n        <ion-card-content>\n          doing things yourself to try and solve problems. \'group\' self help is providing support and help for each other in an informal way\n    </ion-card-content>\n    </ion-card>\n\n    <ion-card class="helpcards">\n\n      <ion-card-header>\n        setting and achieving goals\n      </ion-card-header>\n\n      <ion-card-content>\n        set small, achievable goals and review them regularly. this will build motivation and self-control\n      </ion-card-content>\n\n    </ion-card>\n\n    \n\n        <ion-card class="helpcards">\n\n          <ion-card-header>\n            breaking habit formation\n          </ion-card-header>\n\n          <ion-card-content>\n            habit formation is the process by which new behaviors become automatic.through repetition, it is possible to form new habits\n            and break with old ones.\n          </ion-card-content>\n\n        </ion-card>\n\n\n    <ion-card class="helpcards" id= "helpcards">\n\n      <ion-card-header>\n        self help groups\n      </ion-card-header>\n\n      <ion-card-content>\n a self-help or mutual support group is any group which offers emotional support and practical help. see the link at the bottom to find a group near you.\n      </ion-card-content>\n\n    </ion-card>\n\n\n      <p>\n        look through the \'self help leafelts\' page of this app to find a leaflet for a condition affecting you.\n      </p>\n\n    <p>\n      if you don’t feel any effects after trying self-help therapy, you can also talk to your gp.\n    </p>\n    <p>\n\n      for more information or to join a peer support group visit\n      <a href="https://www.mind.org.uk/information-support/guides-to-support-and-services/peer-support-directory/#.Wh8Sc7SMhE4">mind.org</a>\n\n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/what-is-self-help/what-is-self-help.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], WhatIsSelfHelpPage);

//# sourceMappingURL=what-is-self-help.js.map

/***/ }),

/***/ 130:
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
        selector: 'page-mindfulness',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/mindfulness/mindfulness.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page43">\n  <div id="mindfulness-markdown6" class="show-list-numbers-and-dots">\n    <p>\n      paying more attention to the present moment - to your own thoughts and feelings, and to the world around you - you can improve your mental wellbeing. some people call this awareness ‘mindfulness’.\n    </p>\n\n      <nav class="slidemenu">\n\n      <input on-click="breatheAlert()" type="radio" name="slideItem" id="slide-item-1" class="slide-toggle" checked />\n        <label for="slide-item-1"><ion-icon class="icon"name="body"></ion-icon><span>Breathe Deeply</span></label>\n\n        <!--  <p class="icon"> ♬</p><span>Breathe Deeply</span></label> -->\n\n        <!-- Item 2 -->\n        <input on-click="exerciseAlert()" type="radio" name="slideItem" id="slide-item-2" class="slide-toggle"/>\n        <label for="slide-item-2"><ion-icon class="icon"name="ios-bicycle-outline"></ion-icon><span>Eat Well Exercise</span></label>\n\n        <!-- Item 3 -->\n        <input on-click="noticeAlert()" type="radio" name="slideItem" id="slide-item-3" class="slide-toggle"/>\n        <label for="slide-item-3"><ion-icon class="icon"name="ios-musical-notes-outline"></ion-icon><span>Notice Listen</span></label>\n\n        <!-- Item 4 -->\n        <input on-click="gratitudeAlert()" type="radio" name="slideItem" id="slide-item-4" class="slide-toggle"/>\n        <label for="slide-item-4"><ion-icon class="icon"name="ios-flower-outline"></ion-icon><span>Practice Gratitude</span></label>\n\n        <div class="clear"></div>\n\n        <!-- Bar -->\n        <div class="slider">\n          <div class="bar"></div>\n        </div>\n    </nav>\n\n\n\n    <p>\n      mindfulness can help us enjoy life more and understand ourselves better.\n      follow the 4 steps above to develop mindfulness in your own life and explore the relax space for mindfulness inspiration!\n    </p>\n\n\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/mindfulness/mindfulness.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MindfulnessPage);

//# sourceMappingURL=mindfulness.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NhsSelfHelpLeafletsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__ = __webpack_require__(32);
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
        selector: 'page-nhs-self-help-leaflets',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/nhs-self-help-leaflets/nhs-self-help-leaflets.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page44">\n  <h3 style="color:#464646;" id="nhsSelfHelpLeaflets-heading2">\n    nhs easy-read self help leaflets a-z\n  </h3>\n  <div id="nhsSelfHelpLeaflets-markdown8" class="show-list-numbers-and-dots">\n    <p>\n    <a class="item" href="#" (click)="openWithInAppBrowser(\'https://www.penninecare.nhs.uk/resources/self-help-leaflets/\')" id="hyperlink1">\n        click here for more information, audio clips and british sign language self help guides\n      </a>\n    </p>\n  </div>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n      <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Abuse.pdf\');" id="hyperlink1">\n        <img src="assets/img/Abuse.jpeg" />\n      </ion-thumbnail>\n    </ion-col>\n  <ion-col col-6>\n  <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Alcohol%20and%20You.pdf\');" id="hyperlink1">\n        <img src="assets/img/Alcoholandyou.jpeg" />\n      </ion-thumbnail>\n</ion-col>\n</ion-row>\n  </ion-grid>\n<div class="spacer" style="height:10px;" id="nhsSelfHelpLeaflets-spacer28"></div>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n      <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Anxiety.pdf\');" id="hyperlink1">\n        <img src="assets/img/Anxiety.jpeg" />\n      </ion-thumbnail>\n    </ion-col>\n  <ion-col col-6>\n  <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Bereavement.pdf\', \'location=yes\')" id="hyperlink1">\n        <img src="assets/img/Bereavement.jpeg" />\n      </ion-thumbnail>\n</ion-col>\n</ion-row>\n  </ion-grid>\n \n <div class="spacer" style="height:10px;" id="nhsSelfHelpLeaflets-spacer28"></div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n      <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Controlling%20Anger.pdf\')" id="hyperlink1">\n        <img src="assets/img/Controllinganger.jpeg" />\n      </ion-thumbnail>\n    </ion-col>\n  <ion-col col-6>\n <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Depression%20and%20Low%20Mood.pdf\')" id="hyperlink1">\n        <img src="assets/img/Depressionandlowmood.jpeg" />\n      </ion-thumbnail>\n</ion-col>\n</ion-row>\n  </ion-grid>\n \n <div class="spacer" style="height:10px;" id="nhsSelfHelpLeaflets-spacer28"></div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n       <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Domestic%20Violence.pdf\')" id="hyperlink1">\n        <img src="assets/img/Domesticviolence.jpeg" />\n      </ion-thumbnail>\n    </ion-col>\n  <ion-col col-6>\n   <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Eating%20Disorders.pdf\')" id="hyperlink1"><img src="assets/img/Eatingdisorders.jpeg" />\n      </ion-thumbnail>\n</ion-col>\n</ion-row>\n  </ion-grid>\n\n  <div class="spacer" style="height:10px;" id="nhsSelfHelpLeaflets-spacer28"></div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n     <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Food%20for%20thought.pdf\')" id="hyperlink1">\n        <img src="assets/img/foodforthought.jpeg" />\n      </ion-thumbnail>\n    </ion-col>\n  <ion-col col-6>\n  <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Health%20Anxiety.pdf\')" id="hyperlink1">\n        <img src="assets/img/Healthanxiety.jpeg" />\n      </ion-thumbnail>\n</ion-col>\n</ion-row>\n  </ion-grid>\n\n  <div class="spacer" style="height:10px;" id="nhsSelfHelpLeaflets-spacer28"></div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n       <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Hearing%20Voices.pdf\')" id="hyperlink1">\n        <img src="assets/img/Hearingvoices.jpeg" />\n      </ion-thumbnail>\n    </ion-col>\n  <ion-col col-6>\n <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Obsessions%20and%20Compulsions.pdf\')" id="hyperlink1">\n        <img src="assets/img/OCD.jpeg" />\n      </ion-thumbnail>\n</ion-col>\n</ion-row>\n  </ion-grid>\n\n  <div class="spacer" style="height:10px;" id="nhsSelfHelpLeaflets-spacer28"></div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n       <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Panic.pdf\')" id="hyperlink1">\n        <img src="assets/img/Panic.jpeg" />\n      </ion-thumbnail>\n    </ion-col>\n  <ion-col col-6>\n <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Post%20traumatic%20Stress.pdf\')" id="hyperlink1">\n        <img src="assets/img/PTSD.jpeg" />\n      </ion-thumbnail>\n</ion-col>\n</ion-row>\n  </ion-grid>\n\n  <div class="spacer" style="height:10px;" id="nhsSelfHelpLeaflets-spacer28"></div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n       <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Postnatal%20Depression.pdf\')" id="hyperlink1">\n        <img src="assets/img/Postnataldepression.jpeg" />\n      </ion-thumbnail>\n    </ion-col>\n  <ion-col col-6>\n <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Self%20Harm.pdf\')" id="hyperlink1">\n        <img src="assets/img/Selfharm.jpeg" />\n      </ion-thumbnail>\n</ion-col>\n</ion-row>\n  </ion-grid>\n\n  <div class="spacer" style="height:10px;" id="nhsSelfHelpLeaflets-spacer28"></div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n       <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Shyness%20and%20Social%20Anxiety.pdf\')" id="hyperlink1">\n        <img src="assets/img/Socialanxiety.jpeg" />\n      </ion-thumbnail>\n    </ion-col>\n  <ion-col col-6>\n <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Sleeping%20Problems.pdf\')" id="hyperlink1">\n        <img src="assets/img/Sleepingproblems.jpeg" />\n      </ion-thumbnail>\n</ion-col>\n</ion-row>\n  </ion-grid>\n\n   <div class="spacer" style="height:10px;" id="nhsSelfHelpLeaflets-spacer28"></div>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n       <ion-thumbnail (click)="openWithInAppBrowser(\'http://www.selfhelpguides.ntw.nhs.uk/penninecare/leaflets/selfhelp/Stress.pdf\')" id="hyperlink1">\n        <img src="assets/img/Stress.jpeg" />\n      </ion-thumbnail>\n    </ion-col>\n  <ion-col col-6>\n</ion-col>\n</ion-row>\n  </ion-grid>'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/nhs-self-help-leaflets/nhs-self-help-leaflets.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], NhsSelfHelpLeafletsPage);

//# sourceMappingURL=nhs-self-help-leaflets.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InspirationalVideosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abuse_abuse__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alcohol_and_you_alcohol_and_you__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__anxiety_anxiety__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bereavement_bereavement__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__controlling_anger_controlling_anger__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__depression_and_low_mood_depression_and_low_mood__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__domestic_violence_domestic_violence__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__eating_disorders_eating_disorders__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__food_for_thought_food_for_thought__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__health_anxiety_health_anxiety__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__hearing_voices_and_disturbing_beliefs_hearing_voices_and_disturbing_beliefs__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__obsessions_and_compulsions_obsessions_and_compulsions__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__panic_panic__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__post_traumatic_stress_post_traumatic_stress__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__postnatal_depression_postnatal_depression__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__self_harm_self_harm__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__social_anxiety_social_anxiety__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__sleeping_problems_sleeping_problems__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__stress_stress__ = __webpack_require__(74);
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
        selector: 'page-inspirational-videos',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/inspirational-videos/inspirational-videos.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page29">\n  <h3 id="inspirationalVideos-heading1">\n    a-z\n  </h3>\n  <ion-list id="inspirationalVideos-list5">\n    <ion-item on-click="goToAbuse()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      abuse\n    </ion-item>\n    <ion-item color="none" on-click="goToAlcoholAndYou()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      alcohol and you\n    </ion-item>\n    <ion-item color="none" on-click="goToAnxiety()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      anxiety\n    </ion-item>\n    <ion-item color="none" on-click="goToBereavement()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      bereavement\n    </ion-item>\n    <ion-item color="none" on-click="goToControllingAnger()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      controlling anger\n    </ion-item>\n    <ion-item color="none" on-click="goToDepressionAndLowMood()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      depression and low mood\n    </ion-item>\n    <ion-item color="none" on-click="goToDomesticViolence()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      domestic violence\n    </ion-item>\n    <ion-item color="none" on-click="goToEatingDisorders()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      eating disorders\n    </ion-item>\n    <ion-item color="none" on-click="goToFoodForThought()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      food for thought\n    </ion-item>\n    <ion-item color="none" on-click="goToHealthAnxiety()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      health anxiety\n    </ion-item>\n    <ion-item color="none" on-click="goToHearingVoicesAndDisturbingBeliefs()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      hearing voices and disturbing beliefs\n    </ion-item>\n    <ion-item color="none" on-click="goToObsessionsAndCompulsions()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      obsessions and compulsions\n    </ion-item>\n    <ion-item color="none" on-click="goToPanic()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      panic\n    </ion-item>\n    <ion-item color="none" on-click="goToPostTraumaticStress()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      post traumatic stress\n    </ion-item>\n    <ion-item color="none" on-click="goToPostnatalDepression()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      postnatal depression\n    </ion-item>\n    <ion-item color="none" on-click="goToSelfHarm()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      self harm\n    </ion-item>\n    <ion-item color="none" on-click="goToSleepingProblems()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      sleeping problems\n    </ion-item>\n    <ion-item color="none" on-click="goToSocialAnxiety()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      social anxiety\n    </ion-item>\n    <ion-item color="none" on-click="goToStress()" id="inspirationalVideos-list-item20" class="video-item action-button">\n      <ion-icon name="videocam" item-left></ion-icon>\n      stress\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/inspirational-videos/inspirational-videos.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], InspirationalVideosPage);

//# sourceMappingURL=inspirational-videos.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_sqlite__ = __webpack_require__(303);
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

/***/ 141:
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
webpackEmptyAsyncContext.id = 141;

/***/ }),

/***/ 184:
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
webpackAsyncContext.id = 184;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__advice_services_advice_services__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__in_acrisis_in_acrisis__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carer_support_carer_support__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__know_your_rights_know_your_rights__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__find_aservice_find_aservice__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__self_help_self_help__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__what_is_self_help_what_is_self_help__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mindfulness_mindfulness__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nhs_self_help_leaflets_nhs_self_help_leaflets__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__inspirational_videos_inspirational_videos__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__abuse_abuse__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__alcohol_and_you_alcohol_and_you__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__anxiety_anxiety__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__bereavement_bereavement__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__controlling_anger_controlling_anger__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__depression_and_low_mood_depression_and_low_mood__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__domestic_violence_domestic_violence__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__eating_disorders_eating_disorders__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__food_for_thought_food_for_thought__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__health_anxiety_health_anxiety__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__hearing_voices_and_disturbing_beliefs_hearing_voices_and_disturbing_beliefs__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__obsessions_and_compulsions_obsessions_and_compulsions__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__panic_panic__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__post_traumatic_stress_post_traumatic_stress__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__postnatal_depression_postnatal_depression__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__self_harm_self_harm__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__social_anxiety_social_anxiety__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__sleeping_problems_sleeping_problems__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__stress_stress__ = __webpack_require__(74);
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
        selector: 'page-menu',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/menu/menu.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page1">\n  <form id="menu-form1">\n    <div id="menu-markdown1" class="show-list-numbers-and-dots">\n      <p style="color:#464646;">\n        hey, how are you?\n      </p>\n	  <div></div>\n	  <p>\n		dawn is here to help ...\n	  </p>\n    </div>\n  </form>\n<ion-grid>\n  <ion-row>\n    <ion-col col-6>\n  <button ion-button  class="menu-button action-button" on-click="goToSelfHelp()">\n    self help\n  </button>\n</ion-col>\n<ion-col col-6>\n  <button ion-button class="menu-button action-button" on-click="goToAdviceServices()">\n    advice & services\n  </button>\n</ion-col>\n</ion-row>\n<ion-row>\n  <ion-col col-6>\n  <button ion-button class="menu-button action-button" on-click="goToMoodJournal()">\n    mood journal\n  </button>\n</ion-col>\n<ion-col col-6>\n  <button ion-button class="menu-button action-button"  on-click="goToRelaxSpace()">\n    relax space\n  </button>\n</ion-col>\n</ion-row>\n</ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/menu/menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdviceServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__in_acrisis_in_acrisis__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carer_support_carer_support__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__know_your_rights_know_your_rights__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__find_aservice_find_aservice__ = __webpack_require__(128);
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
        selector: 'page-advice-services',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/advice-services/advice-services.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page46">\n  <button id="adviceServices-button5" class="action-button" ion-button color="light" block on-click="goToInACrisis()">\n    in a crisis?\n  </button>\n  <button id="adviceServices-button6" class="action-button" ion-button color="light" block on-click="goToCarerSupport()">\n    carer support\n  </button>\n  <button id="adviceServices-button7" class="action-button" ion-button color="light" block on-click="goToKnowYourRights()">\n    know your rights\n  </button>\n  <button id="adviceServices-button8" class="action-button" ion-button color="light" block on-click="goToFindAService()">\n    find a service\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/advice-services/advice-services.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], AdviceServicesPage);

//# sourceMappingURL=advice-services.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelfHelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__what_is_self_help_what_is_self_help__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mindfulness_mindfulness__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nhs_self_help_leaflets_nhs_self_help_leaflets__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inspirational_videos_inspirational_videos__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__abuse_abuse__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__alcohol_and_you_alcohol_and_you__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__anxiety_anxiety__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bereavement_bereavement__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__controlling_anger_controlling_anger__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__depression_and_low_mood_depression_and_low_mood__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__domestic_violence_domestic_violence__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__eating_disorders_eating_disorders__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__food_for_thought_food_for_thought__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__health_anxiety_health_anxiety__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__hearing_voices_and_disturbing_beliefs_hearing_voices_and_disturbing_beliefs__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__obsessions_and_compulsions_obsessions_and_compulsions__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__panic_panic__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__post_traumatic_stress_post_traumatic_stress__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__postnatal_depression_postnatal_depression__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__self_harm_self_harm__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__social_anxiety_social_anxiety__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__sleeping_problems_sleeping_problems__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__stress_stress__ = __webpack_require__(74);
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
        selector: 'page-self-help',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/self-help/self-help.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n  <button id="selfHelp-button1" class="action-button" ion-button color="light" block on-click="goToWhatIsSelfHelp()">\n    what is self help?\n  </button>\n  <button id="selfHelp-button2" class="action-button" ion-button color="light" block on-click="goToMindfulness()">\n    mindfulness\n  </button>\n  <button id="selfHelp-button3" class="action-button" ion-button color="light" block on-click="goToNhsSelfHelpLeaflets()">\n    nhs self help leaflets\n  </button>\n  <button id="selfHelp-button4" class="action-button" ion-button color="light" block on-click="goToInspirationalVideos()">\n    inspirational videos\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/self-help/self-help.html"*/
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
        selector: 'page-mood-journal',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/mood-journal/mood-journal.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page39">\n    <p>would you like to write in your mood journal?</p>\n    <button ion-button block (click)="addEvent()" class="action-button" >\n     add entry\n    </button>\n    <p style="text-align:center">{{ viewTitle}}\n	</p>\n    <calendar [eventSource]="eventSource"\n      [calendarMode]="calendar.mode"\n      [currentDate]="calendar.currentDate"\n      (onEventSelected)="onEventSelected($event)"\n      (onTitleChanged)="onViewTitleChanged($event)"\n      (onTimeSelected)="onTimeSelected($event)"\n      step="30"\n      class="calendar">\n    </calendar>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/mood-journal/mood-journal.html"*/
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
        selector: 'page-relax-space',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/relax-space/relax-space.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page40">\n  <button id="relaxSpace-button9" class="action-button" ion-button color="light" block on-click="goToListen()">\n    listen\n  </button>\n  <button id="relaxSpace-button10" class="action-button" ion-button color="light" block on-click="goToMotivationalQuotes()">\n    motivational quotes\n  </button>\n  <button id="relaxSpace-button11" class="action-button" ion-button color="light" block on-click="goToPositiveVisualisation()">\n    positive visualisation\n  </button>\n  <button id="relaxSpace-button12" class="action-button" ion-button color="light" block on-click="goToMentalhealthfeelslike()">\n    #mentalhealthfeelslike\n  </button>\n</ion-content>\n\n'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/relax-space/relax-space.html"*/
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
        selector: 'page-listen',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/listen/listen.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page35">\n  <form id="listen-form12">\n    <ion-item class="video-title">\n      <ion-label>\n        deep sleep\n      </ion-label>\n    </ion-item>\n    <div class="video">\n      <iframe src="https://www.youtube.com/embed/2fvPad12Gb8?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="listen-form13">\n    <ion-item class="video-title">\n      <ion-label>\n        meditation\n      </ion-label>\n    </ion-item>\n    <div class="video">\n      <iframe src="https://www.youtube.com/embed/5PIBMLvcAzc?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="listen-form14">\n    <ion-item class="video-title">\n      <ion-label>\n        "om" chants\n      </ion-label>\n    </ion-item>\n    <div class="video">\n      <iframe src="https://www.youtube.com/embed/SBiwLibZqfw?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="listen-form15">\n    <ion-item class="video-title">\n      <ion-label>\n        ocean waves\n      </ion-label>\n    </ion-item>\n    <div class="video">\n      <iframe src="https://www.youtube.com/embed/5PyLgaqvYhA?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="listen-form15">\n    <ion-item class="video-title">\n      <ion-label>\n        rain\n      </ion-label>\n    </ion-item>\n    <div class="video">\n      <iframe src="https://www.youtube.com/embed/Mr9T-943BnE?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="listen-form18">\n    <ion-item class="video-title">\n      <ion-label>\n        relaxing river\n      </ion-label>\n    </ion-item>\n    <div class="video">\n      <iframe src="https://www.youtube.com/embed/LiiYMEWKVnY?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="listen-form60">\n    <ion-item class="video-title">\n      <ion-label>\n        sleep\n      </ion-label>\n    </ion-item>\n    <div class="video">\n      <iframe src="https://www.youtube.com/embed/xQ6xgDI7Whc?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="listen-form17">\n    <ion-item class="video-title">\n      <ion-label>\n        white noise\n      </ion-label>\n    </ion-item>\n    <div class="video">\n      <iframe src="https://www.youtube.com/embed/KD_mbn0uncc?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="listen-form19">\n    <ion-item class="video-title">\n      <ion-label>\n        zen\n      </ion-label>\n    </ion-item>\n    <div class="video">\n      <iframe src="https://www.youtube.com/embed/dE_XVl7fwBQ?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/listen/listen.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__ = __webpack_require__(32);
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
        selector: 'page-motivational-quotes',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/motivational-quotes/motivational-quotes.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page29">\n<p>this page includes great quotes can be inspirational and motivational. you can use quotes to help guide your decisions in life, work and love. here are 50 of the best inspirational quotes to motivate you</p>\n       <a class="first-item" href="#" (click)="openWithInAppBrowser(\'https://www.entrepreneur.com/article/247213\')" id="hyperlink1">\n                click here for more motivational quotes\n            </a>\n  <ion-list id="inspirationalVideos-list5">\n    <ion-item class="video-item action-button">\n	nothing is impossible, the word itself says \'I’m possible\'! —audrey hepburn\n    </ion-item>\n    <ion-item class="video-item action-button">\n	i’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. —maya angelou\n    </ion-item>\n    <ion-item class="video-item action-button">\n	whether you think you can or you think you can’t, you’re right. —henry ford\n    </ion-item>\n    <ion-item class="video-item action-button">\n	perfection is not attainable, but if we chase perfection we can catch excellence. —vince lombardi\n    </ion-item>\n    <ion-item class="video-item action-button">\n	life is 10% what happens to me and 90% of how I react to it. —charles swindoll\n    </ion-item>\n    <ion-item class="video-item action-button">\n	if you look at what you have in life, you’ll always have more. if you look at what you don’t have in life, you’ll never have enough. —oprah winfrey\n    </ion-item>\n    <ion-item class="video-item action-button">\n	remember no one can make you feel inferior without your consent. —eleanor roosevelt\n    </ion-item>\n    <ion-item class="video-item action-button">\n	i can’t change the direction of the wind, but i can adjust my sails to always reach my destination. —jimmy dean\n    </ion-item>\n	<ion-item class="video-item action-button">\n	believe you can and you’re halfway there. —theodore roosevelt\n	</ion-item>\n	<ion-item class="video-item action-button">\n	to handle yourself, use your head; to handle others, use your heart. —eleanor roosevelt\n	</ion-item>\n	<ion-item class="video-item action-button">\n	too many of us are not living our dreams because we are living our fears. —les brown\n	</ion-item>\n	<ion-item class="video-item action-button">\n	do or do not. there is no try. —yoda\n	</ion-item>\n	<ion-item class="video-item action-button">\n	whatever the mind of man can conceive and believe, it can achieve. —napoleon hill\n	</ion-item>\n	<ion-item class="video-item action-button">\n	twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. explore, dream, discover. —mark twain\n	</ion-item>\n	<ion-item class="video-item action-button">\n	i’ve missed more than 9000 shots in my career. i’ve lost almost 300 games. 26 times i’ve been trusted to take the game winning shot and missed. i’ve failed over and over and over again in my life. and that is why i succeed. —michael jordan\n	</ion-item>\n	<ion-item class="video-item action-button">\n	strive not to be a success, but rather to be of value. —albert einstein\n	</ion-item>\n	<ion-item class="video-item action-button">\n	i am not a product of my circumstances. i am a product of my decisions. —stephen covey\n	</ion-item>\n	<ion-item class="video-item action-button">\n	when everything seems to be going against you, remember that the airplane takes off against the wind, not with it. —henry ford\n	</ion-item>\n	<ion-item class="video-item action-button">\n	the most common way people give up their power is by thinking they don’t have any. —alice walker\n	</ion-item>\n	<ion-item class="video-item action-button">\n	the most difficult thing is the decision to act, the rest is merely tenacity. —amelia earhart\n	</ion-item>\n	<ion-item class="video-item action-button">\n	it is during our darkest moments that we must focus to see the light. —aistotle onassis\n	</ion-item>\n	<ion-item class="video-item action-button">\n	don’t judge each day by the harvest you reap but by the seeds that you plant. —robert louis stevenson\n	</ion-item>\n	<ion-item class="video-item action-button">\n	the only way to do great work is to love what you do. —steve jobs\n	</ion-item>\n	<ion-item class="video-item action-button">\n	change your thoughts and you change your world. —norman vincent peale\n	</ion-item>\n	<ion-item class="video-item action-button">\n	the question isn’t who is going to let me; it’s who is going to stop me. —ayn rand\n	</ion-item>\n	<ion-item class="video-item action-button">\n	if you hear a voice within you say "you cannot paint," then by all means paint and that voice will be silenced. —vincent van gogh\n	</ion-item>\n	<ion-item class="video-item action-button">\n	build your own dreams, or someone else will hire you to build theirs. —farrah gray\n	</ion-item>\n	<ion-item class="video-item action-button">\n	remember that not getting what you want is sometimes a wonderful stroke of luck. —dalai lama\n	</ion-item>\n	<ion-item class="video-item action-button">\n	you can’t use up creativity. The more you use, the more you have. —maya angelou\n	</ion-item>\n	<ion-item class="video-item action-button">\n	i have learned over the years that when one’s mind is made up, this diminishes fear. —rosa parks\n	</ion-item>\n  </ion-list>\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/motivational-quotes/motivational-quotes.html"*/
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
        selector: 'page-positive-visualisation',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/positive-visualisation/positive-visualisation.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page30">\n\n<p>swipe through the pictures for some positive visualisation </p>\n<div>\n  <ion-slides>\n    <ion-slide>\n      <img src="assets/img/pf0gEqqpRE2fqOXDJKP4_goodday.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/33jjfqITf6YucMJDu4Ij_heart.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/uNVu94E1Rei4fYTxYYNg_inspiration.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/Ou2GHO8LTQSHKUR59ccn_cat.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/AXgEoQdmQ3fpatcmkOwN_Sunset.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/sqfU8lqgTEeDzcBTQiZc_Sitting.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/m3DTzzUQQUi0pMWNoGMb_Yoga.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/acT1tYzjS1u9HgJ3Xryu_happiness.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n    </ion-slide>\n  </ion-slides>\n</div>\n\n<p>you can use <a href="https://www.pinterest.co.uk/">pinterest</a> to start your own positive inspiration board</p>\n\n<!--\n  <img src="assets/img/pf0gEqqpRE2fqOXDJKP4_goodday.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="positiveVisualisation-spacer48"></div>\n  <img src="assets/img/33jjfqITf6YucMJDu4Ij_heart.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="positiveVisualisation-spacer49"></div>\n  <img src="assets/img/uNVu94E1Rei4fYTxYYNg_inspiration.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="positiveVisualisation-spacer50"></div>\n  <img src="assets/img/Ou2GHO8LTQSHKUR59ccn_cat.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="positiveVisualisation-spacer51"></div>\n  <img src="assets/img/AXgEoQdmQ3fpatcmkOwN_Sunset.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="positiveVisualisation-spacer52"></div>\n  <img src="assets/img/sqfU8lqgTEeDzcBTQiZc_Sitting.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="positiveVisualisation-spacer53"></div>\n  <img src="assets/img/m3DTzzUQQUi0pMWNoGMb_Yoga.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="positiveVisualisation-spacer54"></div>\n  <img src="assets/img/acT1tYzjS1u9HgJ3Xryu_happiness.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="positiveVisualisation-spacer55"></div>\n  <img src="assets/img/EMwmA31lQ5C1xGwHsyBQ_neverstopdreaming.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="positiveVisualisation-spacer56"></div>\n\n-->\n\n</ion-content>\n'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/positive-visualisation/positive-visualisation.html"*/
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
        selector: 'page-mentalhealthfeelslike',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/mentalhealthfeelslike/mentalhealthfeelslike.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page31">\n  <div id="Mentalhealthfeelslike-markdown9" class="show-list-numbers-and-dots">\n    <h4>\n       <p>difficulty putting it into words? Follow the #mentalhealthfeelslike campaign <a href="#" onclick="cordova.InAppBrowser.open(\'http://www.mentalhealthamerica.net/feelslike\', \'_blank\', \'location=yes\'); return false;" id="hyperlink1">here</a></p>\n    </h4>\n  </div>\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer6"></div>\n  <img src="assets/img/mFt60LzZStyx05dJsDH4_4.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer6"></div>\n  <img src="assets/img/NxLX5vUQacXXqSWykM9A_3.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer5"></div>\n  <img src="assets/img/2QyaDTPRPukRP4SCi7em_5.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer8"></div>\n  <img src="assets/img/KuqBwGN1TPSr6TYN4g4z_2.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer9"></div>\n  <img src="assets/img/DUWeB8dgTSOqwd8M51jX_7.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer11"></div>\n  <img src="assets/img/X9SMH5tnSKyg9TbwQtQQ_1.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer10"></div>\n  <img src="assets/img/BFlDFbRBe0B2pgOgZYfQ_6.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer12"></div>\n  <img src="assets/img/mah2hAB8SGiMwow1zOSF_9.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer13"></div>\n  <img src="assets/img/T8SicR6URjaLAr3gVk1g_10.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer14"></div>\n  <img src="assets/img/PENiy5RQQYqrjUVecZcD_11.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer15"></div>\n  <img src="assets/img/IKFo7sgSVG5jxrAI1das_14.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer16"></div>\n  <img src="assets/img/b5pxpdZfSqqqfHrf8S8t_12.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer17"></div>\n  <img src="assets/img/DhIGBJ8R0mgH93QlOldg_15.jpeg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer18"></div>\n  <img src="assets/img/kWyGS92WQumQvj8uqZsm_13.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer19"></div>\n  <img src="assets/img/sIJchlTTF2nlvceE45JS_16.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <div class="spacer" style="height:30px;" id="Mentalhealthfeelslike-spacer20"></div>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/mentalhealthfeelslike/mentalhealthfeelslike.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_youtube_youtube__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_self_help_self_help__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_what_is_self_help_what_is_self_help__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_mindfulness_mindfulness__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_nhs_self_help_leaflets_nhs_self_help_leaflets__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_advice_services_advice_services__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_in_acrisis_in_acrisis__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_carer_support_carer_support__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_know_your_rights_know_your_rights__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_find_aservice_find_aservice__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_mood_journal_mood_journal__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_relax_space_relax_space__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_listen_listen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_inspirational_videos_inspirational_videos__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_positive_visualisation_positive_visualisation__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_mentalhealthfeelslike_mentalhealthfeelslike__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_abuse_abuse__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_alcohol_and_you_alcohol_and_you__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_anxiety_anxiety__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_bereavement_bereavement__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_controlling_anger_controlling_anger__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_depression_and_low_mood_depression_and_low_mood__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_domestic_violence_domestic_violence__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_eating_disorders_eating_disorders__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_food_for_thought_food_for_thought__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_hearing_voices_and_disturbing_beliefs_hearing_voices_and_disturbing_beliefs__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_health_anxiety_health_anxiety__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_obsessions_and_compulsions_obsessions_and_compulsions__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_panic_panic__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_post_traumatic_stress_post_traumatic_stress__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_postnatal_depression_postnatal_depression__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_self_harm_self_harm__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_social_anxiety_social_anxiety__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_sleeping_problems_sleeping_problems__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_stress_stress__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_motivational_quotes_motivational_quotes__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_status_bar__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_splash_screen__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_ionic2_calendar__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_sqlite__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_database_database__ = __webpack_require__(133);
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
	"./af": 185,
	"./af.js": 185,
	"./ar": 186,
	"./ar-dz": 187,
	"./ar-dz.js": 187,
	"./ar-kw": 188,
	"./ar-kw.js": 188,
	"./ar-ly": 189,
	"./ar-ly.js": 189,
	"./ar-ma": 190,
	"./ar-ma.js": 190,
	"./ar-sa": 191,
	"./ar-sa.js": 191,
	"./ar-tn": 192,
	"./ar-tn.js": 192,
	"./ar.js": 186,
	"./az": 193,
	"./az.js": 193,
	"./be": 194,
	"./be.js": 194,
	"./bg": 195,
	"./bg.js": 195,
	"./bm": 196,
	"./bm.js": 196,
	"./bn": 197,
	"./bn.js": 197,
	"./bo": 198,
	"./bo.js": 198,
	"./br": 199,
	"./br.js": 199,
	"./bs": 200,
	"./bs.js": 200,
	"./ca": 201,
	"./ca.js": 201,
	"./cs": 202,
	"./cs.js": 202,
	"./cv": 203,
	"./cv.js": 203,
	"./cy": 204,
	"./cy.js": 204,
	"./da": 205,
	"./da.js": 205,
	"./de": 206,
	"./de-at": 207,
	"./de-at.js": 207,
	"./de-ch": 208,
	"./de-ch.js": 208,
	"./de.js": 206,
	"./dv": 209,
	"./dv.js": 209,
	"./el": 210,
	"./el.js": 210,
	"./en-au": 211,
	"./en-au.js": 211,
	"./en-ca": 212,
	"./en-ca.js": 212,
	"./en-gb": 213,
	"./en-gb.js": 213,
	"./en-ie": 214,
	"./en-ie.js": 214,
	"./en-nz": 215,
	"./en-nz.js": 215,
	"./eo": 216,
	"./eo.js": 216,
	"./es": 217,
	"./es-do": 218,
	"./es-do.js": 218,
	"./es-us": 219,
	"./es-us.js": 219,
	"./es.js": 217,
	"./et": 220,
	"./et.js": 220,
	"./eu": 221,
	"./eu.js": 221,
	"./fa": 222,
	"./fa.js": 222,
	"./fi": 223,
	"./fi.js": 223,
	"./fo": 224,
	"./fo.js": 224,
	"./fr": 225,
	"./fr-ca": 226,
	"./fr-ca.js": 226,
	"./fr-ch": 227,
	"./fr-ch.js": 227,
	"./fr.js": 225,
	"./fy": 228,
	"./fy.js": 228,
	"./gd": 229,
	"./gd.js": 229,
	"./gl": 230,
	"./gl.js": 230,
	"./gom-latn": 231,
	"./gom-latn.js": 231,
	"./gu": 232,
	"./gu.js": 232,
	"./he": 233,
	"./he.js": 233,
	"./hi": 234,
	"./hi.js": 234,
	"./hr": 235,
	"./hr.js": 235,
	"./hu": 236,
	"./hu.js": 236,
	"./hy-am": 237,
	"./hy-am.js": 237,
	"./id": 238,
	"./id.js": 238,
	"./is": 239,
	"./is.js": 239,
	"./it": 240,
	"./it.js": 240,
	"./ja": 241,
	"./ja.js": 241,
	"./jv": 242,
	"./jv.js": 242,
	"./ka": 243,
	"./ka.js": 243,
	"./kk": 244,
	"./kk.js": 244,
	"./km": 245,
	"./km.js": 245,
	"./kn": 246,
	"./kn.js": 246,
	"./ko": 247,
	"./ko.js": 247,
	"./ky": 248,
	"./ky.js": 248,
	"./lb": 249,
	"./lb.js": 249,
	"./lo": 250,
	"./lo.js": 250,
	"./lt": 251,
	"./lt.js": 251,
	"./lv": 252,
	"./lv.js": 252,
	"./me": 253,
	"./me.js": 253,
	"./mi": 254,
	"./mi.js": 254,
	"./mk": 255,
	"./mk.js": 255,
	"./ml": 256,
	"./ml.js": 256,
	"./mr": 257,
	"./mr.js": 257,
	"./ms": 258,
	"./ms-my": 259,
	"./ms-my.js": 259,
	"./ms.js": 258,
	"./my": 260,
	"./my.js": 260,
	"./nb": 261,
	"./nb.js": 261,
	"./ne": 262,
	"./ne.js": 262,
	"./nl": 263,
	"./nl-be": 264,
	"./nl-be.js": 264,
	"./nl.js": 263,
	"./nn": 265,
	"./nn.js": 265,
	"./pa-in": 266,
	"./pa-in.js": 266,
	"./pl": 267,
	"./pl.js": 267,
	"./pt": 268,
	"./pt-br": 269,
	"./pt-br.js": 269,
	"./pt.js": 268,
	"./ro": 270,
	"./ro.js": 270,
	"./ru": 271,
	"./ru.js": 271,
	"./sd": 272,
	"./sd.js": 272,
	"./se": 273,
	"./se.js": 273,
	"./si": 274,
	"./si.js": 274,
	"./sk": 275,
	"./sk.js": 275,
	"./sl": 276,
	"./sl.js": 276,
	"./sq": 277,
	"./sq.js": 277,
	"./sr": 278,
	"./sr-cyrl": 279,
	"./sr-cyrl.js": 279,
	"./sr.js": 278,
	"./ss": 280,
	"./ss.js": 280,
	"./sv": 281,
	"./sv.js": 281,
	"./sw": 282,
	"./sw.js": 282,
	"./ta": 283,
	"./ta.js": 283,
	"./te": 284,
	"./te.js": 284,
	"./tet": 285,
	"./tet.js": 285,
	"./th": 286,
	"./th.js": 286,
	"./tl-ph": 287,
	"./tl-ph.js": 287,
	"./tlh": 288,
	"./tlh.js": 288,
	"./tr": 289,
	"./tr.js": 289,
	"./tzl": 290,
	"./tzl.js": 290,
	"./tzm": 291,
	"./tzm-latn": 292,
	"./tzm-latn.js": 292,
	"./tzm.js": 291,
	"./uk": 293,
	"./uk.js": 293,
	"./ur": 294,
	"./ur.js": 294,
	"./uz": 295,
	"./uz-latn": 296,
	"./uz-latn.js": 296,
	"./uz.js": 295,
	"./vi": 297,
	"./vi.js": 297,
	"./x-pseudo": 298,
	"./x-pseudo.js": 298,
	"./yo": 299,
	"./yo.js": 299,
	"./zh-cn": 300,
	"./zh-cn.js": 300,
	"./zh-hk": 301,
	"./zh-hk.js": 301,
	"./zh-tw": 302,
	"./zh-tw.js": 302
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_menu_menu__ = __webpack_require__(345);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/app/app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/app/app.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
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

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbusePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(12);
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
        selector: 'page-abuse',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/abuse/abuse.html"*/'<ion-header>\n  <ion-navbar>\n  <ion-title>\n  abuse </ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor = "let item of posts">\n    <ion-card-title>\n      {{item.snippet.title}}\n    </ion-card-title>\n    <ion-card-content>\n      <iframe width="290" height="163" [src]="item.id.videoId | youtube" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/abuse/abuse.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], AbusePage);

//# sourceMappingURL=abuse.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlcoholAndYouPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(12);
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




var AlcoholAndYouPage = (function () {
    function AlcoholAndYouPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.channelId = 'UCsT0YIqwnpJCM-mx7-gSA4Q';
        this.maxResults = '10';
        this.googleToken = 'AIzaSyDlv0u0m3vplNVUrxIXGlKAGrN3lIAY8b8';
        this.search = 'alcohol';
        this.posts = [];
        var url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=' + this.channelId + '&q=' + this.search + '&type=video&order=date&maxResults=' + this.maxResults + '&key=' + this.googleToken;
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = _this.posts.concat(data.items);
            console.log(_this.posts);
        });
    }
    return AlcoholAndYouPage;
}());
AlcoholAndYouPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-alcohol-and-you',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/alcohol-and-you/alcohol-and-you.html"*/'<ion-header>\n  <ion-navbar>\n  <ion-title>\n  alcohol and you \n</ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor = "let item of posts">\n    <ion-card-title>\n      {{item.snippet.title}}\n    </ion-card-title>\n    <ion-card-content>\n      <iframe width="290" height="163" [src]="item.id.videoId | youtube" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/alcohol-and-you/alcohol-and-you.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], AlcoholAndYouPage);

//# sourceMappingURL=alcohol-and-you.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnxietyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(12);
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




var AnxietyPage = (function () {
    function AnxietyPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.channelId = 'UCsT0YIqwnpJCM-mx7-gSA4Q';
        this.maxResults = '10';
        this.googleToken = 'AIzaSyDlv0u0m3vplNVUrxIXGlKAGrN3lIAY8b8';
        this.search = 'anxiety';
        this.posts = [];
        var url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=' + this.channelId + '&q=' + this.search + '&type=video&order=date&maxResults=' + this.maxResults + '&key=' + this.googleToken;
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = _this.posts.concat(data.items);
            console.log(_this.posts);
        });
    }
    return AnxietyPage;
}());
AnxietyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-anxiety',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/anxiety/anxiety.html"*/'<ion-header>\n  <ion-navbar>\n  <ion-title>\n  anxiety </ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor = "let item of posts">\n    <ion-card-title>\n      {{item.snippet.title}}\n    </ion-card-title>\n    <ion-card-content>\n      <iframe width="290" height="163" [src]="item.id.videoId | youtube" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/anxiety/anxiety.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], AnxietyPage);

//# sourceMappingURL=anxiety.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BereavementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(12);
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




var BereavementPage = (function () {
    function BereavementPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.channelId = 'UCsT0YIqwnpJCM-mx7-gSA4Q';
        this.maxResults = '10';
        this.googleToken = 'AIzaSyDlv0u0m3vplNVUrxIXGlKAGrN3lIAY8b8';
        this.search = 'grief, loss';
        this.posts = [];
        var url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=' + this.channelId + '&q=' + this.search + '&type=video&order=date&maxResults=' + this.maxResults + '&key=' + this.googleToken;
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = _this.posts.concat(data.items);
            console.log(_this.posts);
        });
    }
    return BereavementPage;
}());
BereavementPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bereavement',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/bereavement/bereavement.html"*/'<ion-header>\n  <ion-navbar>\n  <ion-title>\n  bereavement </ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor = "let item of posts">\n    <ion-card-title>\n      {{item.snippet.title}}\n    </ion-card-title>\n    <ion-card-content>\n      <iframe width="290" height="163" [src]="item.id.videoId | youtube" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/bereavement/bereavement.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], BereavementPage);

//# sourceMappingURL=bereavement.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControllingAngerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(12);
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




var ControllingAngerPage = (function () {
    function ControllingAngerPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.channelId = 'UCsT0YIqwnpJCM-mx7-gSA4Q';
        this.maxResults = '10';
        this.googleToken = 'AIzaSyDlv0u0m3vplNVUrxIXGlKAGrN3lIAY8b8';
        this.search = 'anger management';
        this.posts = [];
        var url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=' + this.channelId + '&q=' + this.search + '&type=video&order=date&maxResults=' + this.maxResults + '&key=' + this.googleToken;
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = _this.posts.concat(data.items);
            console.log(_this.posts);
        });
    }
    return ControllingAngerPage;
}());
ControllingAngerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-controlling-anger',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/controlling-anger/controlling-anger.html"*/'<ion-header>\n  <ion-navbar>\n  <ion-title>\n  controlling anger </ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor = "let item of posts">\n    <ion-card-title>\n      {{item.snippet.title}}\n    </ion-card-title>\n    <ion-card-content>\n      <iframe width="290" height="163" [src]="item.id.videoId | youtube" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/controlling-anger/controlling-anger.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], ControllingAngerPage);

//# sourceMappingURL=controlling-anger.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepressionAndLowMoodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(12);
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




var DepressionAndLowMoodPage = (function () {
    function DepressionAndLowMoodPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.channelId = 'UCsT0YIqwnpJCM-mx7-gSA4Q';
        this.maxResults = '10';
        this.googleToken = 'AIzaSyDlv0u0m3vplNVUrxIXGlKAGrN3lIAY8b8';
        this.search = 'depression, depressed';
        this.posts = [];
        var url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=' + this.channelId + '&q=' + this.search + '&type=video&order=date&maxResults=' + this.maxResults + '&key=' + this.googleToken;
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = _this.posts.concat(data.items);
            console.log(_this.posts);
        });
    }
    return DepressionAndLowMoodPage;
}());
DepressionAndLowMoodPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-depression-and-low-mood',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/depression-and-low-mood/depression-and-low-mood.html"*/'<ion-header>\n  <ion-navbar>\n  <ion-title>\n  depression and low mood </ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor = "let item of posts">\n    <ion-card-title>\n      {{item.snippet.title}}\n    </ion-card-title>\n    <ion-card-content>\n      <iframe width="290" height="163" [src]="item.id.videoId | youtube" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/depression-and-low-mood/depression-and-low-mood.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], DepressionAndLowMoodPage);

//# sourceMappingURL=depression-and-low-mood.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomesticViolencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(12);
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




var DomesticViolencePage = (function () {
    function DomesticViolencePage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.channelId = 'UCsT0YIqwnpJCM-mx7-gSA4Q';
        this.maxResults = '10';
        this.googleToken = 'AIzaSyDlv0u0m3vplNVUrxIXGlKAGrN3lIAY8b8';
        this.search = 'domestic violence';
        this.posts = [];
        var url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=' + this.channelId + '&q=' + this.search + '&type=video&order=date&maxResults=' + this.maxResults + '&key=' + this.googleToken;
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = _this.posts.concat(data.items);
            console.log(_this.posts);
        });
    }
    return DomesticViolencePage;
}());
DomesticViolencePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-domestic-violence',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/domestic-violence/domestic-violence.html"*/'<ion-header>\n  <ion-navbar>\n  <ion-title>\n  domestic violence </ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor = "let item of posts">\n    <ion-card-title>\n      {{item.snippet.title}}\n    </ion-card-title>\n    <ion-card-content>\n      <iframe width="290" height="163" [src]="item.id.videoId | youtube" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/domestic-violence/domestic-violence.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], DomesticViolencePage);

//# sourceMappingURL=domestic-violence.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EatingDisordersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(12);
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




var EatingDisordersPage = (function () {
    function EatingDisordersPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.channelId = 'UCsT0YIqwnpJCM-mx7-gSA4Q';
        this.maxResults = '10';
        this.googleToken = 'AIzaSyDlv0u0m3vplNVUrxIXGlKAGrN3lIAY8b8';
        this.search = 'eating disorders, bulimia, anorexia';
        this.posts = [];
        var url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=' + this.channelId + '&q=' + this.search + '&type=video&order=date&maxResults=' + this.maxResults + '&key=' + this.googleToken;
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = _this.posts.concat(data.items);
            console.log(_this.posts);
        });
    }
    return EatingDisordersPage;
}());
EatingDisordersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-eating-disorders',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/eating-disorders/eating-disorders.html"*/'<ion-header>\n  <ion-navbar>\n  <ion-title>\n  eating disorders </ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor = "let item of posts">\n    <ion-card-title>\n      {{item.snippet.title}}\n    </ion-card-title>\n    <ion-card-content>\n      <iframe width="290" height="163" [src]="item.id.videoId | youtube" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/eating-disorders/eating-disorders.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], EatingDisordersPage);

//# sourceMappingURL=eating-disorders.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodForThoughtPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(12);
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




var FoodForThoughtPage = (function () {
    function FoodForThoughtPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.channelId = 'UCsT0YIqwnpJCM-mx7-gSA4Q';
        this.maxResults = '10';
        this.googleToken = 'AIzaSyDlv0u0m3vplNVUrxIXGlKAGrN3lIAY8b8';
        this.search = 'super food';
        this.posts = [];
        var url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=' + this.channelId + '&q=' + this.search + '&type=video&order=date&maxResults=' + this.maxResults + '&key=' + this.googleToken;
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = _this.posts.concat(data.items);
            console.log(_this.posts);
        });
    }
    return FoodForThoughtPage;
}());
FoodForThoughtPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-food-for-thought',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/food-for-thought/food-for-thought.html"*/'<ion-header>\n  <ion-navbar>\n  <ion-title>\n  food for thought </ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor = "let item of posts">\n    <ion-card-title>\n      {{item.snippet.title}}\n    </ion-card-title>\n    <ion-card-content>\n      <iframe width="290" height="163" [src]="item.id.videoId | youtube" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/food-for-thought/food-for-thought.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], FoodForThoughtPage);

//# sourceMappingURL=food-for-thought.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HealthAnxietyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(12);
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




var HealthAnxietyPage = (function () {
    function HealthAnxietyPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.channelId = 'UCsT0YIqwnpJCM-mx7-gSA4Q';
        this.maxResults = '10';
        this.googleToken = 'AIzaSyDlv0u0m3vplNVUrxIXGlKAGrN3lIAY8b8';
        this.search = 'health anxiety';
        this.posts = [];
        var url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=' + this.channelId + '&q=' + this.search + '&type=video&order=date&maxResults=' + this.maxResults + '&key=' + this.googleToken;
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = _this.posts.concat(data.items);
            console.log(_this.posts);
        });
    }
    return HealthAnxietyPage;
}());
HealthAnxietyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-health-anxiety',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/health-anxiety/health-anxiety.html"*/'<ion-header>\n  <ion-navbar>\n  <ion-title>\n  health anxiety </ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor = "let item of posts">\n    <ion-card-title>\n      {{item.snippet.title}}\n    </ion-card-title>\n    <ion-card-content>\n      <iframe width="290" height="163" [src]="item.id.videoId | youtube" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/health-anxiety/health-anxiety.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], HealthAnxietyPage);

//# sourceMappingURL=health-anxiety.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HearingVoicesAndDisturbingBeliefsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(12);
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




var HearingVoicesAndDisturbingBeliefsPage = (function () {
    function HearingVoicesAndDisturbingBeliefsPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.channelId = 'UCsT0YIqwnpJCM-mx7-gSA4Q';
        this.maxResults = '10';
        this.googleToken = 'AIzaSyDlv0u0m3vplNVUrxIXGlKAGrN3lIAY8b8';
        this.search = 'hearing voices, schizophrenia';
        this.posts = [];
        var url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=' + this.channelId + '&q=' + this.search + '&type=video&order=date&maxResults=' + this.maxResults + '&key=' + this.googleToken;
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = _this.posts.concat(data.items);
            console.log(_this.posts);
        });
    }
    return HearingVoicesAndDisturbingBeliefsPage;
}());
HearingVoicesAndDisturbingBeliefsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-hearing-voices-and-disturbing-beliefs',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/hearing-voices-and-disturbing-beliefs/hearing-voices-and-disturbing-beliefs.html"*/'<ion-header>\n  <ion-navbar>\n  <ion-title>\n  hearing voices and disturbing beliefs </ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor = "let item of posts">\n    <ion-card-title>\n      {{item.snippet.title}}\n    </ion-card-title>\n    <ion-card-content>\n      <iframe width="290" height="163" [src]="item.id.videoId | youtube" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/hearing-voices-and-disturbing-beliefs/hearing-voices-and-disturbing-beliefs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], HearingVoicesAndDisturbingBeliefsPage);

//# sourceMappingURL=hearing-voices-and-disturbing-beliefs.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObsessionsAndCompulsionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(12);
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




var ObsessionsAndCompulsionsPage = (function () {
    function ObsessionsAndCompulsionsPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.channelId = 'UCsT0YIqwnpJCM-mx7-gSA4Q';
        this.maxResults = '10';
        this.googleToken = 'AIzaSyDlv0u0m3vplNVUrxIXGlKAGrN3lIAY8b8';
        this.search = 'ocd, obsessive, compulsion';
        this.posts = [];
        var url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=' + this.channelId + '&q=' + this.search + '&type=video&order=date&maxResults=' + this.maxResults + '&key=' + this.googleToken;
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = _this.posts.concat(data.items);
            console.log(_this.posts);
        });
    }
    return ObsessionsAndCompulsionsPage;
}());
ObsessionsAndCompulsionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-obsessions-and-compulsions',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/obsessions-and-compulsions/obsessions-and-compulsions.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n  <form id="obsessionsAndCompulsions-form41">\n    <ion-item id="obsessionsAndCompulsions-textarea33" class="video-title">\n      <ion-label>\n        my hidden ocd exposed\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="obsessionsAndCompulsions-video33">\n      <iframe src="https://www.youtube.com/embed/A3f4Gf5Q_2w?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n  <form id="obsessionsAndCompulsions-form42">\n    <ion-item id="obsessionsAndCompulsions-textarea34" class="video-title">\n      <ion-label>\n        living with #ocd\n      </ion-label>\n    </ion-item>\n    <div style="position:relative;overflow:hidden;padding-bottom:56.25%;height:0;" id="obsessionsAndCompulsions-video34">\n      <iframe src="https://www.youtube.com/embed/btO3kE2RrEY?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen width="560" height="315" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/obsessions-and-compulsions/obsessions-and-compulsions.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], ObsessionsAndCompulsionsPage);

//# sourceMappingURL=obsessions-and-compulsions.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(12);
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




var PanicPage = (function () {
    function PanicPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.channelId = 'UCsT0YIqwnpJCM-mx7-gSA4Q';
        this.maxResults = '10';
        this.googleToken = 'AIzaSyDlv0u0m3vplNVUrxIXGlKAGrN3lIAY8b8';
        this.search = 'panic';
        this.posts = [];
        var url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=' + this.channelId + '&q=' + this.search + '&type=video&order=date&maxResults=' + this.maxResults + '&key=' + this.googleToken;
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = _this.posts.concat(data.items);
            console.log(_this.posts);
        });
    }
    return PanicPage;
}());
PanicPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-panic',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/panic/panic.html"*/'<ion-header>\n  <ion-navbar>\n  <ion-title>\n  panic </ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor = "let item of posts">\n    <ion-card-title>\n      {{item.snippet.title}}\n    </ion-card-title>\n    <ion-card-content>\n      <iframe width="290" height="163" [src]="item.id.videoId | youtube" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/panic/panic.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], PanicPage);

//# sourceMappingURL=panic.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostTraumaticStressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(12);
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




var PostTraumaticStressPage = (function () {
    function PostTraumaticStressPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.channelId = 'UCsT0YIqwnpJCM-mx7-gSA4Q';
        this.maxResults = '10';
        this.googleToken = 'AIzaSyDlv0u0m3vplNVUrxIXGlKAGrN3lIAY8b8';
        this.search = 'ptsd';
        this.posts = [];
        var url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=' + this.channelId + '&q=' + this.search + '&type=video&order=date&maxResults=' + this.maxResults + '&key=' + this.googleToken;
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = _this.posts.concat(data.items);
            console.log(_this.posts);
        });
    }
    return PostTraumaticStressPage;
}());
PostTraumaticStressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-post-traumatic-stress',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/post-traumatic-stress/post-traumatic-stress.html"*/'<ion-header>\n  <ion-navbar>\n  <ion-title>\n  ptsd </ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor = "let item of posts">\n    <ion-card-title>\n      {{item.snippet.title}}\n    </ion-card-title>\n    <ion-card-content>\n      <iframe width="290" height="163" [src]="item.id.videoId | youtube" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/post-traumatic-stress/post-traumatic-stress.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], PostTraumaticStressPage);

//# sourceMappingURL=post-traumatic-stress.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostnatalDepressionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(12);
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




var PostnatalDepressionPage = (function () {
    function PostnatalDepressionPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.channelId = 'UCsT0YIqwnpJCM-mx7-gSA4Q';
        this.maxResults = '10';
        this.googleToken = 'AIzaSyDlv0u0m3vplNVUrxIXGlKAGrN3lIAY8b8';
        this.search = 'postnatal depression';
        this.posts = [];
        var url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=' + this.channelId + '&q=' + this.search + '&type=video&order=date&maxResults=' + this.maxResults + '&key=' + this.googleToken;
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = _this.posts.concat(data.items);
            console.log(_this.posts);
        });
    }
    return PostnatalDepressionPage;
}());
PostnatalDepressionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-postnatal-depression',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/postnatal-depression/postnatal-depression.html"*/'<ion-header>\n  <ion-navbar>\n  <ion-title>\n  postnatal depression </ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor = "let item of posts">\n    <ion-card-title>\n      {{item.snippet.title}}\n    </ion-card-title>\n    <ion-card-content>\n      <iframe width="290" height="163" [src]="item.id.videoId | youtube" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/postnatal-depression/postnatal-depression.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], PostnatalDepressionPage);

//# sourceMappingURL=postnatal-depression.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelfHarmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(12);
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




var SelfHarmPage = (function () {
    function SelfHarmPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.channelId = 'UCsT0YIqwnpJCM-mx7-gSA4Q';
        this.maxResults = '10';
        this.googleToken = 'AIzaSyDlv0u0m3vplNVUrxIXGlKAGrN3lIAY8b8';
        this.search = 'self harm';
        this.posts = [];
        var url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=' + this.channelId + '&q=' + this.search + '&type=video&order=date&maxResults=' + this.maxResults + '&key=' + this.googleToken;
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = _this.posts.concat(data.items);
            console.log(_this.posts);
        });
    }
    return SelfHarmPage;
}());
SelfHarmPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-self-harm',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/self-harm/self-harm.html"*/'<ion-header>\n  <ion-navbar>\n  <ion-title>\n  self harm </ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor = "let item of posts">\n    <ion-card-title>\n      {{item.snippet.title}}\n    </ion-card-title>\n    <ion-card-content>\n      <iframe width="290" height="163" [src]="item.id.videoId | youtube" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/self-harm/self-harm.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], SelfHarmPage);

//# sourceMappingURL=self-harm.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialAnxietyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(12);
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




var SocialAnxietyPage = (function () {
    function SocialAnxietyPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.channelId = 'UCsT0YIqwnpJCM-mx7-gSA4Q';
        this.maxResults = '10';
        this.googleToken = 'AIzaSyDlv0u0m3vplNVUrxIXGlKAGrN3lIAY8b8';
        this.search = 'social anxiety';
        this.posts = [];
        var url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=' + this.channelId + '&q=' + this.search + '&type=video&order=date&maxResults=' + this.maxResults + '&key=' + this.googleToken;
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = _this.posts.concat(data.items);
            console.log(_this.posts);
        });
    }
    return SocialAnxietyPage;
}());
SocialAnxietyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-social-anxiety',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/social-anxiety/social-anxiety.html"*/'<ion-header>\n  <ion-navbar>\n  <ion-title>\n  social anxiety </ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor = "let item of posts">\n    <ion-card-title>\n      {{item.snippet.title}}\n    </ion-card-title>\n    <ion-card-content>\n      <iframe width="290" height="163" [src]="item.id.videoId | youtube" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/social-anxiety/social-anxiety.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], SocialAnxietyPage);

//# sourceMappingURL=social-anxiety.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SleepingProblemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(12);
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




var SleepingProblemsPage = (function () {
    function SleepingProblemsPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.channelId = 'UCsT0YIqwnpJCM-mx7-gSA4Q';
        this.maxResults = '10';
        this.googleToken = 'AIzaSyDlv0u0m3vplNVUrxIXGlKAGrN3lIAY8b8';
        this.search = 'sleep';
        this.posts = [];
        var url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=' + this.channelId + '&q=' + this.search + '&type=video&order=date&maxResults=' + this.maxResults + '&key=' + this.googleToken;
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = _this.posts.concat(data.items);
            console.log(_this.posts);
        });
    }
    return SleepingProblemsPage;
}());
SleepingProblemsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sleeping-problems',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/sleeping-problems/sleeping-problems.html"*/'<ion-header>\n  <ion-navbar>\n  <ion-title>\n  sleeping problems </ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor = "let item of posts">\n    <ion-card-title>\n      {{item.snippet.title}}\n    </ion-card-title>\n    <ion-card-content>\n      <iframe width="290" height="163" [src]="item.id.videoId | youtube" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/sleeping-problems/sleeping-problems.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _b || Object])
], SleepingProblemsPage);

var _a, _b;
//# sourceMappingURL=sleeping-problems.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(12);
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




var StressPage = (function () {
    function StressPage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.channelId = 'UCsT0YIqwnpJCM-mx7-gSA4Q';
        this.maxResults = '10';
        this.googleToken = 'AIzaSyDlv0u0m3vplNVUrxIXGlKAGrN3lIAY8b8';
        this.search = 'stress';
        this.posts = [];
        var url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=' + this.channelId + '&q=' + this.search + '&type=video&order=date&maxResults=' + this.maxResults + '&key=' + this.googleToken;
        this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = _this.posts.concat(data.items);
            console.log(_this.posts);
        });
    }
    return StressPage;
}());
StressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-stress',template:/*ion-inline-start:"/Users/dev/GC02_2017_Team18/src/pages/stress/stress.html"*/'<ion-header>\n  <ion-navbar>\n  <ion-title>\n  stress </ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor = "let item of posts">\n    <ion-card-title>\n      {{item.snippet.title}}\n    </ion-card-title>\n    <ion-card-content>\n      <iframe width="290" height="163" [src]="item.id.videoId | youtube" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/dev/GC02_2017_Team18/src/pages/stress/stress.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], StressPage);

//# sourceMappingURL=stress.js.map

/***/ })

},[354]);
//# sourceMappingURL=main.js.map