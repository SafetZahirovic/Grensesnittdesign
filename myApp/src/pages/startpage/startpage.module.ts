import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Startpage } from './startpage';

@NgModule({
  declarations: [
    Startpage,
  ],
  imports: [
    IonicPageModule.forChild(Startpage),
  ],
})
export class StartpageModule {}
