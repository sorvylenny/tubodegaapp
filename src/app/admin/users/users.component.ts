import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../interface/user';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/auth.service';
import { ModelUserComponent } from '../Models/model-user/model-user.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  ColumnsTable: string[] = ['nombre', 'email','rol', 'estado', 'acciones'];
  dataSource: User[] = [];
  dataListUser = new MatTableDataSource(this.dataSource);
  @ViewChild(MatPaginator) paginatorTable!: MatPaginator;


  constructor(private dialog: MatDialog,
    private userService: UsersService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.allUsers();
  }

  ngAfterViewInit(): void {
    this.dataListUser.paginator = this.paginatorTable;
  }

  allUsers(): void {
    this.userService.userAll().subscribe((result: User[]) => {
      this.dataListUser.data = result;
      console.log(this.dataListUser);
    });
  }

  appSearchTable(event: Event){
    const searchValue = (event.target as HTMLInputElement).value;
    this.dataListUser.filter = searchValue.trim().toLocaleLowerCase();
    console.log(this.dataListUser);
  }
  newUser(){
    this.dialog.open(ModelUserComponent, {
      disableClose:true
    }).afterClosed().subscribe((res: string) =>{
      if(res ==="true") this.allUsers();
    });
  }
  editUser(user:User){
    this.dialog.open(ModelUserComponent, {
      disableClose:true,
      data: user
    }).afterClosed().subscribe((res: string) =>{
      if(res ==="true") this.allUsers();
    });
  }

  deleteUser(user: User) {
    Swal.fire({
      title: '¿Estás seguro de eliminar el usuario?',
      text: user.fullName,
      icon: 'warning',
      confirmButtonColor: '#1ABC9C',
      confirmButtonText: "Sí, eliminar",
      showCancelButton: true,
      cancelButtonText: "No, Regresar",
      cancelButtonColor: '#C0392B'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(user.id!).subscribe( 
          (response) => {
            if (response) {
              Swal.fire('Éxito', 'Usuario eliminado correctamente', 'success');
             
            } else {
              
              Swal.fire('Error', 'No se pudo eliminar el usuario', 'error');
            }
          },
          (error) => {
            Swal.fire('Error', 'Ha ocurrido un error al eliminar el usuario', 'error');
          }
        );
      }
    });
  }
  
}
