import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage'
import { environment } from 'src/environments/environment';
//COMPONENTES:
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
import { LoginGuard } from './login.guard';

import { FilterPipe }from './filter.pipe';
import { FooterComponent } from './footer/footer.component'
import { GaleriaurbanaComponent } from './galeriaurbana/galeriaurbana.component'



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
    FormComponent,
    FilterPipe,
    FooterComponent,
    GaleriaurbanaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
