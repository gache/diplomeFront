import { Component, OnInit } from '@angular/core';
import { Diplome } from 'src/app/model/diplome';

@Component( {
  selector: 'app-creatediplome',
  templateUrl: './creatediplome.component.html',
  styleUrls: ['./creatediplome.component.css']
} )
export class CreatediplomeComponent implements OnInit {


  title: string = "Créer un Dîplome";
  diplome: Diplome = new Diplome();
  erreurs: string[];
  constructor() { }

  ngOnInit (): void {
  }


  public create (): void {
    console.log( "hello depuis create" );
    console.log( this.diplome );


  }


}
