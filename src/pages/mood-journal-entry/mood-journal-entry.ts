import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import moment from 'moment';
import {DatabaseProvider} from "../../providers/database/database";

@IonicPage()
@Component({
    selector: 'page-event-modal',
    templateUrl: 'mood-journal-entry.html',
})
export class MoodJournalEntry {

    event = {
        startTime: moment().format(),
        endTime: moment().format(),
        allDay: false,
        mood: 'bad',
        title: ''
    };
    minDate = moment().toISOString();

    constructor(public navCtrl: NavController, private navParams: NavParams, public viewCtrl: ViewController, private databaseprovider: DatabaseProvider) {
        let preselectedDate = moment(this.navParams.get('selectedDay')).format();
        this.event.startTime = preselectedDate;
        this.event.endTime = preselectedDate;
    }

    cancel() {
        this.viewCtrl.dismiss();
    }

    save() {

        this.databaseprovider.connection().executeSql('INSERT INTO mood_journal_entries (date_from, date_until, all_day, mood, entry) VALUES (?,?,?,?,?)', [this.event.startTime, this.event.endTime, this.event.allDay, this.event.mood, this.event.title])
            .then(() => console.log('saved entry'))
            .catch(e => console.error(JSON.stringify(e)));
        this.viewCtrl.dismiss(this.event);
    }


}
