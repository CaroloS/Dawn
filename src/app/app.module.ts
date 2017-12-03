import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {MenuPage} from '../pages/menu/menu';
import {YoutubePipe} from '../pipes/youtube/youtube';
import {SelfHelpPage} from '../pages/self-help/self-help';
import {WhatIsSelfHelpPage} from '../pages/what-is-self-help/what-is-self-help';
import {MindfulnessPage} from '../pages/mindfulness/mindfulness';
import {NhsSelfHelpLeafletsPage} from '../pages/nhs-self-help-leaflets/nhs-self-help-leaflets';
import {AdviceServicesPage} from '../pages/advice-services/advice-services';
import {InACrisisPage} from '../pages/in-acrisis/in-acrisis';
import {CarerSupportPage} from '../pages/carer-support/carer-support';
import {KnowYourRightsPage} from '../pages/know-your-rights/know-your-rights';
import {FindAServicePage} from '../pages/find-aservice/find-aservice';
import {MoodJournalPage} from '../pages/mood-journal/mood-journal';
import {RelaxSpacePage} from '../pages/relax-space/relax-space';
import {ListenPage} from '../pages/listen/listen';
import {InspirationalVideosPage} from '../pages/inspirational-videos/inspirational-videos';
import {PositiveVisualisationPage} from '../pages/positive-visualisation/positive-visualisation';
import {MentalhealthfeelslikePage} from '../pages/mentalhealthfeelslike/mentalhealthfeelslike';
import {AbusePage} from '../pages/abuse/abuse';
import {AlcoholAndYouPage} from '../pages/alcohol-and-you/alcohol-and-you';
import {AnxietyPage} from '../pages/anxiety/anxiety';
import {BereavementPage} from '../pages/bereavement/bereavement';
import {ControllingAngerPage} from '../pages/controlling-anger/controlling-anger';
import {DepressionAndLowMoodPage} from '../pages/depression-and-low-mood/depression-and-low-mood';
import {DomesticViolencePage} from '../pages/domestic-violence/domestic-violence';
import {EatingDisordersPage} from '../pages/eating-disorders/eating-disorders';
import {FoodForThoughtPage} from '../pages/food-for-thought/food-for-thought';
import {HearingVoicesAndDisturbingBeliefsPage} from '../pages/hearing-voices-and-disturbing-beliefs/hearing-voices-and-disturbing-beliefs';
import {HealthAnxietyPage} from '../pages/health-anxiety/health-anxiety';
import {ObsessionsAndCompulsionsPage} from '../pages/obsessions-and-compulsions/obsessions-and-compulsions';
import {PanicPage} from '../pages/panic/panic';
import {PostTraumaticStressPage} from '../pages/post-traumatic-stress/post-traumatic-stress';
import {PostnatalDepressionPage} from '../pages/postnatal-depression/postnatal-depression';
import {SelfHarmPage} from '../pages/self-harm/self-harm';
import {SocialAnxietyPage} from '../pages/social-anxiety/social-anxiety';
import {SleepingProblemsPage} from '../pages/sleeping-problems/sleeping-problems';
import {StressPage} from '../pages/stress/stress';
import {MotivationalQuotesPage} from '../pages/motivational-quotes/motivational-quotes';


import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {NgCalendarModule} from 'ionic2-calendar';
import {SQLite} from '@ionic-native/sqlite';
import {DatabaseProvider} from "../providers/database/database";
import { DocumentViewer } from '@ionic-native/document-viewer';


@NgModule({
    declarations: [
        MyApp,
        MenuPage,
        SelfHelpPage,
        WhatIsSelfHelpPage,
        MindfulnessPage,
        NhsSelfHelpLeafletsPage,
        AdviceServicesPage,
        InACrisisPage,
        CarerSupportPage,
        KnowYourRightsPage,
        FindAServicePage,
        MoodJournalPage,
        RelaxSpacePage,
        ListenPage,
        InspirationalVideosPage,
        PositiveVisualisationPage,
        MentalhealthfeelslikePage,
        AbusePage,
        AlcoholAndYouPage,
        AnxietyPage,
        BereavementPage,
        ControllingAngerPage,
        DepressionAndLowMoodPage,
        DomesticViolencePage,
        EatingDisordersPage,
        FoodForThoughtPage,
        HearingVoicesAndDisturbingBeliefsPage,
        HealthAnxietyPage,
        ObsessionsAndCompulsionsPage,
        PanicPage,
        PostTraumaticStressPage,
        PostnatalDepressionPage,
        SelfHarmPage,
        SocialAnxietyPage,
        SleepingProblemsPage,
        StressPage,
        YoutubePipe,
        MotivationalQuotesPage
        
    ],
    imports: [
        NgCalendarModule,
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        MenuPage,
        SelfHelpPage,
        WhatIsSelfHelpPage,
        MindfulnessPage,
        NhsSelfHelpLeafletsPage,
        AdviceServicesPage,
        InACrisisPage,
        CarerSupportPage,
        KnowYourRightsPage,
        FindAServicePage,
        MoodJournalPage,
        RelaxSpacePage,
        ListenPage,
        InspirationalVideosPage,
        PositiveVisualisationPage,
        MentalhealthfeelslikePage,
        AbusePage,
        AlcoholAndYouPage,
        AnxietyPage,
        BereavementPage,
        ControllingAngerPage,
        DepressionAndLowMoodPage,
        DomesticViolencePage,
        EatingDisordersPage,
        FoodForThoughtPage,
        HearingVoicesAndDisturbingBeliefsPage,
        HealthAnxietyPage,
        ObsessionsAndCompulsionsPage,
        PanicPage,
        PostTraumaticStressPage,
        PostnatalDepressionPage,
        SelfHarmPage,
        SocialAnxietyPage,
        SleepingProblemsPage,
        StressPage,
        MotivationalQuotesPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        InAppBrowser,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        SQLite,
        DatabaseProvider
    ]
})
export class AppModule {
}
