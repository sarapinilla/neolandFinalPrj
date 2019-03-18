import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'galeriaurbana',
  templateUrl: './galeriaurbana.component.html',
  styleUrls: ['./galeriaurbana.component.css']
})
export class GaleriaurbanaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  show(){
    let mapa = $('#mapa')
    mapa.stop(true,true).animate({'left':'-100px'},1000)
  }

  hide(){
    let mapa = $('#mapa')
    mapa.stop(true,true).animate({'left':'-500px'},1000)
  }
}
