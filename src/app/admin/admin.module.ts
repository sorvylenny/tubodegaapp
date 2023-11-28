import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';
import { StoreModule } from '../store/store.module';
import { AuthModule } from '../auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './pages/product/product.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';

import { NewUsersComponent } from './pages/new-users/new-users.component';
import { DetailsUserComponent } from './pages/details-user/details-user.component';
import { DetailsProductComponent } from './pages/details-product/details-product.component';
import { SharedModule } from '../shared/shared.module';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UsersModule } from './users/users.module';
import { ModelUserComponent } from './Models/model-user/model-user.component';
import { ModelProductComponent } from './Models/model-product/model-product.component';


@NgModule({
  declarations: [
    HomeAdminComponent,
    NewUsersComponent,
    ProductComponent,
    DetailsUserComponent,
    DetailsProductComponent,
    NewProductComponent,
    HomePageComponent,
    ModelUserComponent,
    ModelProductComponent,
 ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule,
    UsersModule
  ]
})
export class AdminModule { }
