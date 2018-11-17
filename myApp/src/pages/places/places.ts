import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import {PopoverComponent} from "../../components/popover/popover";
import { PlaceDescriptionPage } from "../place-description/place-description";
import * as firebase from 'Firebase';


@IonicPage()
@Component({
 selector: 'page-places',
 templateUrl: 'places.html',
})

export class PlacesPage {
 counter: number;

 constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
   this.counter = 0
 }

 public cards = [
   {placeName: "Barcode", placeCategory: "Cool Buildings", placeImages: "assets/imgs/barcode.jpg", coords:[10.756800,59.908680]},
   {placeName: "Royal Castle", placeCategory: "Cool Buildings", placeImages: "assets/imgs/slottet.jpeg", coords:[10.704114,59.925854]},
   {placeName: "Holmenkollen", placeCategory: "Nature", placeImages: "assets/imgs/holmenkollen.jpg", coords:[10.666290,59.962630]},
   {placeName: "Frognerparken", placeCategory: "Parks", placeImages: "assets/imgs/frognerparken.jpg", coords:[10.704114,59.925854]},
   {placeName: "The Opera", placeCategory: "Cool Buildings", placeImages: "assets/imgs/Opera.jpg", coords:[10.781110,59.966250]},
   {placeName: "Museum of Science", placeCategory: "Museums", placeImages: "assets/imgs/teknisk_museum.jpg", coords:[10.754150,59.906570]},
 ]


 initializeItems(){
   console.log(this.counter);

   this.cards = [
    {placeName: "Barcode", placeCategory: "Cool Buildings", placeImages: "assets/imgs/barcode.jpg", coords:[10.756800,59.908680]},
    {placeName: "Royal Castle", placeCategory: "Cool Buildings", placeImages: "assets/imgs/slottet.jpeg", coords:[10.704114,59.925854]},
    {placeName: "Holmenkollen", placeCategory: "Nature", placeImages: "assets/imgs/holmenkollen.jpg", coords:[10.666290,59.962630]},
    {placeName: "Frognerparken", placeCategory: "Parks", placeImages: "assets/imgs/frognerparken.jpg", coords:[10.704114,59.925854]},
    {placeName: "The Opera", placeCategory: "Cool Buildings", placeImages: "assets/imgs/Opera.jpg", coords:[10.781110,59.966250]},
    {placeName: "Museum of Science", placeCategory: "Museums", placeImages: "assets/imgs/teknisk_museum.jpg", coords:[10.754150,59.906570]},
   ]
 }

 //Method of searchbar
 getItems(ev: any) {
   this.initializeItems();

   const val = ev.target.value;

   if(val && val.trim != '') {
     this.cards = this.cards.filter((item) => {
       return (item.placeName.toLowerCase().indexOf(val.toLowerCase()) > -1);
     })
   }
 }

 //Method for filter button
 presentPopover(myEvent) {

   let popover = this.popoverCtrl.create(PopoverComponent);
   popover.present({
     ev: myEvent
   }).catch((error) => alert("Something went wrong"));

   popover.onDidDismiss(popoverData => {
     if(popoverData != null) {
       this.initializeItems();
       const clickValue = popoverData.item;

       if(clickValue !== "All") {
         this.cards = this.cards.filter((item) => {
           return (item.placeCategory.toLowerCase().indexOf(clickValue.toLowerCase()) > -1);
         })
       } else {
         return this.cards.forEach((item) => {
           return item;
         })
       }
     }
   })
 }
  getInformation(event){
    // do something with the id...
    var target = event.currentTarget.children;
    let arr = [];

    for (let index = 0; index < this.cards.length; index++) {
      const element = this.cards[index].placeName;
      
      if(element === event.currentTarget.children.item(0).innerHTML){
        arr.push(this.cards[index])
      }
    }
    this.navCtrl.push(PlaceDescriptionPage, {
     Data: arr,
    })
}

  ionViewDidEnter() {
    this.initializeItems();
    console.log(firebase.auth().currentUser);
  }
  ionViewWillLeave(){
  }

}
