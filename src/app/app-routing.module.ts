import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DatakeenComponent} from './datakeen/datakeen.component';

const routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'datakeen'
  },

  {
    path: 'datakeen',
    component: DatakeenComponent
  }
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
