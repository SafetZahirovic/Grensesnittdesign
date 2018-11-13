import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';

<<<<<<< HEAD
<<<<<<< HEAD

import{ MapsPage } from '../pages/maps/maps';

import { GoogleMapsPage } from '../pages/google-maps/google-maps';

import { Geolocation } from '@ionic-native/geolocation';

import { ResetPasswordPage } from '../pages/reset-password/reset-password';

import { PlacesPage } from '../pages/places/places';

=======
import { PlacePage } from "../pages/placepage/placepage";

import { Navbar } from '../pages/navbar/navbar'
>>>>>>> b181b53cec98215723f30687549e0043702adf7f
=======
import { PlacePage } from "../pages/placepage/placepage";

import { Navbar } from '../pages/navbar/navbar'
>>>>>>> b181b53cec98215723f30687549e0043702adf7f

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPage,
<<<<<<< HEAD
<<<<<<< HEAD

    GoogleMapsPage,
    ResetPasswordPage,
    
    PlacesPage,

    
=======
    PlacePage,
    Navbar

>>>>>>> b181b53cec98215723f30687549e0043702adf7f
=======
    PlacePage,
    Navbar

>>>>>>> b181b53cec98215723f30687549e0043702adf7f
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPage,
<<<<<<< HEAD
<<<<<<< HEAD
    GoogleMapsPage,
    ResetPasswordPage,
    

    PlacesPage,

=======
    PlacePage,
    Navbar
>>>>>>> b181b53cec98215723f30687549e0043702adf7f
=======
    PlacePage,
    Navbar
>>>>>>> b181b53cec98215723f30687549e0043702adf7f
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
