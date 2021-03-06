import swal from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
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


  public getDiplome ( id ): Observable<Diplome> {
    return this.Http.get<Diplome>( `${this.url}/${id}` ).pipe(
      catchError( e => {
        if ( e.status != 401 && e.error.message ) {
          this.router.navigate( ['diplomesAdmin'] )
          console.log( e.error.message );
          swal.fire( "Erreur au moment de l'edition", e.error.message, 'error' );
        }
        return throwError( e )
      } )
    );
  }

  public create ( diplome: Diplome ): Observable<Diplome> {
    return this.Http.post<any>( this.url, diplome, { headers: this.httpHeaders } )
      .pipe(
        map( ( response: any ) => response.diplome as Diplome ),
        catchError( e => {
          if ( e.status == 400 ) {
            return throwError( e );
          }
          console.error( e.error.errors );
          swal.fire( e.error.message, e.error.errors, 'error' );
          return throwError( e );

        } ) );
  }

  public update ( diplome: Diplome ): Observable<Diplome> {
    return this.Http.put<Diplome>( `${this.url}/${diplome.id}`, diplome, { headers: this.httpHeaders } );
  }

  public delete ( id: number ): Observable<Diplome> {
    return this.Http.delete<Diplome>( `${this.url}/${id}`, { headers: this.httpHeaders } );
  }






}
