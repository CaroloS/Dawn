import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoodJournalEntry } from './mood-journal-entry';

@NgModule({
  declarations: [
    MoodJournalEntry,
  ],
  imports: [
    IonicPageModule.forChild(MoodJournalEntry),
  ],
})
export class MoodJournalEntryModule {}
