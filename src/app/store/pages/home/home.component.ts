import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
 constructor(private router: Router) {}
 
/*  shouldShowBodyContent(): any {
  // Obtener la ruta actual
  const currentUrl = this.router.url;
  if (currentUrl === 'store' ){
   return true;
  } else if (currentUrl !=='store') {
     // Verificar si se debe mostrar el contenido del cuerpo basado en la ruta
     return false;
    }
  } */

  shouldShowAuthContent(): boolean {
    const currentUrl = this.router.url;
    return currentUrl !== 'store';
  }

  // Resto de tu código...

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

  logout(){}

}
