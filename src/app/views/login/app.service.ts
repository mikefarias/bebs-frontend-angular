import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from './models/user';
import { Company } from './models/company';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  url = 'https://localhost:44325/api/autenticacao/logar';

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

    postLogin(user: User) {
        return this.httpClient.post<User>(this.url, JSON.stringify(user), this.httpOptions)
        .pipe(
          retry(2),
          catchError(err=> Observable.throw(err.message)))
    }

    // salva um user
  saveUser(user: User): Observable<User>{
    return this.httpClient.post<User>(this.url, JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

    // salva um user
    saveUserCompany(company: Company): Observable<Company> {
      return this.httpClient.post<Company>(this.url, JSON.stringify(company), this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
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
