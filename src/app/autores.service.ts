import { Injectable } from '@angular/core';
// import { Autor } from './models/autor.model'

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  url:string
  constructor() {
    this.url = ''
   }

  // getAllAutores():Autor[]{
  //   // return this.httpClient.get(this.url)
  // }

  // getAutoresById(id):Autor[]{
  //   // return this.httpClient.get(`${this.url}/${autor.id}`)
  // }

  // getAutoresByPieza(pieza):Autor[]{
  //   // return this.httpClient.get(`${this.url}/${autor.pieza}`)
  // }
}
