import {Component} from '@angular/core';
import {NavController, ModalController, AlertController} from 'ionic-angular';
import * as moment from 'moment';
import {DatabaseProvider} from "../../providers/database/database";

@Component({
    selector: 'page-mood-journal',
    templateUrl: 'mood-journal.html'
})
export class MoodJournalPage {
    eventSource = [];

    viewTitle: string;
    selectedDay = new Date();

    isToday: boolean;
    calendar = {
        mode: 'month',
        currentDate: new Date(),
        dateFormatter: {
            formatMonthViewDay: function (date: Date) {
                return date.getDate().toString();
            },
            formatMonthViewDayHeader: function (date: Date) {
                return 'MonMH';
            },
            formatMonthViewTitle: function (date: Date) {
                return 'testMT';
            },
            formatWeekViewDayHeader: function (date: Date) {
                return 'MonWH';
            },
            formatWeekViewTitle: function (date: Date) {
                return 'testWT';
            },
            formatWeekViewHourColumn: function (date: Date) {
                return 'testWH';
            },
            formatDayViewHourColumn: function (date: Date) {
                return 'testDH';
            },
            formatDayViewTitle: function (date: Date) {
                return 'testDT';
            }
        }
    };


    constructor(public navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController, private databaseprovider: DatabaseProvider) {
        this.createDb();
        this.getData();
    }


    createDb() {
        this.databaseprovider.connection().executeSql('CREATE TABLE IF NOT EXISTS mood_journal_entries (id INTEGER PRIMARY KEY, date_from DATETIME, date_until DATETIME, all_day BOOL, mood VARCHAR(4), entry TEXT);', {})
            .then(() => console.log('🛠 Create if table doesnt exist'))
            .catch(e => console.log(e));
    }

    getData() {

        // create an empty array for the events from the database
        let events = [];

        // use the database provider to open the SQLite file and query the data. Once this is done, process the results.
        this.databaseprovider.connection().executeSql('SELECT * FROM mood_journal_entries',[]).then(results =>  {

            // if more than zero results are returned from the query...
            if(results.rows.length > 0) {

                // loop through each result by way of an increment counter
                for (var i = 0; i < results.rows.length; i++) {

                    // extract the following variables from each result row for easy use in the following
                    const {entry, date_from, date_until} = results.rows.item(i);

                    // add an object to the empty array created above
                    events.push({
                        title: entry, // db field entry is added as the title key in the object
                        startTime: new Date(date_from), // convert the date from the db into a Javascript Date object
                        endTime: new Date(date_until), // ditto
                        allDay: false // set all day to false, ignoring the database
                    });
                }
            }

            // reset the calendars data feed to an empty array
            this.eventSource = [];

            // wait for a ms before assigning the event array created above to the eventsource (which is picked up by the calendar).
            // the timeout is forcing the calendar to recognise a change in data because when it is first rendered on page load, it is opening the blank array
            setTimeout(()=>this.eventSource = events);
        });
    }
    
    addEvent() {
        let modal = this.modalCtrl.create('MoodJournalEntry', {selectedDay: this.selectedDay});
        modal.present();
        modal.onDidDismiss(data => {
            this.getData()
        });
    }

    onViewTitleChanged(title) {
        this.viewTitle = title;
    }

    onEventSelected(event) {
        let start = moment(event.startTime).format('LLLL');
        let end = moment(event.endTime).format('LLLL');

        let alert = this.alertCtrl.create({
            title: '' + event.title,
            subTitle: 'From: ' + start + '<br>To: ' + end,
            buttons: ['OK']
        })
        alert.present();
    }

    onTimeSelected(ev) {
        this.selectedDay = ev.selectedTime;
    }

}
