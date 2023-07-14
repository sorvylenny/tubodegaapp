import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { TableComponent } from './table/table.component';
import { ColumnsPipe } from './pipe/columns.pipe';
import { FilterComponent } from './filter/filter.component';


@NgModule({
  declarations: [
    CardComponent,
    ChatDialogComponent,
    FooterComponent,
    HeaderComponent,
    PaymentComponent,
    TableComponent,
    ColumnsPipe,
    FilterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ], 
  exports:[
    CardComponent,
    ChatDialogComponent,
    FooterComponent,
    HeaderComponent,
    PaymentComponent,
    TableComponent, 
    FilterComponent

   

  ]
})
export class SharedModule { }
