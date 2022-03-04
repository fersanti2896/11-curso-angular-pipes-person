import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'fernando';
  nombreUpper: string = 'FER SANTI';
  nombreCompleto: string = 'fErnando niColas Santiago';
  
  fecha: Date = new Date();
}
