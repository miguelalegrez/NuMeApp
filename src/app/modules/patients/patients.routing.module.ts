// patients-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientListComponent } from './pages/patient-list/patient-list.component';
import { PatientDetailComponent } from './pages/patient-detail/patient-detail.component';
import { PatientCreateComponent } from './pages/patient-create/patient-create.component';

const routes: Routes = [
  { path: 'list', component: PatientListComponent },
  { path: 'detail/:id', component: PatientDetailComponent },
  { path: 'patient-create', component: PatientCreateComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsRoutingModule {}
