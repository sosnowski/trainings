import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './components/entry/entry.component';
import { MailsListComponent } from './mails-list/mails-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EntryComponent, MailsListComponent]
})
export class MailsModule { }
