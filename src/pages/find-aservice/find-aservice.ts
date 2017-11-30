import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-find-aservice',
  templateUrl: 'find-aservice.html'
})
export class FindAServicePage {
  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no'
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only
    toolbar : 'yes', //iOS only
    enableViewportScale : 'no', //iOS only
    allowInlineMediaPlayback : 'no',//iOS only
    presentationstyle : 'pagesheet',//iOS only
    fullscreen : 'yes',//Windows only
};



  constructor(private theInAppBrowser: InAppBrowser) {
  }

  public openWithInAppBrowser(url : string, ){
    let target = "_blank";
    this.theInAppBrowser.create(url,target,this.options);
  }



}
