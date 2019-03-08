import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutoresService } from '../autores.service';

@Component({
  selector: 'ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {

  autor: any
  autorId: any
  autorImg: string
  piezaImg: string[]

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

   }

  ngOnInit() { 
    // document.getElementById('a').style.backgroundImage = `url(${this.autor.imgautor})`
  }

}
