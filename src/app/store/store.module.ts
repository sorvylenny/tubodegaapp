import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { StoreRoutingModule } from './store-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from '../shared/header/header.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { FooterComponent } from '../shared/footer/footer.component';
import { BodyComponent } from './pages/body/body.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { CardComponent } from './components/card/card.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { CartComponent } from './pages/cart/cart.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ProductosComponent,
    CardComponent,
    BuscarComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    IvyCarouselModule,
    StoreRoutingModule
  ],
  exports:[
    ProductosComponent,
  ]
})
export class StoreModule { }
