import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pieza } from './models/pieza.model';


@Injectable({
  providedIn: 'root'
})
export class PiezasService {
  
  url:string
  pieza: Pieza

  constructor(private httpClient: HttpClient) {
    // this.url = 'http://localhost:3000/api'
    this.url = 'http://back.thenogallery.es/api'
  }

  getAllPiezas(){
    return this.httpClient.get(`${this.url}/piezas`)
  }

  getPiezasById(id){
     return this.httpClient.get(`${this.url}/piezas/${id}`)
  }

  getAutor(autor){
    return this.httpClient.get(`${this.url}/autores/${autor}`)
  }
}
