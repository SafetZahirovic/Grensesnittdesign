import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlaceDescriptionPage } from './place-description';
import { MapComponent } from '../../components/map/map';

@NgModule({
  declarations: [
    PlaceDescriptionPage,
    MapComponent
  ],
  imports: [
    MapComponent,
    IonicPageModule.forChild(PlaceDescriptionPage),
  ],
})
export class PlaceDescriptionPageModule {}
