import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RelaxSpacePage } from '../relax-space/relax-space';
import { MoodTrackerPage } from '../mood-tracker/mood-tracker';
import { MoodJournalPage } from '../mood-journal/mood-journal';
import { AlertController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@IonicPage()
@Component({
  selector: 'page-mood-menu',
  templateUrl: 'mood-menu.html',
})
export class MoodMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private sqlite: SQLite) {
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


  goToMoodJournal(){
    this.navCtrl.push(MoodJournalPage);
  }
  goToMoodTracker(){
    this.navCtrl.push(MoodTrackerPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoodMenuPage');
	this.sqlite.create({
	  name: 'data.db',
	  location: 'default'
	})
	  .then((db: SQLiteObject) => {


	    db.executeSql('CREATE TABLE IF NOT EXISTS mood_journal_entries (id INTEGER PRIMARY KEY, date_from DATETIME, date_until DATETIME, all_day BOOL, mood VARCHAR(4), entry TEXT);', {})
	      .then(() => console.log('Executed SQL'))
	      .catch(e => console.log(e));


	  })
	  .catch(e => console.log(e));
  }

}
