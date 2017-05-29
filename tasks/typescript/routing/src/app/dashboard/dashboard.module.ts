import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

let moduleRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent
    }
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
      RouterModule.forChild(moduleRoutes)
  ],
  providers: []
})
export class DashboardModule { }
