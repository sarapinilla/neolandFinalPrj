import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop'

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { FuncionamientoComponent } from './funcionamiento/funcionamiento.component';
import { HeaderComponent } from './header/header.component';
import { DownloadComponent } from './download/download.component';
import { FichaComponent } from './ficha/ficha.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    FuncionamientoComponent,
    HeaderComponent,
    FichaComponent,
    GaleriaComponent,
    DownloadComponent,
    AdminComponent,
    LoginComponent,
    ContactComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
