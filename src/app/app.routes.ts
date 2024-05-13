import { Routes } from '@angular/router';
import { PatientListComponent } from './modules/patients/pages/patient-list/patient-list.component';

export const routes: Routes = [
  {
    path: '',
    component: PatientListComponent,
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'patients',
    loadChildren: () =>
      import('./modules/patients/patients.module').then(
        (m) => m.PatientsModule
      ),
  },
];
