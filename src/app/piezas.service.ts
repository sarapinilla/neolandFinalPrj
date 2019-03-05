import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pieza } from './models/pieza.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PiezasService {
  
  url:string
  pieza: Pieza

  constructor(private httpClient: HttpClient, private router: Router) {
    this.url = 'http://localhost:3000/api'
  }

  getAllPiezas(){
    return this.httpClient.get(`${this.url}/piezas`) 
  }

  getPiezasById(id){
     return this.httpClient.get(`${this.url}/piezas/${id}`)
  }

  getAutor(autor){
    return this.httpClient.get(`${this.url}/autores/autor/${autor}`)
    // let urlFicha = `${this.httpClient.get(`${this.url}/autores/autor/${autor}`
    // this.router.navigate(urlFicha)
  }
}
