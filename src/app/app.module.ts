import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { FuncionamientoComponent } from './funcionamiento/funcionamiento.component';
import { HeaderComponent } from './header/header.component';
import { FichaComponent } from './ficha/ficha.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    FuncionamientoComponent,
    HeaderComponent,
    FichaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
