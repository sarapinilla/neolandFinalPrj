import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

formRegistro: FormGroup

  constructor() { }

  ngOnInit() {
    this.formRegistro = new FormGroup({
      
      tituloPieza: new FormControl('Título pieza', [
        Validators.required,
        Validators.maxLength(50)
      ]),
      infoPieza: new FormControl('Informaciónpieza',[
        Validators.required,
        Validators.maxLength(200)
      ]),
      picCover: new FormControl('Foto Cover', [
        //Investigar
      ]),
      picPieza: new FormControl('Archivo Pieza', [
        //Investigar
      ]),
      //aqui CATEGORIAS

      nomnbreAutor: new FormControl('Nombre Autor', [
        Validators.required,
        Validators.maxLength(50)
      ]),


  
      
      





    })

    let tituloPiezaControl = this.formRegistro.controls.tituloPieza
    //valueChanges -> observable , por eso le ponemos .subscribe
    tituloPiezaControl.valueChanges.pipe(debounceTime(500)).subscribe((value)=>{
      console.log(value)
    })

  }
  //Reset valores cuando se envía el formulario:
  manejarFormulario(){
    console.log(this.formRegistro.value)
    this.formRegistro.reset()
  }

}
