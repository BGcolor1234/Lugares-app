import { Injectable } from '@angular/core';
import { Lugar } from 'src/app/components/models/lugar.interface';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {
  private lugares: Lugar[] = [];

  constructor() {
    this.loadLugares();
  }

  private loadLugares() {
    const lugares = localStorage.getItem('lugares');
    if (lugares) {
      this.lugares = JSON.parse(lugares);
    }
  }

  private saveLugares() {
    localStorage.setItem('lugares', JSON.stringify(this.lugares));
  }

  getLugares(): Lugar[] {
    return this.lugares;
  }

  addLugar(lugar: Lugar) {
    this.lugares.push(lugar);
    this.saveLugares();
  }

  addComentario(nombre: string, comentario: string) {
    const lugar = this.lugares.find(l => l.nombre === nombre);
    if (lugar) {
      lugar.comentario = comentario;
      this.saveLugares();
    }
  }

  removeLugar(nombre: string) {
    this.lugares = this.lugares.filter(l => l.nombre !== nombre);
    this.saveLugares();
  }

  clearLugares() {
    this.lugares = [];
    localStorage.removeItem('lugares');
  }
}
