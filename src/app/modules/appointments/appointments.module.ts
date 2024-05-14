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

import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';
import { AppointmentsRoutingModule } from './appointments.routing.module';
import { AppointmentsCreateComponent } from './pages/appoint-create/appointments-create/appointments-create.component';
import { AppointmentsDetailComponent } from './pages/appoint-detail/appointments-detail/appointments-detail.component';
import { AppointmentsManagementComponent } from './pages/appoint-management/appointments-management/appointments-management.component';
import { BackButtonPageContainerComponent } from '../../shared/components/back-button-page-container/back-button-page-container.component';
import { AppointmentsListComponent } from './pages/appoint-list/appointments-list/appointments-list.component';

@NgModule({
  declarations: [
    AppointmentsCreateComponent,
    AppointmentsDetailComponent,
    AppointmentsManagementComponent,
    AppointmentsListComponent,
  ],
  imports: [
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
    ReactiveFormsModule,
    AuthModule,
    AppointmentsRoutingModule,
    BackButtonPageContainerComponent,
  ],
})
export class AppointmentsModule {}
