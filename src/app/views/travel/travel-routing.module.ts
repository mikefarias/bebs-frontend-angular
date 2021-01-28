import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelComponent } from './travel.component';
import { TravelPostComponent } from '../../components/travel/travel-post/travel-post.component';

const routes: Routes = [
  {
    path: '',
    component: TravelComponent,
    data: {
      title: 'Viagens'
    }
  },
  {
    path: 'cadastrar',
    component: TravelPostComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelRoutingModule {}
