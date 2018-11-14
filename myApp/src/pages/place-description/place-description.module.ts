import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlaceDescriptionPage } from './place-description';

@NgModule({
  declarations: [
    PlaceDescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(PlaceDescriptionPage),
  ],
})
export class PlaceDescriptionPageModule {}
