import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent {

  constructor(private dialogRef: MatDialogRef<ChatDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,) { }

  borrar (){
    this.dialogRef.close(true);

  }

  cerrar() {
    this.dialogRef.close();

  }

}
