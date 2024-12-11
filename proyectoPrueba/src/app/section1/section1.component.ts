import { Component, inject } from '@angular/core';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-section1',
  standalone: true,
  imports: [],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.css'
})
export class Section1Component {
  saludo : string = 'Hola desde el ts'
  
  cambiarNombreBoton(){
    this.saludo = 'Hola desde la funcion'
  }
}
