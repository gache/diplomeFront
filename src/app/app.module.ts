import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindiplomeComponent } from './admin/admindiplome/admindiplome.component';
import { AdminnavbarComponent } from './admin/adminnavbar/adminnavbar.component';
import { AdminprojetsComponent } from './admin/adminprojets/adminprojets.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Importation pour faire petitions Http
import { HttpClientModule } from '@angular/common/http';

@NgModule( {
  declarations: [
    AppComponent,
    AdmindiplomeComponent,
    AdminnavbarComponent,
    AdminprojetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
} )
export class AppModule { }
