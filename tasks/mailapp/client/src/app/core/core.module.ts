import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MailsService } from './services/mails.service';
import { UserService } from './services/user.service';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [
    HeaderComponent
  ],
  providers: [
    MailsService,
    UserService
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
