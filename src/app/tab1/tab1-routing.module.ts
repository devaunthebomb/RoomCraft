import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import {StartPage} from '../start/start.page';


const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'start',
    component: StartPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
