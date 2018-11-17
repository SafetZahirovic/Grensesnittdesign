import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Tabs } from 'ionic-angular';
import { MapComponent } from '../../components/map/map';
import * as firebase from 'Firebase';


/**
 * Generated class for the PlaceDescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ priority: 'high', segment: 'tabs' })
@Component({
  selector: 'page-place-description',
  templateUrl: 'place-description.html',
})
export class PlaceDescriptionPage {
  name: string;
  img: string;
  coords: String[];
  user: boolean;
  found: boolean;
  string: string;
  foundUser: boolean = false;
  placesKey: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public map: MapComponent, public viewCtrl: ViewController) {

    this.name = this.navParams.data.Data[0].placeName;
    this.img = this.navParams.data.Data[0].placeImages;
    this.coords = this.navParams.data.Data[0].coords;
    if(firebase.auth().currentUser){
      this.user = true;
    }
    firebase.database().ref('Places/').on('value', snapshot =>{
      Object.keys(snapshot.val()).map(map =>{
          if(map === firebase.auth().currentUser.uid){
            this.found = true;
            Object.keys(snapshot.val()[map]).map(e =>{
              if(snapshot.val()[map][e].buildingName === this.name){
                this.foundUser = true;
                this.placesKey = e;
              }
            })
          }
      })
    })
  }

  back(){
    this.viewCtrl.dismiss();
  }

  addToDatabase(){
      if(!this.foundUser){
        firebase.database().ref('Places/' + firebase.auth().currentUser.uid).push().set({
          places: this.coords,
          buildingPicture: this.img,
          buildingName: this.name
      })
    }

  }


  removeFromDatabase(){
    if(this.foundUser){
      firebase.database().ref('Places/' + firebase.auth().currentUser.uid +"/" + this.placesKey).remove();
    }
    this.foundUser = false;
    
    /*firebase.database().ref('Users/').on('value', snapshot =>{
      var val = snapshot.val();
      var mapa = [];
      Object.keys(val).map(map => {      
        console.log(map);
        
    })
  });*/
  }

  addToFavourites(){
    
  }
  ionViewDidLoad(){

    
    if(!firebase.auth().currentUser){
      document.getElementById("favourites").style.cssText="bacground-color: grey; background-image: linear-gradient(to right, grey , grey);"
    }
    document.getElementById("button").style.cssText="display: none";
  }
  ionWillEnter(){
    document.getElementById("button").style.cssText="display: block";
  }
  ionViewDidEnter() {
    document.getElementById("button").style.cssText="display: block";
    this.map.getMap(this.coords);
  
  }
  ionViewWillLeave(){
    document.getElementById("button").style.cssText="display: none";
  }

}
