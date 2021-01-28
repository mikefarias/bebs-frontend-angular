import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Travel } from './models/travel';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  url = 'http://192.168.0.102:8080/api/v1/travel';

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  postTravel(travel: Travel) {
      return this.httpClient.post<Travel>(this.url, JSON.stringify(travel), this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }

  getAllTravel(){
    return this.httpClient.get<Array<Travel>>(this.url);
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
