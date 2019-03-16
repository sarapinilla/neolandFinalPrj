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
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full'},
  //MAIN
  { path: 'home', component: MainComponent, children:[
    { path: 'home/about', component: AboutComponent},
    { path: 'home/funcionamiento', component: FuncionamientoComponent},
    //{ path: 'home/galeriaurbana', component: UrbanaComponent},
    { path: 'home/galeria', component: GaleriaComponent},
    { path: 'home/app', component:DownloadComponent}
  ]},
  //ROUTER-OUTLET:
  { path: 'ficha/:autorId', component: FichaComponent},
  { path: 'registro', component: FormComponent},
  { path: 'contact', component: ContactComponent},
  //Users only:
<<<<<<< HEAD
  { path: 'admin', component: LoginComponent, children:[ //añadir GUARD canActivatedChield
    { path: 'admin/registros', component: AdminComponent} 
  ]},
  // { path: 'admin/registros', component: AdminComponent},
  
=======
  { path: 'admin', component: LoginComponent}, //LogIn
  { path: 'admin/registros', component: AdminComponent, canActivate: [LoginGuard]},//TablaRegistros + LogOut

>>>>>>> 85e37f8346c1cd7b845e25008f710be24695d010
  { path: '**', component: MainComponent }
  //FALTA PAG.404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
