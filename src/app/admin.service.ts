import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url: string

  constructor(private httpClient: HttpClient) {
    //BD
    this.url = 'http://localhost:3000/api'
   }

   //Recuperar la información piezas/autores/cat de la BD 
  getAllPiezas(){
    return this.httpClient.get(`${this.url}/admin/piezas`)
  }

  //Actualizar la información piezas/autores/cat en la BD
  updateTable(values){
    return this.httpClient.post(`${this.url}/admin/registros`, {
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
      'categorias': values.categorias,
      'year': values.year,
      'estado': values.estado
      })
  }

}
