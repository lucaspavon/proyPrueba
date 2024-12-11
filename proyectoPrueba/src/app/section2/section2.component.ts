import { Component, effect, inject } from '@angular/core';
import { ServicioService } from '../services/servicio.service';


@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.css'
})
export class Section2Component {

  public servicio = inject(ServicioService)
  tituloObservableCompo2 : string = 'Este titulo es observable'
  tituloObservableCompo : string = 'Este titulo es una signal';
  pokes : any[] = [];
  cantidadPokes: number = 0;

  constructor(){
    this.servicio.tituloAObservar$.subscribe(value => this.tituloObservableCompo2 = value);
    effect(() => {
      this.tituloObservableCompo = this.servicio.algunTitulo();
    });
  }

  
  

  traerPokes(){
    // this.servicio.consultarPokes().subscribe(value =>{
    //   this.pokes = value.results
    //   this.cantidadPokes = value.count
    // })
  }
  

}
