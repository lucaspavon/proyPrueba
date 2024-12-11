import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServicioService } from './services/servicio.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectoPrueba';

  private servicio = inject(ServicioService)

  cambiarTitulo2(){
    this.servicio.cambiarTitulo('Cambiando titulo desde un signal')
    this.servicio.setDataTitulo('Este titulo lo cambie desde el servicio');
  }
}
