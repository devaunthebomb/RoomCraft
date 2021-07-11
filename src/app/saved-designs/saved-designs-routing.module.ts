import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedDesignsPage } from './saved-designs.page';

const routes: Routes = [
  {
    path: '',
    component: SavedDesignsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedDesignsPageRoutingModule {}
