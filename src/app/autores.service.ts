import { Injectable } from '@angular/core';
import { Autor } from './models/autor.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  url:string
  constructor() {
    this.url = ''
   }

  getAllAutores(){
    // return this.httpClient.get(this.url)
  }

  getAutoresById(id){
    // return this.httpClient.get(`${this.url}/${autor.id}`)
  }

  getAutoresByPieza(pieza){
    // return this.httpClient.get(`${this.url}/${autor.pieza}`)
  }
}
