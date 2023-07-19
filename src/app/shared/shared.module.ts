import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CurrencyPipe } from './pipe/currency.pipe';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { FilterComponent } from './filter/filter.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { PaymentComponent } from './payment/payment.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    CardComponent,
    ChatDialogComponent,
    FooterComponent,
    HeaderComponent,
    PaymentComponent,
    TableComponent,
    FilterComponent,
   
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
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
 
  ]
})
export class SharedModule { }
