import { Component, OnInit } from '@angular/core';
import { Pieza } from '../models/pieza.model'
import { PiezasService } from '../piezas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  piezas: any
  nombreAut: any
  nombreCat: any

  constructor(
    private piezasService: PiezasService,
    private router: Router
    ){ 

    this.piezasService.getAllPiezas().subscribe(res => {
        this.piezas = res
        console.log(this.piezas)
        
        // this.piezas.autores.find(nombre => {
        //   return nombre = 'nombre'
        // })

        // this.arrAut = []

        // for(let i = 0; i<this.piezas.length; i++){
        //   this.arrAut.push(this.piezas[i].autores)
        // }
          
    })

  }
  
  ngOnInit() {
  }

// filtrar($event){

// }

//Redireccionar a url donde se aloja la pieza
  // getPieza($event){
  //   this.piezasService.getPiezasById($event.id)
  // }

//Redireccionar al componente ficha según la id del autor
  // getAutor($event){
  //   this.piezasService.getAutor($event)
  // }
}


