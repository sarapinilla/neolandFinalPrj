import { Injectable } from '@angular/core';
import { Pieza } from './models/pieza.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PiezasService {
  
  url:string

  constructor() {
    this.url = ''
  }

  getAllPiezas(){
    // return this.httpClient.get(this.url)
  }

  getPiezasById(id){
    // return this.httpClient.get(`${this.url}/${pieza.id}`)
  }

  getPiezasByAutor(autor){
    // return this.httpClient.get(`${this.url}/${pieza.autor}`)
  }
}
