import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { FuncionamientoComponent } from './funcionamiento/funcionamiento.component';
import { HeaderComponent } from './header/header.component';
import { DownloadComponent } from './download/download.component';
import { FichaComponent } from './ficha/ficha.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    FuncionamientoComponent,
    DownloadComponent,
    HeaderComponent,
    FichaComponent,
    GaleriaComponent,
    DownloadComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
