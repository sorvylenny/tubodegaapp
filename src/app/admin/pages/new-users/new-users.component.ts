import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators,} from '@angular/forms';
import { Router } from '@angular/router';

interface Rols {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.css'],
})
export class NewUsersComponent {

  formUser!: FormGroup;

  roles: Rols[] = [
    {value: 'admin-0', viewValue: 'Admin'},
    {value: 'user-1', viewValue: 'User'},
  ];


  userFormFields = [
    { name: 'nombre', label: 'Nombre Completo', type: 'text' },
    { name: 'email', label: 'Correo', type: 'email' },
    { name: 'userName', label: 'Usuario', type: 'text' },
    { name: 'password', label: 'Contraseña', type: 'password' },
    { name: 'confirmPassword', label: 'Confirmar Contraseña', type: 'password' },
    { name: 'address', label: 'Direccion', type: 'text' },
    { name: 'phone', label: 'Telefono', type: 'text' },
    
  ];
  formTitle = 'Nuevo Usuario'; // Título del formulario

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
      roles:  ['', Validators.required],
    });
   }


  regresar(){
    this.router.navigate(['./admin']);
  }
}
