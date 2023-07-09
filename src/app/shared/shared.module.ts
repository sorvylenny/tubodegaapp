import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PaymentComponent } from './payment/payment.component';
import { MaterialModule } from '../material/material.module';
import { TableComponent } from './table/table.component';
import { ColumnsPipe } from './pipe/columns.pipe';


@NgModule({
  declarations: [
    CardComponent,
    ChatDialogComponent,
    FooterComponent,
    HeaderComponent,
    PaymentComponent,
    TableComponent,
    ColumnsPipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ], 
  exports:[
    CardComponent,
    ChatDialogComponent,
    FooterComponent,
    HeaderComponent,
    PaymentComponent,
    TableComponent

  ]
})
export class SharedModule { }
