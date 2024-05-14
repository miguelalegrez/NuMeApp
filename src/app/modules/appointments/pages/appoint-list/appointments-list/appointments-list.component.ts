import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../../../../../core/services/appointment.service';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrl: './appointments-list.component.css',
})
export class AppointmentsListComponent {
  displayedColumns: string[] = ['paciente', 'nutricionista', 'fecha'];

  constructor(
    private router: Router,
    private appointmentService: AppointmentService
  ) {}

  ngOnInit(): void {
    // Aquí puedes llamar al servicio para obtener los datos de las citas y asignarlos a this.dataSource
    this.dataSource = this.appointmentService.getAppointments(); // Por ejemplo, asumiendo que tienes un método getAppointments() en tu servicio
  }

  searchAppointment(): void {
    // Lógica para buscar citas
  }

  navigateToCreateAppointment(): void {
    this.router.navigate(['/appointments/appointment-create']);
  }

  viewAppointmentDetails(): void {
    // Lógica para ver detalles de la cita
  }
  dataSource: any[] = [
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
