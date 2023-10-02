import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mostrarAppBody = true;
  userName: string | null='';
  token: string | null= '';
  isUserLoggedIn: boolean = false;
  
 constructor(private router: Router) {}
  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
    this.token = localStorage.getItem('token');
    
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
      // Implementa la lógica para verificar si el token es válido o no.
      // Retorna true si el token es válido y false si no lo es.
      // Puedes implementar esta lógica según tu necesidad.
      // E.g., puedes verificar la expiración, firma, etc.
      // Aquí, simplemente estamos verificando si el token existe y no está vacío.
      return this.token !== null && this.token !== '';
    }
    goToMyAccount(option: string): void {
      if (this.token) {
        const isTokenValid = this.isTokenValid();  // Asumiendo que tienes una función para verificar el token
  
        if (isTokenValid) {
          if (option === 'mi-cuenta') {
            this.router.navigate(['mi-cuenta']);
          } else if (option === 'mis-pedidos') {
            this.router.navigate(['mis-pedidos']);
          } else if (option === 'salir') {
            this.logout();
          }
        } else {
          this.router.navigate(['auth/login']);
        }
      } else {
        this.router.navigate(['auth/login']);
      }
    }

  logout(){}

}
