import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as firebase from 'Firebase';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { MapComponent } from '../../components/map/map';
import { MyPlacesPage } from '../my-places/my-places';
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

  currLoc: any[];

  data: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public map: MapComponent ) {
    this.currLoc=[];
    this.currLoc.push(this.navParams.data.Coords[0], this.navParams.data.Coords[1]);

  }
  back(){
    this.navCtrl.setRoot(MyPlacesPage, {},{animate: true, direction: 'back'})
  }
  mapshow(){
    this.map.emptyMap();
    this.map.getRoutes(this.currLoc);
  }



  ionViewDidEnter() {
    this.mapshow();
    document.getElementById("button").style.cssText="display: block";
   }

   ionViewDidLoad(){
    
    document.getElementById("button").style.cssText="display: none";
  }
  ionWillEnter(){
    
    document.getElementById("button").style.cssText="display: block";
  }
  ionViewWillLeave(){
    document.getElementById("button").style.cssText="display: none";
  }
  ionViewCanEnter(){
  }
  
}
