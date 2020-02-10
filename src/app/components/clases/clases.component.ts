import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {
alerta = 'alert-danger';
loading  = false;

propiedad = {
  // El color del texto cambiara dependiendo del valor booleano ya sea si es true o false
  danger: false
};
  constructor() { }

  ngOnInit() {
  }

  Ejecutar() {
    this.loading = true;

    setTimeout(() => this.loading = false, 3000);
  }

}
