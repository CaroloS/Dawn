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
    }

    ngOnInit() {
        this.getData()
    }

    getData() {
        let events = [];
        this.databaseprovider.connection().executeSql('SELECT * FROM mood_journal_entries',[]).then(results =>  {
            if(results.rows.length > 0) {
                for (var i = 0; i < results.rows.length; i++) {
                    const {entry, date_from, date_until} = results.rows.item(i);
                    events.push({
                        title: entry,
                        startTime: new Date(date_from),
                        endTime: new Date(date_until),
                        allDay: false
                    });
                }
                console.log(JSON.stringify(events))
            }
            this.eventSource = [];
            setTimeout(()=>this.eventSource = events);
        });
    }
    
    addEvent() {
        let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay});
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
