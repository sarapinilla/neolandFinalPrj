import { Component, OnInit } from '@angular/core';
import { Autor } from '../models/autor.model';


@Component({
  selector: 'galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  // autores: Autor[]
  // piezas: Pieza[]

  constructor() { // private autoresService: AutoresService, private piezasService: PiezasService
    // this.piezasService.getAllPiezas().subscribe(res => {
    //   this.piezas = res
    // })
  }
  
  ngOnInit() {
  }

// filtrar($event){

// }


}
