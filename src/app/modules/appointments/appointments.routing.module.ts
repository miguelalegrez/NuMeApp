// patients-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentsListComponent } from './pages/appoint-list/appointments-list/appointments-list.component';
import { AppointmentsDetailComponent } from './pages/appoint-detail/appointments-detail/appointments-detail.component';
import { AppointmentsCreateComponent } from './pages/appoint-create/appointments-create/appointments-create.component';

const routes: Routes = [
  { path: 'list', component: AppointmentsListComponent },
  { path: 'detail/:id', component: AppointmentsDetailComponent },
  { path: 'appointment-create', component: AppointmentsCreateComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentsRoutingModule {}
