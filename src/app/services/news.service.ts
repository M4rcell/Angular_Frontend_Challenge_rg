import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Framework } from '../models/news.model';

@Injectable({
  providedIn: 'root',
})
export class NewsService {

  private url = 'https://hn.algolia.com/api/v1/';  // URL a la API web

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    ) { 

    }

    /** OBTENGA news del servidor */
    getNews(): Observable<any[]> {
      return this.http.get<any[]>(this.url)
        .pipe(
          tap(_ => this.log('fetched news')),
          catchError(this.handleError<any[]>('frameworks', []))
        );
    }
 
    getNewsByFramework(text:string,page:number): Observable<Framework[]> {
    
      return this.http.get<Framework[]>(`${this.url}search_by_date?query=${text}&page=${page}`)
        .pipe(
          tap(_ => this.log('fetched news')),
             catchError(this.handleError<any[]>('news', [])) 
         
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: envía el error a la infraestructura de registro remoto
        console.error(error); // iniciar sesión en la consola en su lugar
  
        // TODO: mejor trabajo de transformación del error para el consumo del usuario
        this.log(`${operation} failed: ${error.message}`);
  
        // Deje que la aplicación siga funcionando devolviendo un resultado vacío
        return of(result as T);
      };
    }
  
    /** Registra un mensaje de News con MessageService */

    private log(message: string) {
      console.log(`Frameworks: ${message}`);
    }

  
}