import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-video-view',
  templateUrl: 'inspirational-videos-view.html'
})
export class VideoView {
	videos = this.navParams.get('videos')
  constructor(public navCtrl: NavController, public navParams: NavParams ) {
  } 
}
