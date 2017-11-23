import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoodTrackerPage } from './mood-tracker';

@NgModule({
  declarations: [
    MoodTrackerPage,
  ],
  imports: [
    IonicPageModule.forChild(MoodTrackerPage),
  ],
})
export class MoodTrackerPageModule {}
