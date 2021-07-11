import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedDesignsPageRoutingModule } from './saved-designs-routing.module';

import { SavedDesignsPage } from './saved-designs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedDesignsPageRoutingModule
  ],
  declarations: [SavedDesignsPage]
})
export class SavedDesignsPageModule {}
