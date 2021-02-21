import { environment } from './../../environments/environment';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from "rxjs";
import { LocalStorageUtils } from '../util/localstorage';

export abstract class BaseService {
    
    public LocalStorage = new LocalStorageUtils();
    protected UrlServiceV1: string = environment.apiUrlv1

    protected ObterHeaderJson() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }).set('Access-Control-Allow-Origin', 'http://localhost:4200'),
        };
    }

    protected extractData(response: any) {
        return response.data || {};
    }

    protected serviceError(response: Response | any) {
        let customError: string[] = [];

        if (response instanceof HttpErrorResponse) {

            if (response.statusText === "Unknown Error") {
                customError.push("Ocorreu um erro desconhecido");
                response.error.errors = customError;
            }
        }

        console.error(response);
        return throwError(response);
    }
}