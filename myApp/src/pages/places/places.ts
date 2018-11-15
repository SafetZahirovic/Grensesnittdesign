import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import {PopoverComponent} from "../../components/popover/popover";

/**
 * Generated class for the PlacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})

export class PlacesPage {
  counter: number;

  public cards = {
    places: ["Barcode", "Royal Castle", "The Opera", "Holmenkollen", "Frognerparken", "Museum of Science"],
    placesImages: ["assets/imgs/barcode.jpg",
      "assets/imgs/Slottet.jpeg", "assets/imgs/Opera.jpg",
      "assets/imgs/holmenkollen.jpg",
      "assets/imgs/frognerparken.jpg",
      "assets/imgs/teknisk_museum.jpg"]
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.counter = 0
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: myEvent
    }).catch((error) => alert("Welcome to the world of Spagetti Code"));
  }




  initializeItems(){
    console.log(this.counter);
    
    this.cards = {
      places: ["Barcode", "Royal Castle", "The Opera", "Holmenkollen", "Museum of Science and Techonlogy"],
      placesImages: ["assets/imgs/Barcode.jpg",
        "assets/imgs/Slottet.jpeg",
        "assets/imgs/Opera.jpg",
        "assets/imgs/holmenkollen.jpg",
        "assets/imgs/teknisk_museum.jpg"]
    }
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.cards.places = this.cards.places.filter((item) => {
        
        console.log(item);
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
      this.cards.placesImages = this.cards.placesImages.filter((item) => {
        console.log(item);
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPage');
  }

}
