import { Component, OnInit } from '@angular/core';
import { Autor } from '../models/autor.model';
import { AutoresService } from '../autores.service';
import { PiezasService } from '../piezas.service';

@Component({
  selector: 'galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  autores: Autor[]
  piezas: Pieza[]

  constructor(private autoresService: AutoresService, private piezasService: PiezasService) { 
    // this.autoresService.getAllAutores().subscribe(res =>{
    //   this.autores = res
    // })
    this.piezasService.getAllPiezas().subscribe(res => {
      this.piezas = res
    })
  }

  ngOnInit() {
  }

// filtrar($event){

// }


}
