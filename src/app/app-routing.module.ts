import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindiplomeComponent } from './admin/admindiplome/admindiplome.component';
import { AdminprojetsComponent } from './admin/adminprojets/adminprojets.component';
import { CreatediplomeComponent } from './admin/formCreate/creatediplome/creatediplome.component';

const routes: Routes = [
  { path: 'diplomesAdmin', component: AdmindiplomeComponent },
  { path: 'projetsAdmin', component: AdminprojetsComponent },
  { path: 'formCreateDiplome', component: CreatediplomeComponent },
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
} )
export class AppRoutingModule { }
