import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  piezas: any

  constructor(private adminService: AdminService) {
    this.adminService.getAllPiezas().subscribe(res => {
      this.piezas = res
      console.log(this.piezas)
    })

    
   }

  ngOnInit() {
  }

  mostrarPieza(pieza){

  pieza.estado == 0 ? pieza.estado = 1 : pieza.estado = 0

    console.log(pieza.estado)
  }

  updateRegistros(){
    this.adminService.updateTable(this.piezas).subscribe(res => {
      console.log(res)
    })
  }
}
