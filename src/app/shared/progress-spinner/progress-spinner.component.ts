import { Component } from '@angular/core';
import { take, timer } from 'rxjs';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css']
})
export class ProgressSpinnerComponent {
  showSpinner = true; // Puedes cambiar esto según tu lógica
  value=0;

  // Método para ocultar el spinner después de un tiempo (solo como ejemplo)
  hideSpinner() {
    this.showSpinner = false;// Cambia el tiempo según tus necesidades
  }

  constructor() { }

  cargarInformacion() {
    // Simulando una carga de información que toma 3000 segundos (50 minutos)
    setTimeout(() => {
      // Información cargada, oculta el spinner
      this.hideSpinner();
    }, 880); // Cambia el tiempo según tus necesidades
  }

  ngOnInit(): void {
    this.cargarInformacion();
  }
}

