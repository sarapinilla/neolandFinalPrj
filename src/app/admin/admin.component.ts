import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  piezas: any

  constructor(
    private adminService: AdminService,
    private router: Router
    ) {
    this.adminService.getAllPiezas().subscribe(res => {
      this.piezas = res
      console.log(this.piezas)
    })

    
   }

  ngOnInit() {
  }
//Método cambiar ESTADO piezas (select)
  mostrarPieza(pieza){
  pieza.estado == 0 ? pieza.estado = 1 : pieza.estado = 0
    console.log(pieza.estado)
  }
//BTN actualizar piezas seleccionadas
  updateRegistros(){
    this.adminService.updateTable(this.piezas).subscribe(res => {
      console.log(res)
    })
  }
//LOGOUT ADMIN
  logOut(){
    localStorage.removeItem('token')
    this.router.navigate(['/home'])
  }
}
