import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListenPage } from '../listen/listen';
import { MotivationalQuotesPage } from '../motivational-quotes/motivational-quotes';
import { PositiveVisualisationPage } from '../positive-visualisation/positive-visualisation';
import { MentalhealthfeelslikePage } from '../mentalhealthfeelslike/mentalhealthfeelslike';

@Component({
  selector: 'page-relax-space',
  templateUrl: 'relax-space.html'
})
export class RelaxSpacePage {

  constructor(public navCtrl: NavController) {
  }
  goToListen(){
    this.navCtrl.push(ListenPage);
  }
  goToMotivationalQuotes(){
    this.navCtrl.push(MotivationalQuotesPage);
  }
  goToPositiveVisualisation(){
    this.navCtrl.push(PositiveVisualisationPage);
  }
  goToMentalhealthfeelslike(){
    this.navCtrl.push(MentalhealthfeelslikePage);
  }
}
