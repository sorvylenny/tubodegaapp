import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CardComponent } from './card/card.component';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { CurrencyPipe } from './pipe/currency.pipe';
import { FilterComponent } from './filter/filter.component';
import { FooterComponent } from './footer/footer.component';
import { FormUserComponent } from './form-user/form-user.component';
import { MaterialModule } from '../material/material.module';
import { PaymentComponent } from './payment/payment.component';
import { TableComponent } from './table/table.component';
import { ImageCellComponent } from './image-cell/image-cell.component';



@NgModule({
  declarations: [
    CardComponent,
    ChatDialogComponent,
    FilterComponent,
    FooterComponent,
    FormUserComponent,
    PaymentComponent,
    TableComponent,
    ImageCellComponent,
   
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  exports:[
    CardComponent,
    ChatDialogComponent,
    CurrencyPipe,
    FilterComponent,
    FooterComponent,
    FormUserComponent,
    PaymentComponent,
    TableComponent, 
    ImageCellComponent
 
  ]
})
export class SharedModule { }
