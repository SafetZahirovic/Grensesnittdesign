import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http'

import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import { Subscription } from '../../../node_modules/rxjs/Subscription';
import { getNonHydratedSegmentIfLinkAndUrlMatch } from '../../../node_modules/ionic-angular/umd/navigation/url-serializer';

/**
 * Generated class for the MapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent {

  longitude: String;
  latitude: String;
  currLoc: String[];
  data: Observable<any>;
  
  constructor(public  httpClient: HttpClient) {
    this.currLoc = [];
  }


  getMap(coords){
    console.log(coords);
    
  
  
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FmZXQtMTk5MCIsImEiOiJjam16eGw1aXkyODVrM3FxeWs1NzhrNzE5In0.zS31UERwy9uupx_Ajw7nOw';
  
    //Instansiating map
     new mapboxgl.Map({
       style: 'mapbox://styles/mapbox/streets-v10',
       center: coords,
       zoom: 16,
       container: 'map',
     });
     //Getting coordinates from database
     firebase.database().ref('Users/').on('value', snapshot =>{
      var val = snapshot.val();
      var mapa = [];
      /*Object.keys(val).map(map => {      
        val[map].Places != null && val[map].Places.map(r => {
          mapa.push(r)
        })}); */
  
    this.currLoc.push(coords); 
    //this.getRoutes(map,this.currLoc,mapa);
  })
     
     
     
     //Drawing a new nav controller on the map.
     var nav = new mapboxgl.NavigationControl();
     //map.addControl(nav, 'top-left');  
  }
  
  //Drawing coordinatest on the map

   

}
