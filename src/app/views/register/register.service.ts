import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario} from './models/usuario';
import { BaseService } from '../../services/baseService';
@Injectable({
  providedIn: 'root'
})
export class RegisterService extends BaseService{

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { super();}

  registrarUsuario(usuario: Usuario): Observable<Usuario> {
    let response = this.httpClient
        .post(this.UrlServiceV1 + '/autenticacao/registrar', JSON.stringify(usuario), this.ObterHeaderJson())
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

}
