import { User } from './models/user';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit{

  user = {} as User;
  users: User[];

  constructor(private service: AppService, private router: Router) {}

  ngOnInit() {

  }

  postLogin() {
      this.service.postLogin(this.user).subscribe( () => {
        console.log("logou?")
      });
      this.router.navigate(['/login']);
  }
}
