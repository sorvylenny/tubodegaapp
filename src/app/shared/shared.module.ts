import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CurrencyPipe } from './pipe/currency.pipe';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { FilterComponent } from './filter/filter.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { PaymentComponent } from './payment/payment.component';
import { TableComponent } from './table/table.component';
import { FormUserComponent } from './form-user/form-user.component';



@NgModule({
  declarations: [
    CardComponent,
    ChatDialogComponent,
    FooterComponent,
    HeaderComponent,
    PaymentComponent,
    TableComponent,
    FilterComponent,
    FormUserComponent,
   
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  exports:[
    CardComponent,
    CurrencyPipe,
    ChatDialogComponent,
    FilterComponent,
    FooterComponent,
    HeaderComponent,
    PaymentComponent,
    TableComponent, 
    FormUserComponent
 
  ]
})
export class SharedModule { }
