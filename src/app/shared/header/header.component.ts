import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  goToCart(){
    this.router.navigate(['store/cart']);
  }
  goToAuth(){
    this.router.navigate(['auth/login']);
  }
  logout(){}

}
