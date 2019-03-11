import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

formRegistro: FormGroup

//ARRAY CATEGORIAS:
user = {
  categorias: [
  { name: 'audio—visual', selected: false, id:'audiovisuales' },
  { name: `dig—gráfico`, selected: false, id:'diggrafico' },
  { name: 'dig—web', selected: false, id:'digweb' },
  { name: 'foto—grafía', selected: false, id:'fotografia' },
  { name: 'insta—lación', selected: false, id:'instalacion' },
  { name: 'ilus—tración',selected: false,  id:'ilustracion' },
  { name: 'música',selected: false,  id:'musica' },
  { name: 'tattoo',selected: false, id:'tattoo' },
  { name: 'tipo—grafía',selected: false, id:'tipografia' },
  { name: '3D—Escultura',selected: false, id:'3descultura' },
  { name: 'otros',selected: false, id:'otros' }
  ]
};


  constructor(private fb: FormBuilder) {
    this.formRegistro = this.fb.group({
      categorias: this.buildCategorias()
    });

   }

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
      URLpieza: new FormControl('', [
        //Terminar
      ]),
      //aqui CATEGORIAS
      categorias: new FormArray([
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
        new FormControl(false)
      ]),

    //FORM AUTOR
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
        // Validators.required,
        
      ]),
      ig: new FormControl('', [
        Validators.required, 
     
      ]),
      be: new FormControl('', [
        Validators.required,
       
      ]),
      web: new FormControl('', [
        Validators.required,
      
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
    const formRegistroValue = Object.assign({}, this.formRegistro.value, {
      categorias: this.formRegistro.value.categorias.map((selected, i) => {
        console.warn(this.formRegistro.value)
        return {
          id: this.user.categorias[i].id,
          selected
       }
       
      })
    });
    console.log(formRegistroValue)
    
    // this.formRegistro.reset() -->ACTIVARLO AL FINAL!
  }
  
  //Metodos array CATEGORIAS:
  get categorias() {
    return this.formRegistro.get('categorias');
  };
  buildCategorias() {
    const arr = this.user.categorias.map(categorias => {
      return this.fb.control(categorias.selected);
    });
    return this.fb.array(arr);
  }

//Validador FILE image:

  // validarImagen(group){
  //   if(this.URLimage) {
  //     return null
  //   }else{
  //     return { imagen: 'Upss, el archivo de la pieza no se ha subido'}
  //   }
  // }

  // *en el formcontrol--> this.validarImagen.bind(this)
  //bind() es un metodo que te recuerda a nivel interno de tus validaciones que es el this conioo

}
