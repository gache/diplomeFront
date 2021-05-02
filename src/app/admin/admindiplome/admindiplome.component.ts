import { Component, OnInit } from '@angular/core';
import { Diplome } from 'src/app/model/diplome';
import { DiplomeService } from 'src/app/service/diplome.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-admindiplome',
  templateUrl: './admindiplome.component.html',
  styleUrls: ['./admindiplome.component.css']
})
export class AdmindiplomeComponent implements OnInit {
  listDiplomes: Diplome[];
  constructor(private diplomeService: DiplomeService) { }

  ngOnInit(): void {
    this.diplomeService.getAllDiplome().subscribe(resp => {
      this.listDiplomes = resp;
      //console.log( this.listDiplomes );
    });
  }

  delete(diplome: Diplome): void {
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: 'Vous êtes sûr ?',
      text: `Vous souhaitez eliminer le Dîplome ${diplome.nomDiplome} à école ${diplome.ecole} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, Eliminer!',
      cancelButtonText: 'Non, Cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.diplomeService.delete(diplome.id).subscribe(
          response => {
            this.listDiplomes = this.listDiplomes.filter(diplo => diplo !== diplome);
          });
        swalWithBootstrapButtons.fire(
          'Dîplome eliminer!',
          `Le Dîplome ${diplome.description} a été eliminé avec satisfaction`,
          'success'
        )
      }
    });
  }

}
