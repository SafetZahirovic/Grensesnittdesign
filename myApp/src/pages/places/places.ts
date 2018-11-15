import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    places: ["Barcode", "Slottet", "Opera"],
    placesImages: ["assets/imgs/Barcode.jpg", "assets/imgs/Slottet.jpeg", "assets/imgs/Opera.jpg"]
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.counter = 0
  }


  initializeItems(){
    console.log(this.counter);
    
    this.cards = {
      places: ["Barcode", "Slottet", "Opera"],
      placesImages: ["assets/imgs/Barcode.jpg", "assets/imgs/Slottet.jpeg", "assets/imgs/Opera.jpg"]
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
