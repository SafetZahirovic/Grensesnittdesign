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

import{ MapsPage } from '../pages/maps/maps';

import { GoogleMapsPage } from '../pages/google-maps/google-maps';

import { Geolocation } from '@ionic-native/geolocation';

import { ResetPasswordPage } from '../pages/reset-password/reset-password';




@NgModule({
  declarations: [
    MyApp,
    MapsPage,
    HomePage,
    SigninPage,
    SignupPage,
    GoogleMapsPage,
    ResetPasswordPage
    
    
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
    GoogleMapsPage,
    ResetPasswordPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation
  ]
})
export class AppModule {}
