import { Component } from '@angular/core';
import { AlgunComponenteComponent } from './algun-componente/algun-componente.component';

@Component({
  selector: 'app-section3',
  standalone: true,
  imports: [AlgunComponenteComponent],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.css'
})
export class Section3Component {
  tituloHijo = 'Este es el titulo que le estoy pasando por el padre'
  miTitulo = 'Este es mi propio titulo'

  cambiarNombre(){
    this.tituloHijo = 'Ahora le cambié el nombre al hijo'
  }

  cambiarTituloAlPadre(tituloNuevo : string){
    this.miTitulo = tituloNuevo;
  }

}
