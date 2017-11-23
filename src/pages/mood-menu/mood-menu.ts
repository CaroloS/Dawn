import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RelaxSpacePage } from '../relax-space/relax-space';
import { MoodTrackerPage } from '../mood-tracker/mood-tracker';
import { MoodJournalPage } from '../mood-journal/mood-journal';

/**
 * Generated class for the MoodMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mood-menu',
  templateUrl: 'mood-menu.html',
})
export class MoodMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToMoodJournal(params){
    if (!params) params = {};
    this.navCtrl.push(MoodJournalPage);
  }
  goToMoodTracker(params){
    if (!params) params = {};
    this.navCtrl.push(MoodTrackerPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoodMenuPage');
  }

}
