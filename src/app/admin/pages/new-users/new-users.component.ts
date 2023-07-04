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

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  usersForm: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    password2: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    rol: new FormControl('', Validators.required),
  });

  roles: Rols[] = [
    {value: 'admin-0', viewValue: 'Admin'},
    {value: 'user-1', viewValue: 'User'},
  ];


  regresar(){}
}
