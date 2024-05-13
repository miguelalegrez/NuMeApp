import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { SharedRoutingModule } from '../../shared/shared-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { PatientDetailComponent } from './pages/patient-detail/patient-detail.component';
import { PatientListComponent } from './pages/patient-list/patient-list.component';
import { PatientsRoutingModule } from './patients.routing.module';
import { PatientsManagementComponent } from './pages/patient-management/patients-management.component';
import { PatientCreateComponent } from './pages/patient-create/patient-create.component';

@NgModule({
  declarations: [
    PatientListComponent,
    PatientDetailComponent,
    PatientsManagementComponent,
    PatientCreateComponent,
  ],
  imports: [
    PatientsRoutingModule,
    SharedModule,
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    SharedRoutingModule,
    MatIconModule,
  ],
})
export class PatientsModule {}
