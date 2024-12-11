import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-algun-componente',
  standalone: true,
  imports: [],
  templateUrl: './algun-componente.component.html',
  styleUrl: './algun-componente.component.css'
})
export class AlgunComponenteComponent {
  @Input() titulo : string = 'Titulo que va a cambiar';
  @Output() callBackPadre = new EventEmitter<string>();

  cambiarTituloAlPadre(){
    this.callBackPadre.emit('Ahora le cambio el titulo al padre');
  }
}
