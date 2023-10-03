import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls:  ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  formUser!: FormGroup;
  enviarButtonDisabled: boolean = true;
  
  userFormFields = [
    { name: 'fullName', label: 'Nombre Completo', type: 'text' },
    { name: 'email', label: 'Correo', type: 'email' },
    { name: 'userName', label: 'Usuario', type: 'text' },
    { name: 'password', label: 'Contraseña', type: 'password' },
    { name: 'confirmPassword', label: 'Confirmar Contraseña', type: 'password' },
    { name: 'address', label: 'Direccion', type: 'text' },
    { name: 'country', label: 'País', type: 'text' },
    { name: 'city', label: 'Ciudad', type: 'text' },
    { name: 'phone', label: 'Telefono', type: 'text' },
  ];
  formTitle = 'Registro de Usuario'; // Título del formulario

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService){}



   ngOnInit() {
    this.initForm();
   }

   initForm() {
    this.formUser = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3)] ],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password:   ['', Validators.required],
      confirmPassword : ['', Validators.required],
      address: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      phone:  ['', Validators.required],
      
    }, {
      validator: this.camposIguales('password', 'confirmPassword')
      
    }); 
    this.formUser.statusChanges.subscribe((status) => {
      this.enviarButtonDisabled = status !== 'VALID';
    });
    
   }

   regresar(){
    this.router.navigate(['./store']);
   }
   
   enviar() {
    this.enviarButtonDisabled = false;
  
    if (this.formUser.valid) {
      const userData = this.formUser.value;
  
      this.authService.registerUser(userData)
        .pipe(
          catchError(error => {
            console.error('Ocurrió un error:', error);
            // También podrías mostrar un mensaje en el DOM si lo deseas
            // this.mostrarMensajeEnDOM('Ocurrió un error: ' + error.message);
            return throwError('Hubo un error en la solicitud. Por favor, inténtalo de nuevo más tarde.');
          })
        )
        .subscribe(
          (ok) => {
            if (ok) {
              this.router.navigateByUrl('./store');
              console.log(ok)
            } else {
              console.error('Ocurrió un error al registrar al usuario');
            }
          }
        );
    }
  }
  
  

  camposIguales(campo1: string, campo2: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const pass1 = control.get(campo1)?.value;
      const pass2 = control.get(campo2)?.value;
  
      if (pass1 !== pass2) {
        control.get(campo2)?.setErrors({ noIguales: true });
        return { noIguales: true, message:'Las contraseñas no coinciden' };
      }
  
      control.get(campo2)?.setErrors(null);
      return null;
    };
  
  }
}