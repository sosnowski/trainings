import { Component, OnInit } from '@angular/core';
import { MailsService } from '../../core/services/mails.service';
import { MailForm } from '../../core/models/mail-form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mail-form',
  templateUrl: './mail-form.component.html',
  styleUrls: ['./mail-form.component.css']
})
export class MailFormComponent implements OnInit {

  formData: MailForm = {
    title: '',
    content: '',
    created: null
  };
  isLoading: boolean = false;

  constructor(private mailService: MailsService, private router: Router) { }

  ngOnInit() {

  }

  async saveEmail() {
    this.isLoading = true;
    try {
      await this.mailService.save({
        ...this.formData,
        created: new Date
      }).toPromise();
      this.router.navigate(['/mails']);
    }
    catch(e) {
      console.error(e.message);
    }
    finally {
      this.isLoading = false;
    }
  }

}
