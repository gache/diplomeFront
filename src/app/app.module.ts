import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importation pour faire petitions Http
import { HttpClientModule } from '@angular/common/http';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindiplomeComponent } from './admin/admindiplome/admindiplome.component';
import { AdminnavbarComponent } from './admin/adminnavbar/adminnavbar.component';
import { AdminprojetsComponent } from './admin/adminprojets/adminprojets.component';
import { CreatediplomeComponent } from './admin/formCreate/creatediplome/creatediplome.component';


@NgModule( {
  declarations: [
    AppComponent,
    AdmindiplomeComponent,
    AdminnavbarComponent,
    AdminprojetsComponent,
    FooterComponent,
    CreatediplomeComponent

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
