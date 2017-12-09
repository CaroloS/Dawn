import {Component, ViewChild} from '@angular/core';
import {NavController, ModalController, AlertController} from 'ionic-angular';
import * as moment from 'moment';
import {DatabaseProvider} from "../../providers/database/database";
import {Chart} from 'chart.js';

@Component({
  selector: 'page-mood-journal',
  templateUrl: 'mood-journal.html'
})
export class MoodJournalPage {

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;

  doughnutChart: any;

  // eventSource initiates an empty array which will hold the calender data retrieved from the SQLite database
  eventSource = [];

  // initialises the Title as a string variable type
  viewTitle: string;
  // initiates the variable selectedDay as today's date and time by default
  selectedDay = new Date();

  // object assigned to calendar variable
  calendar = {
    // mode sets calendar to month view
    mode: 'month',
    // currentDate sets the date to today
    currentDate: new Date(),
    // dateFormatter sets of the format of the date displayed in the calender
    dateFormatter: {
      formatWeekViewDayHeader: function (date: Date) {
        return 'MonWH';
      }
    }
  };

  // constructors are the first element called when the module is displayed; this implements other modules so they can be used to display and create the calender's functionality
  // setTimeout waits 500 ms before opening a connection to the SQLite database to prevent the likelihood of runtime errors
  // a connection to the database is created and data is fetched
  // if an error occurs, the exception catches this and logs it in the console, displaying it as a string
  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController, private databaseprovider: DatabaseProvider) {
    setTimeout(() => {
      this.createDb().then(() => this.getData()).catch(e => console.log(JSON.stringify(e)));
      ;
    }, 500);
  }

  ionViewDidLoad() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

      type: 'doughnut',
      data: {
        labels: ["Bad", "Good", "OK"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
          ]
        }]
      }
    });
  }

  // this function establishes a connection to a SQLite database if one doesn't already exist; this database includes an id, date from, date until, all day, mood and entry variables
  createDb() {
    return this.databaseprovider.connection().executeSql('CREATE TABLE IF NOT EXISTS mood_journal_entries (id INTEGER PRIMARY KEY, date_from DATETIME, date_until DATETIME, all_day BOOL, mood VARCHAR(4), entry TEXT);', {})
  }

  // gets data from the database and assigns it to the eventSource variable
  getData() {

    // create an empty array for the events from the database
    let events = [];

    // use the database provider to open the SQLite file and query the data. Once this is done, process the results.
    this.databaseprovider.connection().executeSql('SELECT * FROM mood_journal_entries', []).then(results => {

      // if more than zero results are returned from the query...
      if (results.rows.length > 0) {

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

      // wait for a ms before assigning the event array created above to the eventSource (which is picked up by the calendar).
      // the timeout is forcing the calendar to recognise a change in data because when it is first rendered on page load, it is opening the blank array
      setTimeout(() => this.eventSource = events);
    }).catch(e => console.error(JSON.stringify(e)));
  }

  // called when the 'Add entry' button is pushed; this displays the MoodJournalEntry module
  addEvent() {
    let modal = this.modalCtrl.create('MoodJournalEntry', {selectedDay: this.selectedDay});
    modal.present();
    modal.onDidDismiss(data => {
      this.getData()
    });
  }

  // when users scroll through the calender to a different month, the name of the month viewed is displayed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  // when an journal entry is selected, this presents the entry information
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

  // for a selected date in the calender, this changes the selected day and displays the day's entries
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }

}
