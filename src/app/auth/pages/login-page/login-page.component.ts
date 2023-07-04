import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls:  ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email:  new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    remember: new FormControl(false),
   })

  constructor(private formBuilder: FormBuilder){}

  ngOnInit() {
     this.loginForm.valueChanges.subscribe(
      _=> {
        console.log(this.loginForm.controls['email']?.errors)
        console.log(this.loginForm.controls['email']?.errors?.['email']);
      }
     )
  }




  submit() {}
  }



