import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PiezasService } from '../piezas.service';

@Component({
  selector: 'pieza',
  templateUrl: './pieza.component.html',
  styleUrls: ['./pieza.component.css']
})
export class PiezaComponent implements OnInit {

  piezaId: any
  pieza: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private piezasService: PiezasService
  ) { 
    this.activatedRoute.params.subscribe((params) => {
      this.piezaId = params.piezaId  
    })

    this.piezasService.getPiezasById(this.piezaId).subscribe(res =>{
      this.pieza = res
      console.log(res)
    })
  }

  ngOnInit() {
  }

}
