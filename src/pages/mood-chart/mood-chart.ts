import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@IonicPage()
@Component({
  selector: 'page-mood-chart',
  templateUrl: 'mood-chart.html',
})
export class MoodChartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoodChartPage');
	this.sqlite.create({
	  name: 'data.db',
	  location: 'default'
	})
	  .then((db: SQLiteObject) => {


	    db.executeSql('create table danceMoves(name VARCHAR(32))', {})
	      .then(() => console.log('Executed SQL'))
	      .catch(e => console.log(e));


	  })
	  .catch(e => console.log(e));
  }

}
