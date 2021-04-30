import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Diplome } from '../model/diplome';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable( {
  providedIn: 'root'
} )
export class DiplomeService {

  constructor( private Http: HttpClient,
    private router: Router,
  ) { }


  private url = "http://localhost:8080/api/diplomes";
  private httpHeaders = new HttpHeaders( { 'Content-Type': 'application/json' } );


  // methode pour avoir la liste de diplome
  public getAllDiplome (): Observable<Diplome[]> {
    return this.Http.get<Diplome[]>( this.url ).pipe(
      map( response => response as Diplome[] )
    );
  }

  public create ( diplome: Diplome ): Observable<Diplome> {
    return this.Http.post<Diplome>( this.url, diplome, { headers: this.httpHeaders } )
  }

  public getDiplome(id): Observable<Diplome> {
    return this.Http.get<Diplome>(`${this.url}/${id}`)
  }




}
