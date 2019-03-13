import { Component, OnInit } from '@angular/core';
import { Pieza } from '../models/pieza.model'
import { PiezasService } from '../piezas.service';

@Component({
  selector: 'galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  piezas: any
  arrPiezas: any


  constructor(private piezasService: PiezasService){ 

    this.arrPiezas = this.piezasService.getAllPiezas().subscribe(res => {
        this.piezas = res
        console.log(this.piezas)
    })
  }
  
  ngOnInit() {
  }

//Mostrar la cover img de la fila por donde se pasa el ratón - cambiar display (default:hidden)
  showCover(piezaId){
    let showCover = document.getElementById(`coverhidden${piezaId}`)
    showCover.style.display = 'block'
    showCover.style.margin = '0 auto'
    showCover.style.backgroundSize = 'cover'
    
  }

//Mostrar la cover img de la fila por donde se pasa el ratón - cambiar display a hidden
  hideCover(piezaId){
    let hideCover = document.getElementById(`coverhidden${piezaId}`)
    hideCover.style.display = 'none'
  }

// Redireccionar a url donde se aloja la pieza
  getPieza($event){
    console.log(this.piezasService.getPiezasById($event.id))
  }

//Redireccionar al componente ficha según la id del autor
  getAutor($event){
    console.log(this.piezasService.getAutor($event))
  }

//Filtrar la lista según lo que el usuario escriba
filter($event){

  //  let search = $event
  //  console.log(search)

  //  for(let i=0; i<this.arrPiezas.length; i++){
  //    if(this.arrPiezas[i].indexOf(search) != 0){
  //     this.piezasService.getAllPiezas().subscribe(res => {
  //       this.piezas = res
  //     })
  //    }
  //  }
  //  .toLowerCase()
  }

}


