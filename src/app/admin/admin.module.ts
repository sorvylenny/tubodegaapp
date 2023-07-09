import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';
import { StoreModule } from '../store/store.module';
import { AuthModule } from '../auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './pages/product/product.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { UsersModule } from './users/users.module';
import { NewUsersComponent } from './pages/new-users/new-users.component';
import { DetailsUserComponent } from './pages/details-user/details-user.component';
import { DetailsProductComponent } from './pages/details-product/details-product.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeAdminComponent,
    NewUsersComponent,
    ProductComponent,
    DetailsUserComponent,
    DetailsProductComponent,
 ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    UsersModule,
    StoreModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AdminModule { }
