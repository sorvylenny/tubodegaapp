import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css']
})
export class ProgressSpinnerComponent {
  showSpinner = true; // Puedes cambiar esto según tu lógica

  // Método para ocultar el spinner después de un tiempo (solo como ejemplo)
  hideSpinner() {
    setTimeout(() => {
      this.showSpinner = false;
    }, 2000); // Cambia el tiempo según tus necesidades
  }
}
