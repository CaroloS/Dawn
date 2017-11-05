import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InACrisisPage } from '../in-acrisis/in-acrisis';
import { CarerSupportPage } from '../carer-support/carer-support';
import { KnowYourRightsPage } from '../know-your-rights/know-your-rights';
import { FindAServicePage } from '../find-aservice/find-aservice';

@Component({
  selector: 'page-advice-services',
  templateUrl: 'advice-services.html'
})
export class AdviceServicesPage {

  constructor(public navCtrl: NavController) {
  }
  goToInACrisis(params){
    if (!params) params = {};
    this.navCtrl.push(InACrisisPage);
  }goToCarerSupport(params){
    if (!params) params = {};
    this.navCtrl.push(CarerSupportPage);
  }goToKnowYourRights(params){
    if (!params) params = {};
    this.navCtrl.push(KnowYourRightsPage);
  }goToFindAService(params){
    if (!params) params = {};
    this.navCtrl.push(FindAServicePage);
  }
}
