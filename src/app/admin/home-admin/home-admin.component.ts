import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { ChatDialogComponent } from 'src/app/shared/chat-dialog/chat-dialog.component';
@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {
  
  mostrarAppBody = true;

  constructor( private router: Router,
               private dialog: MatDialog){}

    // Método para manejar el clic en el menu
  onMenuClick() {
    this.mostrarAppBody = false;
  }
                   

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
