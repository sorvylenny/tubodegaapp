import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { BodyComponent } from './pages/body/body.component';
import { StoreRoutingModule } from './store-routing.module';
import { HomeComponent } from './pages/home/home.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { ProductosComponent } from './pages/productos/productos.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './pages/cart/cart.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    HomeComponent,
    CartComponent,
    BodyComponent,
    BuscarComponent,
    ProductosComponent,
    
    ],
  imports: [
    CommonModule,
    MaterialModule,
    IvyCarouselModule,
    StoreRoutingModule,
    FormsModule,
    SharedModule,
  ],
  exports:[
    HomeComponent,
    CartComponent,
    BodyComponent,
    BuscarComponent,
    ProductosComponent,
  ]
})
export class StoreModule { }
