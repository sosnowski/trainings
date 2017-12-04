import { Component, OnInit } from '@angular/core';
import { MailsService } from '../../core/services/mails.service';
import { Observable } from 'rxjs/Observable';
import { Mail } from '../../core/models/mail';

@Component({
  selector: 'app-mails-list',
  templateUrl: './mails-list.component.html',
  styleUrls: ['./mails-list.component.css']
})
export class MailsListComponent implements OnInit {

  mails: Observable<Mail[]>;

  constructor(private mailsService: MailsService) { }

  ngOnInit() {
    this.mails = this.mailsService.getAll();
  }

}
