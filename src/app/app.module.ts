import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importation pour faire petitions Http
import { HttpClientModule } from '@angular/common/http';


import { FormsModule } from '@angular/forms';


import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindiplomeComponent } from './admin/admindiplome/admindiplome.component';
import { AdminnavbarComponent } from './admin/adminnavbar/adminnavbar.component';
import { AdminprojetsComponent } from './admin/adminprojets/adminprojets.component';


@NgModule( {
  declarations: [
    AppComponent,
    AdmindiplomeComponent,
    AdminnavbarComponent,
    AdminprojetsComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
} )
export class AppModule { }
