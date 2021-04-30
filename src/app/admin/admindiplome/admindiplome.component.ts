import { Component, OnInit } from '@angular/core';
import { Diplome } from 'src/app/model/diplome';
import { DiplomeService } from 'src/app/service/diplome.service';

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

}
