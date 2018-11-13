import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import { Subscription } from '../../../node_modules/rxjs/Subscription';
import { getNonHydratedSegmentIfLinkAndUrlMatch } from '../../../node_modules/ionic-angular/umd/navigation/url-serializer';

/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
  
})

export class MapsPage {

  data: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public  httpClient: HttpClient ) {
    
  }

  getGeolocation() {
    if (navigator.geolocation) {
      //Gets the current position
       navigator.geolocation.getCurrentPosition((position) => {
        this.getMap(position);
       });
    } 
    
    
}
getMap(position){
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2FmZXQtMTk5MCIsImEiOiJjam16eGw1aXkyODVrM3FxeWs1NzhrNzE5In0.zS31UERwy9uupx_Ajw7nOw';

  //Instansiating map
  var map = new mapboxgl.Map({
     style: 'mapbox://styles/mapbox/streets-v10',
     center: [position.coords.longitude, position.coords.latitude],
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
  this.getRoutes(map,position,mapa);
})
   
   
   //Drawing a new nav controller on the map.
   var nav = new mapboxgl.NavigationControl();
   map.addControl(nav, 'top-left');  

   //Drawing a new geolocate controller on the map. Requiered for geolocation on map load.
   let geocontroler = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
  });
  //Adding the new geolocate controller to the map
  map.addControl(geocontroler);
  //Triggering geolocation on the map
  map.on('load', () => {
    geocontroler.trigger();
  })
}

//Drawing coordinatest on the map
getRoutes(map,position,cords){
  console.log(cords);
  var arr = [];
  cords.map(e => {
    arr.push([e]);
    
  })
  
  var start = [position.coords.longitude,position.coords.latitude];
    var end = [10.778540,59.945339];
  
    
    arr.push(cords.map(e => e));
    
    var arrayPos = arr.map(arr => {
      return arr[0].split(",").map(string => {
        console.log(parseFloat(string));
        
        return parseFloat(string)
      })
    })
    
    console.log(arrayPos);

    var geometry = {
      coordinates: arrayPos.map(e => e.sort()),
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
            coordinates: arrayPos
          }
        }
      }
    });
    });
    console.log(this.data);
    
}
  /*$http({
    method: 'GET',
    url: directionsRequest,
  }).done(function(data) {
    var route = data.routes[0].geometry;
    map.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: route
        }
      },
      paint: {
        'line-width': 2
      }
    });
    // this is where the code from the next step will go
  });*/


  ionViewDidLoad() {
    this.getGeolocation()
   }
  
}
