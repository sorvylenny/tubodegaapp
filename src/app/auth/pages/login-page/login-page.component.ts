import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    remember: [false],
  });

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit() { }

  login(): void {
    if (this.loginForm.invalid) {

      return;
    }

    // El formulario es válido, procedemos con la autenticación
    const { email, password } = this.loginForm.value;
   

    this.authService.login(email,password).subscribe(
      (response) => {
        if (response) {

        } 
      },
      (error) => {
        // Manejar errores de la solicitud de inicio de sesión
        console.error('Error en el inicio de sesión', error);
      }
    );
  }
}
