import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IDiplome } from '../model/diplome';

@Injectable( {
  providedIn: 'root'
} )
export class DiplomeService {

  constructor( private Http: HttpClient, private router: Router ) { }
  private url = "http://localhost:8080/api/diplomes";

  // methode pour avoir la liste de diplome
  public getAllDiplome (): Observable<IDiplome[]> {
    return this.Http.get<IDiplome[]>( this.url );
  }


}
