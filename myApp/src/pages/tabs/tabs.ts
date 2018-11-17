import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import {PlacesPage} from '../places/places';
import  { PlaceDescriptionPage } from '../place-description/place-description';
import { SigninPage } from '../signin/signin';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = SigninPage;
  tab2Root = PlacesPage;
  tab3Root = PlaceDescriptionPage;

  constructor() {

  }
}
