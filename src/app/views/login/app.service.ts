import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from './models/user';
import { BaseService } from '../../services/baseService';

@Injectable({
  providedIn: 'root'
})
export class AppService extends BaseService{

  constructor(private httpClient: HttpClient) { super();}

  registrarUsuario(user: User): Observable<User> {
    let response = this.httpClient
        .post(this.UrlServiceV1 + '/autenticacao/registrar', JSON.stringify(user), this.ObterHeaderJson())
        .pipe(
            map(this.extractData),
            catchError(this.handleError));

    return response;
  }

  login(user: User): Observable<User> {
    let response = this.httpClient
        .post(this.UrlServiceV1 + '/autenticacao/logar', JSON.stringify(user), this.ObterHeaderJson())
        .pipe(
            map(this.extractData));
          
    return response;
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

  extractData(response: any) {
    return response.data || {};
  }

}
