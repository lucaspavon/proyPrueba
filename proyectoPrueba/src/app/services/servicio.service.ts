import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  public algunTitulo = signal<string>('Este titulo es una signal')

  private tituloObservable: BehaviorSubject<string> = new BehaviorSubject<string>('Titulo observable');
  tituloAObservar$: Observable<string> = this.tituloObservable.asObservable();
  
  constructor() { }

  cambiarTitulo(titulo : string){
    this.algunTitulo.set(titulo)
  }

  public getDataTitulo(): any { return this.tituloObservable.getValue(); }
  public setDataTitulo(data: any): void { this.tituloObservable.next(data); }

  // public consultarPokes(): Observable<any> {
  //   return this.http.get('https://pokeapi.co/api/v2/pokemon/');
  // }
  
}
