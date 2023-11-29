import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ChatDialogComponent } from 'src/app/shared/chat-dialog/chat-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mostrarAppBody = true;
  userName: string | null = '';
  token: string | null= '';
  isUserLoggedIn: boolean = false;

 constructor(private router: Router,  private dialog: MatDialog) {}
  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
    this.token = localStorage.getItem('token');
    this.isUserLoggedIn = this.isTokenValid();

  }

  // Método para ingresar al carrito
  goToCart(){
    this.router.navigate(['store/cart']);
  }
   // Método para manejar la entrada al login/register
  goToAuth(authType: string): void {
    if (authType === 'login') {
      this.router.navigate(['auth/login']);
      } else if (authType === 'register') {
        this.router.navigate(['auth/registro']);
      }
    }
     // Método para manejar el clic en el menu
    onMenuClick() {
      this.mostrarAppBody = false;
    }
    // Método para manejar el clic en el carrito
    onCartClick() {
      this.mostrarAppBody = false;
    }
    // Método para manejar el clic para volver al inicio
    onShop() {
      this.mostrarAppBody = true;
    }

    private isTokenValid(): boolean {
      return this.token !== null && this.token !== '';
    }
    goToMyAccount(option: string): void {
      if (this.token) {
        const isTokenValid = this.isTokenValid();

        if (isTokenValid) {
          if (option === 'mi-cuenta') {
            this.router.navigate(['mi-cuenta']);
          } else if (option === 'mis-pedidos') {
            this.router.navigate(['mis-pedidos']);
          } else if (option === 'salir') {
            this.logout();
          }
        } else {
         this.goToAuth('login');
      }
    }

  }

  logout(): void {
    const dialogRef = this.dialog.open(ChatDialogComponent, {
      width: '250px',
      data: { message: '¿Estás seguro de que deseas cerrar sesión?' }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result === true) {
        localStorage.clear(); // Corregido: llamada a función clear()
        this.router.navigate(['store']);
      }
    });
  }
}

