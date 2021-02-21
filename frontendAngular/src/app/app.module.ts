import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes
import { EncabezadoStoreComponent } from './encabezado-store/encabezado-store.component';
import { ContenidoStoreComponent } from './contenido-store/contenido-store.component';

// Formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

//Peticiones
import { HttpClientModule } from '@angular/common/http'

// Servicio
import { BooksService } from './books.service'

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoStoreComponent,
    ContenidoStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
