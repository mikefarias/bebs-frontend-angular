import { TravelRoutingModule } from './travel-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, Component } from '@angular/core';

import { TravelComponent } from './travel.component';
import { TravelPostComponent } from '../../components/travel/travel-post/travel-post.component';

@NgModule({
  imports: [
    TravelRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    TravelComponent,
    TravelPostComponent,
  ]
})
export class TravelModule { }
