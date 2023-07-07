import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ProductComponent } from '../admin/pages/product/product.component';
import { CarsComponent } from './pages/cars/cars.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'buscar',
        component: BuscarComponent,
      },
      {
        path: 'cars',
        component: CarsComponent,
      },
      {
        path: 'productos',
        component: ProductComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
