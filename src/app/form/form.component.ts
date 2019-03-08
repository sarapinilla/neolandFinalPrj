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
      
      titulopieza: new FormControl('', [
        Validators.required,
        Validators.maxLength(50)
      ]),
      infopieza: new FormControl('',[
        Validators.required,
        Validators.maxLength(250)
      ]),
      piccover: new FormControl('', [
        //Investigar
      ]),
      picpieza: new FormControl('', [
        //Investigar
      ]),

      //aqui CATEGORIAS
      audiovisual: new FormControl('', [
        
      ]),
      diggrafico: new FormControl('', [
        
      ]),
      digweb: new FormControl('', [
        
      ]),
      fotografia: new FormControl('', [
       
      ]),
      instalacion: new FormControl('', [
        
      ]),
      ilustracion: new FormControl('', [
        
      ]),
      musica: new FormControl('', [
        
      ]),
      tattoo: new FormControl('', [
       
      ]),
      tipografia: new FormControl('', [
        
      ]),
      escultura: new FormControl('', [
        
      ]),
      otros: new FormControl('', [
        
      ]),

      nombreautor: new FormControl('', [
        Validators.required,
        Validators.maxLength(50)
      ]),
      email: new FormControl('@gmail.com', [
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      infoautor: new FormControl('', [
        Validators.required,
        Validators.maxLength(250)
      ]),
      picautor: new FormControl('', [
        Validators.required,
        
      ]),
      ig: new FormControl('', [
        Validators.required,
        //Investigar
      ]),
      be: new FormControl('', [
        Validators.required,
        //Investigar
      ]),
      web: new FormControl('', [
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
