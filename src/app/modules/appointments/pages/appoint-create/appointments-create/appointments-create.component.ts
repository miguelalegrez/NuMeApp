import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointments-create',
  templateUrl: './appointments-create.component.html',
  styleUrl: './appointments-create.component.css',
})
export class AppointmentsCreateComponent {
  createForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      patientName: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onCreate(event: Event): void {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario al backend
    console.log(
      'Formulario de creación de cita enviado:',
      this.createForm.value
    );
    // Después de enviar los datos, puedes redirigir a la lista de citas u otra página
    this.router.navigate(['/appointments/list']);
  }
}
