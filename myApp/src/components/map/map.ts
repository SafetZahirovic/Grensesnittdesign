import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import { Geolocation } from '@ionic-native/geolocation';


/**
 * Generated class for the MapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

 declare var map: any;
 declare var geolocate: any;
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
  geolocate: any;
  
  constructor(public  httpClient: HttpClient, private geolocation: Geolocation) {
    this.map = null;
   this.currLoc = [];
   this.geolocation.getCurrentPosition().then((resp) => {
    this.currLoc.push(resp.coords.longitude, resp.coords.latitude);
   }).catch((error) => {
     console.log('Error getting location', error);
   });
   
   let watch = this.geolocation.watchPosition();
   watch.subscribe((data) => {
  
    
   });

   
  
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FmZXQtMTk5MCIsImEiOiJjam16eGw1aXkyODVrM3FxeWs1NzhrNzE5In0.zS31UERwy9uupx_Ajw7nOw';
      
  }


  getMap(coords){
    this.map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/streets-v10',
      zoom: 16,
      container: 'mapPlaces',
      center: coords
    });
    
     //Drawing a new nav controller on the map.
     var nav = new mapboxgl.NavigationControl();
     this.map.addControl(nav, 'top-left');  
  }
  
  //Drawing coordinatest on the map
  
  
  getRoutes(cords){


    this.map = new mapboxgl.Map({
          style: 'mapbox://styles/mapbox/streets-v10',
          zoom: 12,
          container: 'mapRoutes',
          center: [cords[0], cords[1]]
        });
      
       this.geolocate= new mapboxgl.GeolocateControl({
          positionOptions: {
              enableHighAccuracy: true
          },
          trackUserLocation: true
        });
        
          this.map.addControl(this.geolocate);
       

        var start = {Lat:this.currLoc[0], Long:this.currLoc[1]};
        var end = cords;
        var geometry = {
          coordinates: this.currLoc,
          type: "LineString"
        }
      
      var apiUrl = 'https://api.mapbox.com/directions/v5/mapbox/walking/' + start.Lat + ',' + start.Long + ';' + end[0] + ',' + end[1] + '?geometries=geojson&access_token=' + 'pk.eyJ1Ijoic2FmZXQtMTk5MCIsImEiOiJjam16eGw1aXkyODVrM3FxeWs1NzhrNzE5In0.zS31UERwy9uupx_Ajw7nOw';
      this.data = this.httpClient.get(apiUrl);
      this.data.subscribe(result => {


        this.map.on('load', e =>{
          this.geolocate.trigger();
  
          this.map.addLayer({
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
    
          this.map.addLayer({
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
        this.map.addLayer({
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
      })
      
        //this.currLoc.push(e.coords.longitude, e.coords.latitude);
      };
  emptyMap(){
    this.map = null;
  }
  ionViewDidLoad(){
   
  }
  ionViewWillLeave(){
    this.geolocate.trigger();
  }
  ionViewDidLeave(){
    this.geolocate.trigger();
  }

}
