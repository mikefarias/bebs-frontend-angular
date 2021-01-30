import { routes } from './../../app.routing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Company } from './models/company';
import { FormGroup } from '@angular/forms';

import { RegisterService } from './register.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit{

  company = {} as Company;
  companies: Company[];

  constructor(private router: Router, private service: RegisterService) {}

  ngOnInit() {
  }

  registerUser(frm: FormGroup) {
    this.service.postUserCompany(this.company);
    frm.reset();
    this.router.navigate(['/login']);
  }
}
