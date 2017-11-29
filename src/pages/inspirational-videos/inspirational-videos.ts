import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AbusePage } from '../abuse/abuse';
import { AlcoholAndYouPage } from '../alcohol-and-you/alcohol-and-you';
import { AnxietyPage } from '../anxiety/anxiety';
import { BereavementPage } from '../bereavement/bereavement';
import { ControllingAngerPage } from '../controlling-anger/controlling-anger';
import { DepressionAndLowMoodPage } from '../depression-and-low-mood/depression-and-low-mood';
import { DomesticViolencePage } from '../domestic-violence/domestic-violence';
import { EatingDisordersPage } from '../eating-disorders/eating-disorders';
import { FoodForThoughtPage } from '../food-for-thought/food-for-thought';
import { HealthAnxietyPage } from '../health-anxiety/health-anxiety';
import { HearingVoicesAndDisturbingBeliefsPage } from '../hearing-voices-and-disturbing-beliefs/hearing-voices-and-disturbing-beliefs';
import { ObsessionsAndCompulsionsPage } from '../obsessions-and-compulsions/obsessions-and-compulsions';
import { PanicPage } from '../panic/panic';
import { PostTraumaticStressPage } from '../post-traumatic-stress/post-traumatic-stress';
import { PostnatalDepressionPage } from '../postnatal-depression/postnatal-depression';
import { SelfHarmPage } from '../self-harm/self-harm';
import { SocialAnxietyPage } from '../social-anxiety/social-anxiety';
import { SleepingProblemsPage } from '../sleeping-problems/sleeping-problems';
import { StressPage } from '../stress/stress';

@Component({
  selector: 'page-inspirational-videos',
  templateUrl: 'inspirational-videos.html'
})
export class InspirationalVideosPage {

  constructor(public navCtrl: NavController) {
  	
  }
  
  goToAbuse(params){
    if (!params) params = {};
    this.navCtrl.push(AbusePage);
  }goToAlcoholAndYou(params){
    if (!params) params = {};
    this.navCtrl.push(AlcoholAndYouPage);
  }goToAnxiety(params){
    if (!params) params = {};
    this.navCtrl.push(AnxietyPage);
  }goToBereavement(params){
    if (!params) params = {};
    this.navCtrl.push(BereavementPage);
  }goToControllingAnger(params){
    if (!params) params = {};
    this.navCtrl.push(ControllingAngerPage);
  }goToDepressionAndLowMood(params){
    if (!params) params = {};
    this.navCtrl.push(DepressionAndLowMoodPage);
  }goToDomesticViolence(params){
    if (!params) params = {};
    this.navCtrl.push(DomesticViolencePage);
  }goToEatingDisorders(params){
    if (!params) params = {};
    this.navCtrl.push(EatingDisordersPage);
  }goToFoodForThought(params){
    if (!params) params = {};
    this.navCtrl.push(FoodForThoughtPage);
  }goToHealthAnxiety(params){
    if (!params) params = {};
    this.navCtrl.push(HealthAnxietyPage);
  }goToHearingVoicesAndDisturbingBeliefs(params){
    if (!params) params = {};
    this.navCtrl.push(HearingVoicesAndDisturbingBeliefsPage);
  }goToObsessionsAndCompulsions(params){
    if (!params) params = {};
    this.navCtrl.push(ObsessionsAndCompulsionsPage);
  }goToPanic(params){
    if (!params) params = {};
    this.navCtrl.push(PanicPage);
  }goToPostTraumaticStress(params){
    if (!params) params = {};
    this.navCtrl.push(PostTraumaticStressPage);
  }goToPostnatalDepression(params){
    if (!params) params = {};
    this.navCtrl.push(PostnatalDepressionPage);
  }goToSelfHarm(params){
    if (!params) params = {};
    this.navCtrl.push(SelfHarmPage);
  }goToSocialAnxiety(params){
    if (!params) params = {};
    this.navCtrl.push(SocialAnxietyPage);
  }goToSleepingProblems(params){
    if (!params) params = {};
    this.navCtrl.push(SleepingProblemsPage);
  }goToStress(params){
    if (!params) params = {};
    this.navCtrl.push(StressPage);
  }
}
