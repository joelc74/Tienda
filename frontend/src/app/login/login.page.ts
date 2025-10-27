import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private userService: UserService) {}

   goToRegister() {
    this.router.navigate(['/register']);
  }
  onLogin() {
    this.userService.login(this.email, this.password).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token); // Guarda el token JWT
        console.log('Token guardado:', response.token);
        this.router.navigate(['/home']); // Redirige a la página principal
      },
      error => {
        alert('Error en las credenciales');
        console.error('Error en login:', error);
      }
    );
  }
}
