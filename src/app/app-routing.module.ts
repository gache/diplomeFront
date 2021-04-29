import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindiplomeComponent } from './admin/admindiplome/admindiplome.component';
import { AdminprojetsComponent } from './admin/adminprojets/adminprojets.component';

const routes: Routes = [
  { path: 'diplomesAdmin', component: AdmindiplomeComponent },
  { path: ' projetsAdmin', component: AdminprojetsComponent },
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
} )
export class AppRoutingModule { }
