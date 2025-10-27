import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  ngOnInit() { }

  goToLogin() {
    this.router.navigate(['/login']);
  }


  onRegister() {
    if (this.registerForm.invalid) {
      alert('Por favor, completa correctamente el formulario.');
      return;
    }

    const { email, password, confirmPassword } = this.registerForm.value;

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    const userData = { email, password };

    this.httpClient.post('http://localhost:8080/api/users/register', userData)
      .subscribe(
        response => {
          console.log('Usuario registrado:', response);
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Error al registrar:', error);
          alert('Error al registrar el usuario.');
        }
      );
  }
}
