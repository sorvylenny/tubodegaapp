import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { ChatDialogComponent } from 'src/app/shared/chat-dialog/chat-dialog.component';
@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit{

  fullName: string | null='';
  token: string | null= '';
  constructor( private router: Router,
               private dialog: MatDialog){}
  ngOnInit(): void {
    this.fullName = localStorage.getItem('fullName');
    this.token = localStorage.getItem('token');
  }

 
                   

  logout(){
    const dialog = this.dialog.open(ChatDialogComponent, {
      width: '250px',
      data: { message: '¿Estas seguro de que deseas cerrar sesión?'}
    });
    dialog.afterClosed().subscribe (result =>{
      if ( result == true){
        localStorage.clear;
        this.router.navigate(['./auth/login']);
      }
    });
  }

}
