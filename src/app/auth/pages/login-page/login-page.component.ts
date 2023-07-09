import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls:  ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email:  new FormControl('test1@prueba.com', [Validators.required, Validators.email]),
    password: new FormControl('1234567', [Validators.required, Validators.minLength(7)]),
    remember: new FormControl(false),
   })

  constructor(private formBuilder: FormBuilder, private router: Router){}

  ngOnInit() {}


  submit() {
    this.router.navigate(['admin']);
  }
  }



