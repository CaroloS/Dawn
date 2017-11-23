import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdviceServicesPage } from '../advice-services/advice-services';
import { InACrisisPage } from '../in-acrisis/in-acrisis';
import { CarerSupportPage } from '../carer-support/carer-support';
import { KnowYourRightsPage } from '../know-your-rights/know-your-rights';
import { FindAServicePage } from '../find-aservice/find-aservice';
import { SelfHelpPage } from '../self-help/self-help';
import { WhatIsSelfHelpPage } from '../what-is-self-help/what-is-self-help';
import { MindfulnessPage } from '../mindfulness/mindfulness';
import { NhsSelfHelpLeafletsPage } from '../nhs-self-help-leaflets/nhs-self-help-leaflets';
import { InspirationalVideosPage } from '../inspirational-videos/inspirational-videos';
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
import { MoodJournalPage } from '../mood-journal/mood-journal';
import { RelaxSpacePage } from '../relax-space/relax-space';
import { MoodMenuPage } from '../mood-menu/mood-menu';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  constructor(public navCtrl: NavController) {
  }
  goToAdviceServices(params){
    if (!params) params = {};
    this.navCtrl.push(AdviceServicesPage);
  }goToInACrisis(params){
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
  }goToSelfHelp(params){
    if (!params) params = {};
    this.navCtrl.push(SelfHelpPage);
  }goToWhatIsSelfHelp(params){
    if (!params) params = {};
    this.navCtrl.push(WhatIsSelfHelpPage);
  }goToMindfulness(params){
    if (!params) params = {};
    this.navCtrl.push(MindfulnessPage);
  }goToNhsSelfHelpLeaflets(params){
    if (!params) params = {};
    this.navCtrl.push(NhsSelfHelpLeafletsPage);
  }goToInspirationalVideos(params){
    if (!params) params = {};
    this.navCtrl.push(InspirationalVideosPage);
  }goToAbuse(params){
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
  }goToMoodJournal(params){
    if (!params) params = {};
    this.navCtrl.push(MoodMenuPage);
  }goToRelaxSpace(params){
    if (!params) params = {};
    this.navCtrl.push(RelaxSpacePage);
  }
}
