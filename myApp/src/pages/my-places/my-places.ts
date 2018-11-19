import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExpandableComponent } from '../../components/expandable/expandable';
import * as firebase from 'Firebase';
import { MapComponent } from '../../components/map/map';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import { MapsPage } from '../maps/maps';

 
@Component({
  selector: 'page-my-places',
  templateUrl: 'my-places.html'
})
export class MyPlacesPage {

    itemExpandHeight: number = 100;
 
    name: string;
    url: string;
    coords = [];
    public cards = [];

    constructor(public navCtrl: NavController, public map:MapComponent) {
     
      firebase.database().ref('Places/'+ firebase.auth().currentUser.uid).on('value', snapshot =>{
     
        this.cards = []
        if(snapshot.val() != null){
          Object.keys(snapshot.val()).map(map =>{
            
            console.log(map);
            
            if(snapshot.val() != null){
            this.cards.push({
              key: map,
              expanded:false,
              name: snapshot.val()[map].buildingName,
              url:snapshot.val()[map].buildingPicture,
              coords:snapshot.val()[map].places
            })
            //this.coords = snapshot.val()[map].places;
          }})
        }
          
          
        }
    
      
      )
    
    }

      delete(key){
        firebase.database().ref('Places/' + firebase.auth().currentUser.uid +"/" + key).on('value', snapshot=>{
          if(snapshot.val() != null){
            firebase.database().ref('Places/' + firebase.auth().currentUser.uid +"/" + key).remove();
          }
        })
      }
    showMap(card){
      this.navCtrl.setRoot(MapsPage, {
        Coords: card.coords
      })
    }
 
    expandItem(item){
        this.cards.map((listItem) => {
            if(item == listItem){
                listItem.expanded = !listItem.expanded;
            } else {
                listItem.expanded = false;
            }
            return listItem;
        });
 
    }

    ionViewWillEnter(){
      
    }
    
 
}
