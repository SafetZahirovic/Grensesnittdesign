import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController} from 'ionic-angular';
import { MapComponent } from '../../components/map/map';
import * as firebase from 'Firebase';
import { PlacesPage } from '../places/places';
import { SigninPage } from '../signin/signin';

@IonicPage({ priority: 'high', segment: 'tabs' })
@Component({
  selector: 'page-place-description',
  templateUrl: 'place-description.html',
})
export class PlaceDescriptionPage {
  name: string;
  img: string;
  coords: String[];
  user: boolean = false;
  found: boolean;
  string: string;
  foundUser: boolean = false;
  placesKey: string;
  private adress: string;
  private description: any;
  private pcode: any;
  private quote: any;
  private author1: any;
  private header1: any;
  private rating1: any;
  private comment1: any;
  private author2: any;
  private header2: any;
  private rating2: any;
  private comment2: any;
  private author3: any;
  private header3: any;
  private rating3: any;
  private comment3: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public map: MapComponent, public viewCtrl: ViewController, private alertCtrl: AlertController) {
    this.pcode = this.navParams.data.Data[0].description;
    this.quote = this.navParams.data.Data[0].quote;
    this.description = this.navParams.data.Data[0].description;
    this.adress = this.navParams.data.Data[0].adress;
    this.name = this.navParams.data.Data[0].placeName;
    this.img = this.navParams.data.Data[0].placeImages;
    this.coords = this.navParams.data.Data[0].coords;
    this.author1 = this.navParams.data.Data[0].author1;
    this.header1 = this.navParams.data.Data[0].header1;
    this.rating1 = this.navParams.data.Data[0].rating1;
    this.comment1 = this.navParams.data.Data[0].comment1;
    this.author2 = this.navParams.data.Data[0].author2;
    this.header2 = this.navParams.data.Data[0].header2;
    this.rating2 = this.navParams.data.Data[0].rating2;
    this.comment2 = this.navParams.data.Data[0].comment2;
    this.author3 = this.navParams.data.Data[0].author3;
    this.header3 = this.navParams.data.Data[0].header3;
    this.rating3 = this.navParams.data.Data[0].rating3;
    this.comment3 = this.navParams.data.Data[0].comment3;
    if(firebase.auth().currentUser){
      this.user = true;
      firebase.database().ref('Places/').on('value', snapshot =>{
        Object.keys(snapshot.val()).map(map =>{
            if(map === firebase.auth().currentUser.uid){
              this.found = true;
              Object.keys(snapshot.val()[map]).map(e =>{
                if(snapshot.exists()){
                  if(snapshot.val()[map][e].buildingName === this.name){
                    this.foundUser = true;
                    this.placesKey = e;
                  }
                }
              })
            }
        })
      })
    }
    
  }
  
  back(){
    this.navCtrl.setRoot(PlacesPage, {},{animate: true, direction: 'back'})
    //this.viewCtrl.dismiss();
  }

  addToDatabase(){
    if(!firebase.auth().currentUser){
      
      let alert = this.alertCtrl.create({
        title: 'Not logged inn',
        message: 'You cannot use my places feature when you are not logged inn. Please log inn or create user to use this feature',
        buttons: [
          {
            text: 'Log inn',
            role: 'log inn',
            handler: () => {
              this.navCtrl.setRoot(SigninPage)
            }
          },
          {
            text: 'Cancel',
            handler: () => {
            }
          }
        ]
      });
      alert.present();}
    if(firebase.auth().currentUser){
      if(!this.foundUser){
        firebase.database().ref('Places/' + firebase.auth().currentUser.uid).push().set({
          places: this.coords,
          buildingPicture: this.img,
          buildingName: this.name
      })
    }
    }  
  }
  removeFromDatabase(){
    if(!firebase.auth().currentUser){
      let alert = this.alertCtrl.create({
        title: 'Not logged inn',
        message: 'You cannot use my places feature when you are not logged inn. Please log inn or create user to use this feature',
        buttons: [
          {
            text: 'Log inn',
            role: 'log inn',
            handler: () => {
              this.navCtrl.setRoot(SigninPage)
            }
          },
          {
            text: 'Cancel',
            handler: () => {
            }
          }
        ]
      });
      alert.present();
    }
    if(firebase.auth().currentUser){
      if(this.foundUser){
        firebase.database().ref('Places/' + firebase.auth().currentUser.uid +"/" + this.placesKey).on('value', snapshot=>{
          if(snapshot.val() != null){
            firebase.database().ref('Places/' + firebase.auth().currentUser.uid +"/" + this.placesKey).remove();
          }
        })
      }
    }
    
    this.foundUser = false;
  }

  addToFavourites(){
    
  }
  presentAlert() {
  
}
  ionViewDidLoad(){
    this.map.getMap(this.coords);
    if(!firebase.auth().currentUser){
      document.getElementById("favourites").style.cssText="opacity: 1;bacground-color: grey; background-image: linear-gradient(to right, grey , grey);"
      
    }
    document.getElementById("button").style.cssText="display: none";
  }
  ionWillEnter(){
    
    document.getElementById("button").style.cssText="display: block";
  }
  ionViewDidEnter() {
    document.getElementById("button").style.cssText="display: block";
   
  
  }
  ionViewDidLeave(){
    this.navCtrl.setRoot(PlacesPage);
    this.map.emptyMap();
  }
  ionViewWillLeave(){
    this.map.emptyMap();
    document.getElementById("button").style.cssText="display: none";
  }

}
