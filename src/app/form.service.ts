import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  url: string

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:3000/api'
   }
   
//formRegistro OK
   postFormRegistro(values){
    return this.httpClient.post(`${this.url}/formregistro/create`, {
      'titulo': values.titulopieza,
      'pieza': values.piezapic || values.URLpieza,
      'coverpieza': values.coverpic,
      'descripcion': values.infopieza,
      'nombre': values.nombreautor,
      'infoautor': values.infoautor,
      'email': values.email,
      'imgautor': values.autorpic,
      'ig': values.ig,
      'be': values.be,
      'web': values.web,
      'categorias': values.categorias
      })
  }



}
