import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RelaxSpacePage } from '../relax-space/relax-space';
import { MoodTrackerPage } from '../mood-tracker/mood-tracker';
import { MoodJournalPage } from '../mood-journal/mood-journal';
import { AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }


  badSelected(event) {

      let alert = this.alertCtrl.create({
        title: 'Selected Mood: bad',
        subTitle: 'In a crisis? Go to the crisis page for help',
        buttons: ['OK']
          })
      alert.present();
  }

  okSelected(event) {

  let alert = this.alertCtrl.create({
    title: 'Selected Mood: OK',
    subTitle: 'Need some inspiration? Watch some videos in the relax space',
    buttons: ['OK']
  })
  alert.present();
}

goodSelected(event) {

  let alert = this.alertCtrl.create({
    title: 'Selected Mood: Good',
    subTitle: 'Dawn is glad you\'re having a good day!',
    buttons: ['OK']
  })
  alert.present();
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
