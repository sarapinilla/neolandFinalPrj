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
  arrPiezas: any


  constructor(
    private piezasService: PiezasService,
    private router: Router
    ){ 

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
  getAutor(autorId){
    this.router.navigate(['ficha', autorId])
  }

}


