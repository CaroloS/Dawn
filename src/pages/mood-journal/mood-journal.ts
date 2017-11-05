import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import * as moment from 'moment';


@Component({
  selector: 'page-mood-journal',
  templateUrl: 'mood-journal.html'
})
export class MoodJournalPage {
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  isToday:boolean;
   calendar = {
       mode: 'month',
       currentDate: new Date(),
       dateFormatter: {
           formatMonthViewDay: function(date:Date) {
               return date.getDate().toString();
           },
           formatMonthViewDayHeader: function(date:Date) {
               return 'MonMH';
           },
           formatMonthViewTitle: function(date:Date) {
               return 'testMT';
           },
           formatWeekViewDayHeader: function(date:Date) {
               return 'MonWH';
           },
           formatWeekViewTitle: function(date:Date) {
               return 'testWT';
           },
           formatWeekViewHourColumn: function(date:Date) {
               return 'testWH';
           },
           formatDayViewHourColumn: function(date:Date) {
               return 'testDH';
           },
           formatDayViewTitle: function(date:Date) {
               return 'testDT';
           }
       }
   };


  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  addEvent() {
    let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay});
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        let eventData = data;

        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);

        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
        });
      }
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

  changeMode(mode) {
      this.calendar.mode = mode;
  }



}
