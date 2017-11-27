import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as moment from 'moment';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@IonicPage()
@Component({
  selector: 'page-event-modal',
  templateUrl: 'event-modal.html',
})
export class EventModalPage {

  event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false };
  minDate = new Date().toISOString();

  constructor(public navCtrl: NavController, private navParams: NavParams, public viewCtrl: ViewController, private sqlite: SQLite) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  save() {
	this.sqlite.create({
	  name: 'data.db',
	  location: 'default'
	})
	  .then((db: SQLiteObject) => {
	    db.executeSql(`INSERT INTO mood_journal_entries (date_from, date_until, all_day, mood, entry) VALUES ('${this.event.startTime}', '${this.event.endTime}', '${this.event.allDay}', '${this.event.mood}', '${this.event.title}')`, {})
	      .then(() => console.log('saved entry'))
	      .catch(e => console.log(e));
	  })
	  .catch(e => console.log(e));
  	this.viewCtrl.dismiss(this.event);
  }



}
