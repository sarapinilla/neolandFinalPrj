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
   
//formPIEZAS
   postFormPiezas(values){
    return this.httpClient.post(`${this.url}/piezas/create`, {
      'titulo': values.titulopieza,
      //'year': values.year,
      //'registro': values.registro,
      'pieza': [values.piezapic, values.URLpieza], //dudaMario[]
      'coverpieza': values.coverpic,
      'descripcion': values.infopieza
      })
  }
//formAUTOR
postFormAutores(values){
  return this.httpClient.post(`${this.url}/autores/create`, {
    'nombre': values.nombreautor,
    'infoautor': values.infoautor,
    'email': values.email,
    'imgautor': values.autorpic,
    'ig': values.ig,
    'be': values.be,
    'web': values.web
    })
}
//formCATEGORIAS
postFormCat(values){
  //arrayCategoriasboolean-->tbipiezascat //dudaMario
}



}
