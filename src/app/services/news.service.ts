import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NewsService {

  private newsUrl = 'https://hn.algolia.com/api/v1/search_by_date?query=angular&page=4';  // URL a la API web
  private Url = 'https://hn.algolia.com/api/v1/';  // URL a la API web
  //private newsUrl = 'https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0';  // URL a la API web

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    ) { 

    }

    /** OBTENGA héroes del servidor */
    getNews(): Observable<any[]> {
      return this.http.get<any[]>(this.newsUrl)
        .pipe(
          /* tap(_ => this.log('fetched heroes')),
          catchError(this.handleError<any[]>('getHeroes', [])) */
        );
    }
 
    getNewsByFramework(text:string,page:number): Observable<any[]> {
    
      return this.http.get<any[]>(`${this.Url}search_by_date?query=${text}&page=${page}`)
        .pipe(
          /* tap(_ => this.log('fetched heroes')),
             catchError(this.handleError<any[]>('getHeroes', [])) 
          */
        );
    }

    /** * Manejar la operación Http que falló. * Deje que la aplicación continúe. * 
     * Operación @param : nombre de la operación que falló * Resultado @param : valor 
     * opcional para devolver como resultado observable */
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
  
    /** Registra un mensaje de HeroService con MessageService */

    private log(message: string) {
      //this.messageService.add(`HeroService: ${message}`);
    }

  
}