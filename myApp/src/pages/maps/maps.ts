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
import { MapComponent } from '../../components/map/map';
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

  currLoc: String[];

  data: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public  httpClient: HttpClient, public map: MapComponent ) {
    
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
    this.map.getMap(10.752245,59.913868);
   }
  
}
