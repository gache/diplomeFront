import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Diplome } from 'src/app/model/diplome';
import { DiplomeService } from '../../../service/diplome.service';
import swal from 'sweetalert2';


@Component( {
  selector: 'app-creatediplome',
  templateUrl: './creatediplome.component.html',
  styleUrls: ['./creatediplome.component.css']
} )
export class CreatediplomeComponent implements OnInit {


  title: string = "Créer un Dîplome";
  public diplome: Diplome = new Diplome();
  erreurs: string[];
  constructor( private diplomeService: DiplomeService,
    private router: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit (): void {
    this.chargerDiplome()
  }


  public create (): void {
    console.log( this.diplome );
    this.diplomeService.create( this.diplome ).subscribe( respon => {
      this.router.navigate( ['diplomesAdmin'] )
      swal.fire( 'Nouveau Dîplome', `Dîplome ${this.diplome.nomDiplome} a été créer avec satisfaction`, 'success' )
    } );
  }

  public chargerDiplome (): void {
    this.activatedRoute.params.subscribe( params => {
      let id = params['id'];
      if ( id ) {
        this.diplomeService.getDiplome( id ).subscribe( ( diplomeID ) => this.diplome = diplomeID );
      }
    } )
  }

  public update (): void {
    this.diplomeService.update( this.diplome ).subscribe(
      diplome => {
        this.router.navigate( ['diplomesAdmin'] );
        swal.fire( 'Dîplome actualiser', `Diplome ${this.diplome.nomDiplome} a été actualiser avec satisfaction` )
      }
    )
  }




}
