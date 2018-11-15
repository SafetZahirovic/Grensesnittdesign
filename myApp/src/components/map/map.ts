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


  getMap(longitude, latitude){
  
  
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FmZXQtMTk5MCIsImEiOiJjam16eGw1aXkyODVrM3FxeWs1NzhrNzE5In0.zS31UERwy9uupx_Ajw7nOw';
  
    //Instansiating map
    var map = new mapboxgl.Map({
       style: 'mapbox://styles/mapbox/streets-v10',
       center: [longitude, latitude],
       zoom: 16,
       container: 'map',
     });
     //Getting coordinates from database
     firebase.database().ref('Users/').on('value', snapshot =>{
      var val = snapshot.val();
      var mapa = [];
      Object.keys(val).map(map => {      
        val[map].Places != null && val[map].Places.map(r => {
          mapa.push(r)
        })}); 
  
    this.currLoc.push(longitude, latitude); 
    //this.getRoutes(map,this.currLoc,mapa);
  })
     
     
     
     //Drawing a new nav controller on the map.
     var nav = new mapboxgl.NavigationControl();
     //map.addControl(nav, 'top-left');  
  }
  
  //Drawing coordinatest on the map
  
  
  /*getRoutes(map,position,cords){
  
    console.log(cords);
    var arr = [];
    cords.map(e => {
      arr.push([e]);
  
    })
    
    var start = position;
      var end = [10.778540,59.945339];
      
      /*var arrayPos = arr.map(arr => {
        return arr[0].split(",").map(string => {
          console.log(parseFloat(string));
          
          return parseFloat(string)
        })
      })
    
  
      var geometry = {
        coordinates: position,
      type: "LineString"
      }
      
      var apiUrl = 'https://api.mapbox.com/directions/v5/mapbox/walking/' + start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1] + '?geometries=geojson&access_token=' + 'pk.eyJ1Ijoic2FmZXQtMTk5MCIsImEiOiJjam16eGw1aXkyODVrM3FxeWs1NzhrNzE5In0.zS31UERwy9uupx_Ajw7nOw';
      this.data = this.httpClient.get(apiUrl);
      console.log(this.data);
      
      this.data.subscribe(result => {
        console.log(result);
        console.log(geometry);
        
        map.addLayer({
          id: 'route',
          type: 'line',
          source: {
            type: 'geojson',
            data: {
              type: 'Feature',
              geometry: result.routes[0].geometry
            }
          },
          paint: {
            'line-width': 2
          }
        });
  
      map.addLayer({
        id: 'start',
        type: 'circle',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: start
            }
          }
        }
      });
      
  
      map.addLayer({
        id: 'end',
        type: 'circle',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: position
            }
          }
        }
      });
      });
      console.log(this.data);
      
  }*/


}
