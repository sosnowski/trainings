import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MailsService } from '../../core/services/mails.service';
import { Observable } from 'rxjs/Observable';
import { Mail } from '../../core/models/mail';

@Component({
  selector: 'app-view-mail',
  templateUrl: './view-mail.component.html',
  styleUrls: ['./view-mail.component.css']
})
export class ViewMailComponent implements OnInit {

  mail: Mail;

  constructor(private router: Router, private route: ActivatedRoute, private mailsService: MailsService) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => {
      return this.mailsService.getById(params.id);
    }).subscribe((record) => {
      this.mail = record;
    });
  }

}
