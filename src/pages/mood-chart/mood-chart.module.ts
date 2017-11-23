import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoodChartPage } from './mood-chart';

@NgModule({
  declarations: [
    MoodChartPage,
  ],
  imports: [
    IonicPageModule.forChild(MoodChartPage),
  ],
})
export class MoodChartPageModule {}
