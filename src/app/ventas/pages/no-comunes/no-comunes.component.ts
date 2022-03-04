import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  /* i18nSelect */
  nombre: string = 'Aline Rojas';
  genero: string = 'femenino';
  invitacionMap = {
    'masculino': 'invitarlo', 
    'femenino' : 'invitarla'
  }

  /* i18nPlural */
  clientes: string[] = ['Wendy', 'Fernando', 'Sarahí', 'Aline'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente(){
    this.nombre === 'Aline Rojas' ? (this.nombre = 'Fer Santi', this.genero = 'masculino')
                                  : (this.nombre = 'Aline Rojas', this.genero = 'femenino');
  }

  borrarCliente() {
    this.clientes.pop();
  }

  /* KeyValue Pipe */
  persona = {
    nombre: 'Fer Santi',
    edad: 25,
    direccion: 'Ciudad de México, México'
  }

  /* Json Pipe */
  heroes = [
    {
      nombre: 'Iron Man', 
      vuela: true
    },
    {
      nombre: 'Spiderman',
      vuela: true
    },
    {
      nombre: 'Ant Man',
      vuela: false
    }
  ];

  /* Async Pipe */
  miObservable = interval(1000);
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa!')
    }, 3500);
  });
}
