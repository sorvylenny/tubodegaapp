import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { User } from 'src/app/admin/interface/user';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls:  ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    email:  ['test1@prueba.com', [Validators.required, Validators.email]],
    password: ['1234567', [Validators.required, Validators.minLength(7)]],
    remember: [false],
   });

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService ){}

  ngOnInit() {}

  login(): void {
    if (this.loginForm.invalid) {
     
      return;
    }

    // El formulario es válido, procedemos con la autenticación
    const { email, password } = this.loginForm.value;
    const user: User = { email, password };

    this.authService.login(user).subscribe(
      success => {
        if (success) {
          // todo: La autenticación fue exitosa
          console.log('Autenticación exitosa');
        } else {
          // todo: La autenticación falló
          console.log('Autenticación fallida');
        }
      },
      error => {
        console.error('Error durante el inicio de sesión:', error);
        // todo: Manejar errores de autenticación
      }
    );
  }
  
  
  
  }
