import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChatDialogComponent } from '../components/chat-dialog/chat-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {

  constructor( private router: Router,
               private dialog: MatDialog){}

  logout(){
    const dialog = this.dialog.open(ChatDialogComponent, {
      width: '250px',
      data: { message: '¿Estas seguro de que deseas cerrar sesión?'}
    });
    dialog.afterClosed().subscribe (result =>{
      if ( result == true){
        this.router.navigate(['./auth/login']);
      }
    });
  }

}
