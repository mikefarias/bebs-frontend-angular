import { User } from './models/user';
import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import { LocalStorageUtils } from '../../util/localstorage';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private service: AppService, 
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService) {}

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
    else{
      this.toastr.error("Usuário e/ou Senha inválidos!");
    }
  }

  processarSucesso(response: any) {
    if(response.userToken){
      this.LocalStorage.salvarDadosLocaisUsuario(response);

      let toast = this.toastr.success('Login realizado com Sucesso!');
      if(toast){
        toast.onHidden.subscribe(() => {
          this.router.navigate(['/']);
        });
      }
    }
    else
    {
      this.toastr.error(response.erros);
    }

  }

  processarFalha(fail: any){
    this.toastr.error("Usuário e/ou Senha inválidos!");
  }
}
