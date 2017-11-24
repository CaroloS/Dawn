import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-mood-tracker',
  templateUrl: 'mood-tracker.html',
})
export class MoodTrackerPage {


  @ViewChild('barCanvas') barCanvas;
    @ViewChild('doughnutCanvas') doughnutCanvas;
    @ViewChild('lineCanvas') lineCanvas;

    barChart: any;
    doughnutChart: any;
    lineChart: any;

    constructor(public navCtrl: NavController) {

    }

    ionViewDidLoad() {


        this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

            type: 'doughnut',
            data: {
                labels: ["Bad", "Good", "OK"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3 ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',

                        'rgba(163, 202, 123, 0.4)',
                        'rgba(255, 206, 86, 0.5)',
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


}
