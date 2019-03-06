import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Components importados:
import { MainComponent } from './main/main.component';
import { FormComponent } from './form/form.component';
import { FichaComponent } from './ficha/ficha.component';
import { AboutComponent } from './about/about.component';
import { FuncionamientoComponent } from './funcionamiento/funcionamiento.component';
import { DownloadComponent } from './download/download.component';
import { GaleriaComponent } from './galeria/galeria.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'home', component: MainComponent, children:[
    { path: 'home/about', component: AboutComponent},
    { path: 'home/funcionamiento', component: FuncionamientoComponent},
    { path: 'home/galeria', component: GaleriaComponent}, //TODO > :id
    { path: 'home/app', component:DownloadComponent}
  ]},
  //{ path: 'contact', component: ContactComponent},
  { path: 'registro', component: FormComponent},
  { path: 'ficha', component: FichaComponent},

  //{ path: '/admin', component: loginComponent},
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
