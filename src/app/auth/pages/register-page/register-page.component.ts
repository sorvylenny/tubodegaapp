import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls:  ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  formUser!: FormGroup;
  
  userFormFields = [
    { name: 'nombre', label: 'Nombre Completo', type: 'text' },
    { name: 'email', label: 'Correo', type: 'email' },
    { name: 'userName', label: 'Usuario', type: 'text' },
    { name: 'password', label: 'Contraseña', type: 'password' },
    { name: 'confirmPassword', label: 'Confirmar Contraseña', type: 'password' },
    { name: 'address', label: 'Direccion', type: 'text' },
    { name: 'phone', label: 'Telefono', type: 'text' },
  ];
  formTitle = 'Registro de Usuario'; // Título del formulario

  constructor(private formBuilder: FormBuilder,
              private router: Router){}



   ngOnInit() {
    this.initForm();
   }

   initForm() {
    this.formUser = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)] ],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      password:   ['', Validators.required],
      confirmPassword : ['', Validators.required],
      address: ['', Validators.required],
      phone:  ['', Validators.required],
    });
   }

   regresar(){
    this.router.navigate(['./store']);
   }

}
