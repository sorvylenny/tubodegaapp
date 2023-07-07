import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';
import { UsersModule } from './users/users.module';
import { StoreModule } from '../store/store.module';
import { AuthModule } from '../auth/auth.module';
import { NewUsersComponent } from './pages/new-users/new-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './pages/product/product.component';
import { ChatDialogComponent } from './components/chat-dialog/chat-dialog.component';



@NgModule({
  declarations: [
    HomeAdminComponent,
    NewUsersComponent,
    ProductComponent,
    ChatDialogComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    UsersModule,
    StoreModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
