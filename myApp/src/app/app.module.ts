import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';

<<<<<<< HEAD
import{ MapsPage } from '../pages/maps/maps';

import { GoogleMapsPage } from '../pages/google-maps/google-maps';

import { Geolocation } from '@ionic-native/geolocation';

import { ResetPasswordPage } from '../pages/reset-password/reset-password';



=======
import { PlacesPage } from '../pages/places/places'
>>>>>>> 4454d8ab8133280fc1ba1f63e520d137825ab3b7

@NgModule({
  declarations: [
    MyApp,
    MapsPage,
    HomePage,
    SigninPage,
    SignupPage,
<<<<<<< HEAD
    GoogleMapsPage,
    ResetPasswordPage
    
=======
    PlacesPage,
>>>>>>> 4454d8ab8133280fc1ba1f63e520d137825ab3b7
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapsPage,
    HomePage,
    SigninPage,
    SignupPage,
<<<<<<< HEAD
    GoogleMapsPage,
    ResetPasswordPage
    
=======
    PlacesPage,
>>>>>>> 4454d8ab8133280fc1ba1f63e520d137825ab3b7
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation
  ]
})
export class AppModule {}
