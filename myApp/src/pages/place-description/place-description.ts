import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapComponent } from '../../components/map/map';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

/**
 * Generated class for the PlaceDescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place-description',
  templateUrl: 'place-description.html',
})
export class PlaceDescriptionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public map: MapComponent) {
  }

  ionViewDidLoad() {
    this.map.getMap(10.752245 ,59.913868);
    console.log('ionViewDidLoad PlaceDescriptionPage');
  }

}
