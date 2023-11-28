import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Roles, User } from '../../interface/user';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/auth.service';
import { UsersService } from '../../services/users.service';
import Swal from 'sweetalert2';
import { RegisterResponse } from 'src/app/auth/interface/registerResponse';


@Component({
  selector: 'app-model-user',
  templateUrl: './model-user.component.html',
  styleUrls: ['./model-user.component.css']
})
export class ModelUserComponent {
  formUser: FormGroup;
  hidePassword: boolean = true;
  titleAction: string = "Agregar";
  buttonAction: string = "Guardar";
  ListRoles: Roles[] = [Roles.admin, Roles.superUser, Roles.user];
  constructor(
    private modalsActual: MatDialogRef<ModelUserComponent>,
    @Inject(MAT_DIALOG_DATA) public dateUser: User,
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UsersService,
  ) {
    this.formUser = this.fb.group({
      fullName: ['', Validators.required],
      userName: [''],
      email: ['', Validators.required],
      roles: [''],
      password: [''],
      address: [''],    
      city:    [''],       
      phone:   [''],      
      country: [''],    
      isActive: [''],
      });
    if (this.dateUser!=null){
      this.titleAction="Editar";
      this.buttonAction='Modificar';
    }
  }
  ngOnInit(): void {
    if (this.dateUser != null) {
      this.formUser.patchValue({
        fullName: this.dateUser.fullName,
        UserName: this.dateUser.userName,
        email:this.dateUser.email,
        roles: [this.dateUser.roles],
        password:this.dateUser.password,
        address: this.dateUser.address,
        city: this.dateUser.city,
        phone: this.dateUser.phone,
        country: this.dateUser.country,
        });
    }
  }
  saveEditUser() {
    const user: User = {
      id: this.dateUser == null ? '' : this.dateUser.id,
      fullName: this.formUser.value.fullName,
      userName: this.formUser.value.userName,
      email: this.formUser.value.email,
      password: this.formUser.value.password,
      address: this.formUser.value.address,
      city: this.formUser.value.city,
      phone: this.formUser.value.phone,
      country: this.formUser.value.country,
      }

      if (this.dateUser == null) {
        this.authService.registerUser(user).subscribe({
          next: (res: RegisterResponse) => {
            if (res && res.success) {
              Swal.fire({
                icon: 'success',
                title: '¡Registro exitoso!',
                text: 'Usuario registrado exitosamente.'
              });
              this.modalsActual.close("true");
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema durante el registro.'
              });
            }
          },
          error: (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Hubo un problema durante la solicitud de registro.'
            });
          }
        });
      } else {
        this.userService.EditUser(user.id!).subscribe(
          (res: User) => {  
            if (res) {
              Swal.fire({
                icon: 'success',
                title: '¡Actualización exitosa!',
                text: 'Usuario actualizado exitosamente.'
              });
              this.modalsActual.close("true");
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema durante la actualización.'
              });
            }
          },
          (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Hubo un problema durante la solicitud de actualización.'
            });
          }
        ); 

      }
           
    } 
}