import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoodMenuPage } from './mood-menu';

@NgModule({
  declarations: [
    MoodMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(MoodMenuPage),
  ],
})
export class MoodMenuPageModule {}
