import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls:  ['./register-page.component.css']
})
export class RegisterPageComponent {

  constructor(private formBuilder: FormBuilder,
              private router: Router){}

  loginForm: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email:  new FormControl('', [Validators.required, Validators.email]),
    userName: new FormControl ('', Validators.required),
    password: new FormControl('', Validators.required),
    password2: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    telefono:  new FormControl('', Validators.required),


   })

   ngOnInit(): void {
    this.loginForm.reset({
      nombre: 'katherine flores',
      email: 'test1@test.com',
      userName: 'ksfm1234567',
      password: '123456',
      password2: '123456',
      direccion: 'calle 69 sur',
      telefono: 4249635234
    })
   }

   regresar(){
    this.router.navigate(['']);
   }

}
