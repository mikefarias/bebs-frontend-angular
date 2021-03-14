import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { BaseService } from './baseService';
import { Router } from '@angular/router';


@Injectable()
export class AutenticacaoGuard extends BaseService implements CanActivate {
    
    constructor(private router: Router){ super(); }

    canActivate() : boolean{
        
        var user = this.LocalStorage.obterUsuario();
        if(!user){
            this.router.navigate(['/login']);
            return false;
        } 
    return true;  
    }
}