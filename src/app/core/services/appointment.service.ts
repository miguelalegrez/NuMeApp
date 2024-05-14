import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor() {}

  // Simulación de datos de citas
  getAppointments(): any[] {
    return [
      {
        paciente: 'Juan Pérez',
        nutricionista: 'María García',
        fecha: '2024-05-20',
      },
      {
        paciente: 'Ana López',
        nutricionista: 'Pedro Martínez',
        fecha: '2024-05-21',
      },
      // Agrega más datos según necesites
    ];
  }
}
