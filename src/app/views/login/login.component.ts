import { User } from './models/user';
import { Company } from './models/company';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AppService } from './app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit{
  contatos: Array<any>;
  contato: any;

  company = {} as Company;
  companies: Company[];

  constructor(private service: AppService) {}

  ngOnInit() {
    this.contato = {};
  }

  saveUser(frm: FormGroup) {
    this.service.saveUser(this.contato).subscribe(resposta => {
      this.contatos.push(resposta);

      frm.reset();
    });
  }

  saveUserCompany(frm: FormGroup) {
    this.service.saveUserCompany(this.company).subscribe(resposta => {
      this.companies.push(resposta);

      frm.reset();
    });
  }
}
