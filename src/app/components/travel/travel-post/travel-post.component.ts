import { FormGroup } from '@angular/forms';
import { Travel } from './../../../views/travel/models/travel';
import { Component, OnInit } from '@angular/core';
import {TravelService} from '../../../views/travel/travel.service';
@Component({
  selector: 'app-travel-post',
  templateUrl: './travel-post.component.html',
  styleUrls: ['./travel-post.component.css']
})
export class TravelPostComponent implements OnInit {

  travel = {} as Travel;

  constructor(private service: TravelService) { }

  ngOnInit(): void {
  }

  // addTravel(frm: FormGroup){
  //   this.service.postTravel(this.travel);
  // }

  addTravel(): void {
      this.service.postTravel(this.travel).subscribe(() => {
        console.log("travel create ihuuuu")
      })

  }
}
