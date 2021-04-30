import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Diplome } from 'src/app/model/diplome';
import { DiplomeService } from '../../../service/diplome.service';


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
  }


  public create (): void {
    console.log( this.diplome );

    this.diplomeService.create( this.diplome ).subscribe(
      respo => this.router.navigate( ['diplomesAdmin'] )
    )


  }


}
