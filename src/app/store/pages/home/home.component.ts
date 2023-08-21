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
 
  goToCart(){
    this.router.navigate(['store/cart']);
  }
  goToAuth(authType: string): void {
    if (authType === 'login') {
      this.router.navigate(['auth/login']);
      } else if (authType === 'register') {
        this.router.navigate(['auth/registro']);
      }
    }

    onMenuClick() {
      this.mostrarAppBody = false;
    }
  
    // Método para manejar el inicio de sesión
    onLoginClick() {
      this.mostrarAppBody = false;
    }
  
    // Método para manejar el registro
    onRegistroClick() {
      this.mostrarAppBody = false;
    }
  
    // Método para manejar el clic en el carrito
    onCartClick() {
      this.mostrarAppBody = false;
    }

    onShop() {
      this.mostrarAppBody = true;
    }
  

  logout(){}

}
