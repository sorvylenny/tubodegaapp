import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  mostrarAppBody = true;
  
 constructor(private router: Router) {}

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
  

  logout(){}

}
