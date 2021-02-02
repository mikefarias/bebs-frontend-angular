import { User } from './models/user';
import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import { LocalStorageUtils } from '../../util/localstorage';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit{

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  errors: any[] = [];
  user:User;
  loginForm: FormGroup;
  public LocalStorage = new LocalStorageUtils();

  constructor(private service: AppService, private router: Router,private fb: FormBuilder,) {}

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    if (this.loginForm.dirty && this.loginForm.valid) {
      this.user = Object.assign({}, this.user, this.loginForm.value);

      this.service.login(this.user).subscribe( 
        sucesso => {this.processarSucesso(sucesso)}, 
        falha => {this.processarFalha(falha)}
      );
    }
    this.router.navigate(['/login']);
  }

  processarSucesso(response: any) {
    this.errors = [];

    this.LocalStorage.salvarDadosLocaisUsuario(response);

    //let toast = this.toastr.success('Login realizado com Sucesso!', 'Bem vindo!!!');
    //if(toast){
    //  toast.onHidden.subscribe(() => {
      console.log('Login realizado com Sucesso!', 'Bem vindo!!!');
        this.router.navigate(['/']);
    //  });
    //}
  }

  processarFalha(fail: any){
    this.errors = fail.error.errors;
    //this.toastr.error('Ocorreu um erro!', 'Opa :(');
    console.log('Deu ruim :/ ');
  }
}
