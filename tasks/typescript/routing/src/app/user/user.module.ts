import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UsersListComponent } from './users-list/users-list.component';

let moduleRoutes: Routes = [

]

@NgModule({
  declarations: [
    UserComponent,
    UsersListComponent
  ],
  imports: [

  ],
  providers: []
})
export class UserModule { }
