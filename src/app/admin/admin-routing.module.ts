import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { NewUsersComponent } from './pages/new-users/new-users.component';
import { ProductComponent } from './pages/product/product.component';
import { UsersComponent } from './users/users.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { DetailsUserComponent } from './pages/details-user/details-user.component';
import { DetailsProductComponent } from './pages/details-product/details-product.component';





const routes: Routes = [
  {
    path: '',
    component: HomeAdminComponent,
    children:[
      {
        path:'user',
        component: UsersComponent,
      },
      {
        path:'new',
        component: NewUsersComponent,
      },
      {
        path:'product',
        component: ProductComponent,
      },
      {
        path:'detailsUser/:id',
        component: DetailsUserComponent,
      },
      {
        path:'detailsProduct/:id',
        component: DetailsProductComponent,
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
