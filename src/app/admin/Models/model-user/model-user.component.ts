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
  formUserEdit: FormGroup;
  hidePassword: boolean = true;
  titleAction: string = "Agregar";
  buttonAction: string = "Guardar";
  isEditMode: boolean = false;
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
    this.formUserEdit= this.fb.group({
      fullName:[''],
      roles:[''],
      isActive:['']
    });
    if (this.isEditMode) {
      this.formUserEdit.get('roles')?.disable();
    }
  }
  enableEditMode() {
    this.isEditMode = true;
    this.formUserEdit.get('roles')?.disable();
  }
  ngOnInit(): void {
    if (this.dateUser != null) {
      this.formUser.patchValue({
        fullName: this.dateUser.fullName,
        userName: this.dateUser.userName,
        email: this.dateUser.email,
        roles: [this.dateUser.roles],
        password: this.dateUser.password,
        address: this.dateUser.address,
        city: this.dateUser.city,
        phone: this.dateUser.phone,
        country: this.dateUser.country,
      });
    } else {
      // Proporcionamos un tipo explícito para user
      const user: User = this.dateUser ?? { fullName: null, roles: null, isActive: null };

      this.formUserEdit.patchValue({
        fullName: user.fullName,
        roles: [user.roles],
        isActive: user.isActive,
      });
    }
  }
  saveEditUser() {
    const newUser: User = {
      email: this.formUser.value.email,
      password: this.formUser.value.password,
      fullName: this.formUser.value.fullName,
      userName: this.formUser.value.userName,
      address: this.formUser.value.address,
      city: this.formUser.value.city,
      phone: this.formUser.value.phone,
      country: this.formUser.value.country,
    };

    const userId: User = {
      id: this.dateUser == null ? '' : this.dateUser.id,
    };

    const user: User = {
     roles: this.formUser.value.roles,
     isActive: this.formUser.value.isActive,
    };

    if (this.dateUser == null) {
      try {
        this.authService.registerUser(newUser).subscribe(
          () => {
            this.formUser.reset();
            this.modalsActual.close("true");
            this.isEditMode= false;
            Swal.fire({
              icon: "success",
              title: "Usuario registrado exitosamente",
              showConfirmButton: false,
              timer: 1500
            });
          },
          error => {
            console.log(error);
          }
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        console.log(user)
        this.userService.EditUser(userId.id!, user).subscribe(
          () => {
            this.isEditMode= true;
            this.modalsActual.close("true");
            Swal.fire({
              icon: "success",
              title: "Usuario actualizado exitosamente",
              showConfirmButton: false,
              timer: 1500
            });
          },
          error => {
            console.log(error);
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  }

}
