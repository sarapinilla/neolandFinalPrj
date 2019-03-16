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

//LOGIN ADMIN

  accessLogin(user, password){
   
    return this.httpClient.post(`${this.url}/admin`,{
      'user': user,
      'password': password
    })
  }


//TABLA REGISTROS
   //Recuperar la información piezas/autores/cat de la BD 
  getAllPiezas(){
    return this.httpClient.get(`${this.url}/admin/piezas`)
  }

  //Actualizar la información piezas/autores/cat en la BD
  updateTable(pieza){
    return this.httpClient.post(`${this.url}/admin/update`, {
      'estado': pieza.estado
      })
  }


}
