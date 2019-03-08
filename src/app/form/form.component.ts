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
      
      titulopieza: new FormControl('Título pieza', [
        Validators.required,
        Validators.maxLength(50)
      ]),
      infopieza: new FormControl('Informaciónpieza',[
        Validators.required,
        Validators.maxLength(200)
      ]),
      piccover: new FormControl('Foto Cover', [
        //Investigar
      ]),
      picpieza: new FormControl('Archivo Pieza', [
        //Investigar
      ]),
      //aqui CATEGORIAS

      nombreautor: new FormControl('Nombre Autor', [
        Validators.required,
        Validators.maxLength(50)
      ]),
      email: new FormControl('Email', [
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      infoautor: new FormControl('Info Autor', [
        Validators.required,
        Validators.maxLength(200)
      ]),
      picautor: new FormControl('Foto de perfil', [
        Validators.required,
        //Investigar
      ]),
      ig: new FormControl('Instagram', [
        Validators.required,
        //Investigar
      ]),
      be: new FormControl('Behance', [
        Validators.required,
        //Investigar
      ]),
      web: new FormControl('web personal', [
        Validators.required,
        //Investigar
      ]),

  
      
      





    })

    let titulopiezaControl = this.formRegistro.controls.titulopieza
    //valueChanges -> observable , por eso le ponemos .subscribe
    titulopiezaControl.valueChanges.pipe(debounceTime(500)).subscribe((value)=>{
      console.log(value)
    })

  }
  //Reset valores cuando se envía el formulario:
  manejarFormulario(){
    console.warn(this.formRegistro.value)
    this.formRegistro.reset()
  }
  //Boton:
  updatePieza(){
    // TODO: Use EventEmitter with form value
    this.formRegistro.patchValue({ });

  }
}
