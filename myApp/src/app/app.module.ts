import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import{ MapsPage } from '../pages/maps/maps';
import { Geolocation } from '@ionic-native/geolocation';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { PlacePage } from "../pages/placepage/placepage";
import {PlacesPage} from '../pages/places/places';
import { Navbar } from '../pages/navbar/navbar'
import  { PlaceDescriptionPage } from '../pages/place-description/place-description';
import {HttpClientModule} from '@angular/common/http';
import { MapComponent } from '../components/map/map';
import { PopoverComponent } from '../components/popover/popover';
import { ExpandableComponent } from '../components/expandable/expandable';
import { MyPlacesPage } from '../pages/my-places/my-places';


@NgModule({
  declarations: [
    MyApp,
    SigninPage,
    SignupPage,
    ResetPasswordPage,
    PlacesPage,
    PlaceDescriptionPage,
    MapsPage,
    MapComponent,
    TabsPage,
    PopoverComponent,
    ExpandableComponent,
    MyPlacesPage
  ],
  imports: [
    
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SigninPage,
    SignupPage,
    ResetPasswordPage,
    PlacesPage,
    PlaceDescriptionPage,
    MapsPage,
    MapComponent,
    TabsPage,
    PopoverComponent,
    ExpandableComponent,
    MyPlacesPage
  ],
  providers: [
    ExpandableComponent,
    MapComponent,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
