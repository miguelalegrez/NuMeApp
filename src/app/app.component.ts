import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { HeaderComponent } from './shared/components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent, CommonModule],
})
export class AppComponent implements OnInit {
  title = 'NuMeApp';

  constructor(private _authService: AuthService) {}
  ngOnInit(): void {
    this._checkAndSetUser();
  }
  // Inicializamos la aplicacion y comprobamos si hay un usuario en local storage.
  private _checkAndSetUser() {
    const user = localStorage.getItem('user');
    if (user) {
      this._authService.setUser(JSON.parse(user));
    }
  }
}
