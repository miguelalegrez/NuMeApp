import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrl: './patient-create.component.css',
})
export class PatientCreateComponent {
  onRegister($event: SubmitEvent) {
    throw new Error('Method not implemented.');
  }
  patientDetail: any;
  registerForm: any;
}
