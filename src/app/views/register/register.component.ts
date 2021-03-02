import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './models/usuario';
import { FormGroup } from '@angular/forms';

import { RegisterService } from './register.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit{

  usuario = {} as Usuario;

  constructor(private router: Router, private service: RegisterService) {}

  ngOnInit() {
  }

  registrarUsuario(frm: FormGroup) {
    this.service.registrarUsuario(this.usuario);
    frm.reset();
    this.router.navigate(['/login']);
  }
}
