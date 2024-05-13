import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent {
  constructor(private router: Router) {}
  searchPatient() {}
  navigateToCreatePatient() {
    this.router.navigate(['patients/patient-create']);
  }
  viewUserDetails() {}

  displayedColumns: string[] = [
    'dni',
    'nombre',
    'apellidos',
    'estatura',
    'kg',
    'fechaNacimiento',
  ];

  // Usamos MatTableDataSource para manejar los datos de la tabla
  dataSource = new MatTableDataSource([
    {
      dni: '12345678A',
      nombre: 'Juan',
      apellidos: 'García Pérez',
      estatura: 170,
      kg: 70,
      fechaNacimiento: '1990-05-15',
    },
    {
      dni: '98765432B',
      nombre: 'María',
      apellidos: 'López Martínez',
      estatura: 160,
      kg: 60,
      fechaNacimiento: '1985-12-10',
    },
    {
      dni: '56789123C',
      nombre: 'Pedro',
      apellidos: 'Fernández Sánchez',
      estatura: 180,
      kg: 80,
      fechaNacimiento: '1978-08-20',
    },
    {
      dni: '12345678A',
      nombre: 'Juan',
      apellidos: 'García Pérez',
      estatura: 170,
      kg: 70,
      fechaNacimiento: '1990-05-15',
    },
    {
      dni: '98765432B',
      nombre: 'María',
      apellidos: 'López Martínez',
      estatura: 160,
      kg: 60,
      fechaNacimiento: '1985-12-10',
    },
    {
      dni: '56789123C',
      nombre: 'Pedro',
      apellidos: 'Fernández Sánchez',
      estatura: 180,
      kg: 80,
      fechaNacimiento: '1978-08-20',
    },
    // Otros datos aquí...
  ]);
}
