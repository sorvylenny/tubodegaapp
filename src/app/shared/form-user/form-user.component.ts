import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent {

  @Input() formUser!: FormGroup;
  @Input() roles!: any[];
  @Input() fields!: any[]; // Datos de los campos (nombres y etiquetas)
  @Input() formTitle: string | undefined; // Título del formulario
  @Output() regresarClicked = new EventEmitter<void>(); // Evento para el botón Regresar
  @Output() enviarClicked = new EventEmitter<void>(); // Evento para el botón Regresar
  @Input() showRolesSelector: boolean = true;
  @Input() enviarButtonDisabled: boolean= true;

  

  constructor() { }

  regresar() {
    this.regresarClicked.emit();
  }

  enviar() {
    this.regresarClicked.emit();
  }
}
