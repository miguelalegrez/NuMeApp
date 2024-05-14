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

import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';
import { NutritionistCreateComponent } from './pages/nutri-create/nutritionist-create/nutritionist-create.component';
import { NutritionistDetailComponent } from './pages/nutri-detail/nutritionist-detail/nutritionist-detail.component';
import { NutritionistManagementComponent } from './pages/nutri-management/nutritionist-management/nutritionist-management.component';
import { NutritionistListComponent } from './pages/nutri-list/nutritrionist-list/nutritionist-list.component';
import { NutritionistsRoutingModule } from './nutritionists.routing.module';

@NgModule({
  declarations: [
    NutritionistCreateComponent,
    NutritionistDetailComponent,
    NutritionistManagementComponent,
    NutritionistListComponent,
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
    NutritionistsRoutingModule,
  ],
})
export class NutritionistsModule {}
