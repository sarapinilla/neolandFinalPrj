import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators'
import { FormService } from '../form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

//FORM:
formRegistro: FormGroup

//ARRAY CATEGORIAS:
user = {
  categorias: [
  { name: 'audio—visual', selected: false, id:'1' },
  { name: `dig—gráfico`, selected: false, id:'2' },
  { name: 'dig—web', selected: false, id:'3' },
  { name: 'foto—grafía', selected: false, id:'4' },
  { name: 'ilus—tración',selected: false,  id:'5' },
  { name: 'insta—lación', selected: false, id:'6' },
  { name: 'música',selected: false,  id:'7' },
  { name: 'tattoo',selected: false, id:'8' },
  { name: 'tipo—grafía',selected: false, id:'9' },
  { name: '3D—Escultura',selected: false, id:'10' },
  { name: 'otros',selected: false, id:'11' }
  ]
};
//INSERT type FILE
uploadPercent: Observable<number>;
downloadURL: Observable<string>;
urlImagen: string

coverUrlImagen: string
piezaUrlImagen: string
autorUrlImagen: string

customUrlUser:any

  constructor(
    private fb: FormBuilder,
    private storage: AngularFireStorage,
    private formService: FormService) {
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
      coverpic: new FormControl(''),
      piezapic: new FormControl(''),
      URLpieza: new FormControl(''),

      //CATEGORIAS
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
        Validators.maxLength(30)
      ]),
      email: new FormControl('@gmail.com', [
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      infoautor: new FormControl('', [
        Validators.required,
        Validators.maxLength(250)
      ]),
      autorpic: new FormControl(''),

      ig: new FormControl(''),
      be: new FormControl(''),
      web: new FormControl(''),

    }, [
      this.validarImagen.bind(this)
    ])

    let titulopiezaControl = this.formRegistro.controls.titulopieza
    //valueChanges -> observable , por eso le ponemos .subscribe
    titulopiezaControl.valueChanges.pipe(debounceTime(500)).subscribe((value)=>{
      console.log(value)
    })

  }
  //-->End OnInit()

  //Método submit Formulario:
  manejarFormulario(){
    const formRegistroValue = Object.assign({}, this.formRegistro.value, {
      categorias: this.formRegistro.value.categorias.map((selected, i) => {
        return {
          id: this.user.categorias[i].id,
          selected
       }
      })
      
    });

    //Método para FILTRAR CATEGORIAS seleccionadas(true):
    formRegistroValue.categorias = formRegistroValue.categorias.filter(item => item.selected == true).map(item => item.id)

    formRegistroValue.coverpic = this.coverUrlImagen
    formRegistroValue.piezapic = this.piezaUrlImagen
    formRegistroValue.autorpic = this.autorUrlImagen

    //Valor del input de RRSS:
    formRegistroValue.ig = ` https://www.instagram.com/${formRegistroValue.ig}`
    formRegistroValue.be = `https://www.behance.net/${formRegistroValue.be}`
    formRegistroValue.web = `https://www.${formRegistroValue.web}`
    
    //FormService
    this.formService.postFormRegistro(formRegistroValue).subscribe((res) => {
      console.log(res)
    })

    console.log(formRegistroValue)

    //Reseteo al enviar formRegistro
    this.formRegistro.reset()
  }
  //Fin del boton submit
  
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

//Método type:file
onChangeImage($event){
  let inputName = $event.target.name
  console.log(inputName)
  const image = $event.target.files[0] //recupera el fichero del input
  let r = Math.random().toString(36).substring(7);
  const filePath = `images/${inputName}/${r}.jpg`; //ruta file
  const fileRef = this.storage.ref(filePath);
  const task = this.storage.upload(filePath, image); //tarea de ejecución para subir la imagen al contenedor de firebase

  // observe percentage changes
  this.uploadPercent = task.percentageChanges();
  // get notified when the download URL is available (cuando se termina de subir)
  task.snapshotChanges().pipe(
    finalize(() => {
      this.downloadURL = fileRef.getDownloadURL() //url pública para recuperar las imágenes
      this.downloadURL.subscribe(url => {
        console.log(url)
          if(inputName == 'coverpic'){
            this.coverUrlImagen = url //guarda la url en un string que hemos creado nosotros
          }else if(inputName == 'piezapic'){
            this.piezaUrlImagen = url
          }else if(inputName == 'autorpic'){
            this.autorUrlImagen = url
          }else {
            console.log(url)
          }
        })     
      }) 
    )
    .subscribe()
}

//Validador FILE image:

  validarImagen(group){
    if(this.coverUrlImagen,this.piezaUrlImagen,this.autorUrlImagen) {
      return null
    }else{
      return { imagen: 'Upss, el archivo de la pieza no se ha subido'}
    }
  }

  // //URLs:
  // onChangeUrl($event){
  //   this.customUrlUser= $event.target.value
  // }
  //$event.target.value

  // *en el formcontrol--> this.validarImagen.bind(this)
  //bind() es un metodo que te recuerda a nivel interno de tus validaciones que es el this conioo

}
