import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import {PlacesPage} from '../places/places';
import  { PlaceDescriptionPage } from '../place-description/place-description';
import { SigninPage } from '../signin/signin';
import { MyPlacesPage } from '../my-places/my-places';
import { Startpage } from '../startpage/startpage';
import * as firebase from 'Firebase';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = Startpage;
  tab2Root = PlacesPage;
  tab3Root = MyPlacesPage;
  constructor() {
    

  }

  ionViewDidLoad(){}
    
}
