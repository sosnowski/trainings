import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loadUser();
  }

  async loadUser() {
    this.user = await this.userService.getUser();
  }

  goToNew() {
    this.router.navigate(['/create']);
  }

  goToList() {
    this.router.navigate(['/mails']);
  }

}
