import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Travel } from './models/travel';
import { FormGroup } from '@angular/forms';

import { TravelService } from './travel.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'travel.component.html'
})
export class TravelComponent implements OnInit{

  travel = {} as Travel;
  travels: Travel[];

  constructor(private router: Router, private service: TravelService) {}

  ngOnInit() {
    this.service.getAllTravel()
      .subscribe(resposta => this.travels = resposta);
  }

  navigateToTravelCreate(): void {
    this.router.navigate(['viagem/cadastrar'])
  }

}
