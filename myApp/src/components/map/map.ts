import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';
import Directions from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
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
  currLoc: any[];
  data: Observable<any>;
  map: any;
  
  constructor(public  httpClient: HttpClient) {
   this.currLoc = [];

   
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FmZXQtMTk5MCIsImEiOiJjam16eGw1aXkyODVrM3FxeWs1NzhrNzE5In0.zS31UERwy9uupx_Ajw7nOw';
    navigator.geolocation.getCurrentPosition(e =>{
      this.currLoc.push(e.coords.longitude, e.coords.latitude);
    });

  }


  getMap(coords){
    var map= new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/streets-v10',
      zoom: 16,
      container: 'map',
      center: coords
    });
    
     //Drawing a new nav controller on the map.
     var nav = new mapboxgl.NavigationControl();
     map.addControl(nav, 'top-left');  
  }
  
  //Drawing coordinatest on the map
  
  
  getRoutes(cords){
    
    var map= new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/streets-v10',
      zoom: 12,
      container: 'map',
      center: this.currLoc
    });
    
    console.log(this.currLoc);
    
      var start = {Lat:this.currLoc[0], Long:this.currLoc[1]};
      var end = cords;
      
      /*var arrayPos = arr.map(arr => {
        return arr[0].split(",").map(string => {
          console.log(parseFloat(string));
          
          return parseFloat(string)
        })
      })*/
      var geometry = {
        coordinates: this.currLoc,
      type: "LineString"
      }
      
      var apiUrl = 'https://api.mapbox.com/directions/v5/mapbox/walking/' + start.Lat + ',' + start.Long + ';' + end[0] + ',' + end[1] + '?geometries=geojson&access_token=' + 'pk.eyJ1Ijoic2FmZXQtMTk5MCIsImEiOiJjam16eGw1aXkyODVrM3FxeWs1NzhrNzE5In0.zS31UERwy9uupx_Ajw7nOw';
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
              coordinates: this.currLoc
            }
          }
        }
      });
      });
  }
  ionViewDidLoad(){
   
  }

}
