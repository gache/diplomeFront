import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindiplomeComponent } from './admin/admindiplome/admindiplome.component';
import { AdminprojetsComponent } from './admin/adminprojets/adminprojets.component';
import { CreatediplomeComponent } from './admin/formCreate/creatediplome/creatediplome.component';

const routes: Routes = [
  { path: 'diplomesAdmin', component: AdmindiplomeComponent },
  { path: 'projetsAdmin', component: AdminprojetsComponent },
  { path: 'diplomesAdmin/formCreateDiplome', component: CreatediplomeComponent },
  { path: 'diplomesAdmin/formCreateDiplome/:id', component: CreatediplomeComponent },
];

@NgModule( {
  imports: [RouterModule.forRoot( routes, { relativeLinkResolution: 'legacy' } )],
  exports: [RouterModule]
} )
export class AppRoutingModule { }
