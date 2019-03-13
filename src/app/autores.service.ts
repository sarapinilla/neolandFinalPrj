import { Injectable } from '@angular/core';
import { Autor } from './models/autor.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  url:string
  autor: Autor

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:3000/api/autores'
   }

  getAllAutores(){
    return this.httpClient.get(this.url)
  }

  getAutoresById(id){
    return this.httpClient.get(`${this.url}/${this.autor.id}`)
  }
}
