import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { UsersComponent } from './users/users.component';
import { NewUsersComponent } from './pages/new-users/new-users.component';
import { ProductComponent } from './pages/product/product.component';




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
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
