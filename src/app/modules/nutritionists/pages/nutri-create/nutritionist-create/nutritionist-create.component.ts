import { Component } from '@angular/core';

@Component({
  selector: 'app-nutritionist-create',
  templateUrl: './nutritionist-create.component.html',
  styleUrl: './nutritionist-create.component.css',
})
export class NutritionistCreateComponent {
  onRegister($event: SubmitEvent) {
    throw new Error('Method not implemented.');
  }
  patientDetail: any;
  registerForm: any;
}
