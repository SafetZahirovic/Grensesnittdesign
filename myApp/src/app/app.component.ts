import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'Firebase';
import { TabsPage } from '../pages/tabs/tabs';
<<<<<<< HEAD
<<<<<<< HEAD

import {SigninPage} from '../pages/signin/signin'
import { MapsPage } from '../pages/maps/maps';
import { GoogleMapsPage } from '../pages/google-maps/google-maps';

import { ResetPasswordPage } from '../pages/reset-password/reset-password';

import {PlacesPage} from '../pages/places/places';

=======
import {SigninPage} from '../pages/signin/signin';
import { PlacePage } from '../pages/placepage/placepage';
>>>>>>> b181b53cec98215723f30687549e0043702adf7f
=======
import {SigninPage} from '../pages/signin/signin';
import { PlacePage } from '../pages/placepage/placepage';
>>>>>>> b181b53cec98215723f30687549e0043702adf7f

var config = {
  apiKey: "AIzaSyDqM3XHOVjR4IDR2vQfAyUzEnLCHgGlXPY",
  authDomain: "grensesnittdesign.firebaseapp.com",
  databaseURL: "https://grensesnittdesign.firebaseio.com",
  projectId: "grensesnittdesign",
  storageBucket: "grensesnittdesign.appspot.com",
  messagingSenderId: "687720485139"
};


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD
<<<<<<< HEAD

  rootPage:any = PlacesPage;

=======
  rootPage:any = PlacePage;
>>>>>>> b181b53cec98215723f30687549e0043702adf7f
=======
  rootPage:any = PlacePage;
>>>>>>> b181b53cec98215723f30687549e0043702adf7f

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
