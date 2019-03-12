import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutoresService } from '../autores.service';
import { Autor } from '../models/autor.model';

@Component({
  selector: 'ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {

  allAutores: any
  autor: any
  autorId: any
  piezaSelected: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private autoresService: AutoresService
    ) {
    this.activatedRoute.params.subscribe((params) => {
      this.autorId = params.autorId     
    })
    
    this.autoresService.getAutoresById(this.autorId).subscribe(res =>{
        this.autor = res
        console.log(this.autor)
    })   

    this.autoresService.getAllAutores().subscribe(res =>{
        this.allAutores = res
    })

   }

  ngOnInit() { 
    
  }

  //Al click cambia al cover de la pieza y su información, en la ventana obra
  showCover(pieza){
    this.piezaSelected = pieza
  }



}
