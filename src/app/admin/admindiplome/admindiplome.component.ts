import { Component, OnInit } from '@angular/core';
import { Diplome } from 'src/app/model/diplome';
import { DiplomeService } from 'src/app/service/diplome.service';
import swal from 'sweetalert2';
@Component( {
  selector: 'app-admindiplome',
  templateUrl: './admindiplome.component.html',
  styleUrls: ['./admindiplome.component.css']
} )
export class AdmindiplomeComponent implements OnInit {
  listDiplomes: Diplome[];
  constructor( private diplomeService: DiplomeService ) { }

  ngOnInit (): void {
    this.diplomeService.getAllDiplome().subscribe( resp => {
      this.listDiplomes = resp;
      //console.log( this.listDiplomes );
    } );
  }

  delete ( diplome: Diplome ): void {
    const swalWithBootstrapButtons = swal.mixin( {
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    } );
    swalWithBootstrapButtons.fire( {
      title: 'Está seguro?',
      text: `¿Seguro que desea elminar el perfil de ${diplome.nomDiplome} ${diplome.ecole}
      `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    } ).then( ( result ) => {
      if ( result.value ) {
        this.diplomeService.delete( diplome.id ).subscribe(
          response => {
            // Con lo siguiente se actualiza la lista de empleados
            this.listDiplomes = this.listDiplomes.filter( diplome => diplome !== diplome );
          } );
        swalWithBootstrapButtons.fire(
          'Perfil eliminado!',
          `El perfil ${diplome.description} fue eliminado con éxito.`,
          'success'
        )
      }
    } );
  }

}
