import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { Login } from '../../interface/login';



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
    const required: Login = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
  
    this.authService.login(required).subscribe(
      (response) => {
        if (response) {
          // Comparar roles después de iniciar sesión
          this.handleRoleBasedRedirect();
        }
      },
      (error) => {
        // Manejar errores de la solicitud de inicio de sesión
        console.error('Error en el inicio de sesión', error);
      }
    );
  }

  private handleRoleBasedRedirect(): void {
    // Obtener roles desde el localStorage
    const userRoles: string | null = localStorage.getItem('roles');
  
    if (userRoles) {
      // Realizar comparaciones basadas en roles
      if (userRoles.includes('admin')) {
        // Redirigir a la página de administrador
        this.router.navigate(['admin']);
      } else {
        // Redirigir a la página de la tienda u otro lugar según tus necesidades
        this.router.navigate(['store']);
      }
    } else {
      // Manejar el caso en el que no se encuentren roles en el localStorage
      console.error('No se encontraron roles en el localStorage después de iniciar sesión.');
    }
  }
}
