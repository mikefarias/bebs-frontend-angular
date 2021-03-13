import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './models/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { RegisterService } from './register.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit{

  usuario : Usuario;
  registerForm: FormGroup;

  constructor(private router: Router, private service: RegisterService, private fb: FormBuilder, private toastr: ToastrService) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required]],
      ConfirmPassword: ['', Validators.required],
      Ong : this.fb.group({
        Nome: ['', [Validators.required]],
        Cnpj: ['', [Validators.required]],
        Contato: ['', [Validators.required]],
        Endereco: ['', [Validators.required]]                 
      })
    });
  }

  registrarUsuario() {
    if (this.registerForm.dirty && this.registerForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.registerForm.value);

      this.service.registrarUsuario(this.usuario).subscribe( 
        sucesso => {this.processarSucesso(sucesso)}, 
        falha => {this.processarFalha(falha)}
      );
    }
    else
      this.toastr.error("Dados inválidos!");
  }

  processarSucesso(response: any) {
    if(response.userToken){
      let toast = this.toastr.success('Cadastro realizado com Sucesso!');
      if(toast){
        toast.onHidden.subscribe(() => {
          this.router.navigate(['/login']);
        });
      }
    }
    else
      this.toastr.error(response.erros);
  }

  processarFalha(fail: any){
    this.toastr.error(fail.error.errors);
  }
}
