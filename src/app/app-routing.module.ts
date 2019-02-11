import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //header,main,footer /select-about,comofunciona,quehacemos,galeria,descarga /fichaArtista,pieza /FUTURO: login,eventos,calendario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
