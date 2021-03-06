import { Usuario } from './models/usuario';
import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageUtils } from '../../util/localstorage';
import { ToastrService } from 'ngx-toastr';
import { LoginService} from './login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit{

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  errors : any[] = [];
  usuario : Usuario;
  loginForm : FormGroup;

  public LocalStorage = new LocalStorageUtils();

  constructor(private service: LoginService, 
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
      this.usuario = Object.assign({}, this.usuario, this.loginForm.value);

      this.service.login(this.usuario).subscribe( 
        sucesso => {this.processarSucesso(sucesso)}, 
        falha => {this.processarFalha(falha)}
      );
    }
    else{
      this.toastr.error("Usuário e/ou Senha inválidos!");
    }
  }

  registrarUsuario() {
    this.router.navigate(['/register']);
  }

  processarSucesso(response: any) {
    if(response.userToken){
      this.LocalStorage.salvarDadosLocaisUsuario(response);

      this.toastr.success('Login realizado com Sucesso!');
      this.router.navigate(['/']);
    }
    else
      this.toastr.error(response.erros);
  }

  processarFalha(fail: any){
    this.toastr.error("Usuário e/ou Senha inválidos!");
  }
}