import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExpandableComponent } from '../../components/expandable/expandable';
import * as firebase from 'Firebase';
import { MapComponent } from '../../components/map/map';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

 
@Component({
  selector: 'page-my-places',
  templateUrl: 'my-places.html'
})
export class MyPlacesPage {

    itemExpandHeight: number = 100;
 
    name: string;
    url: string;
    coords = [];
    


    public cards = []

    constructor(public navCtrl: NavController, public map:MapComponent) {
      
      firebase.database().ref('Places/'+ firebase.auth().currentUser.uid).on('value', snapshot =>{
     
        
        Object.keys(snapshot.val()).map(map =>{
          this.cards.push({
            expanded:false,
            name: snapshot.val()[map].buildingName,
            url:snapshot.val()[map].buildingPicture,
            coords:snapshot.val()[map].places
          })
          
        })
      })

 
    }

    readFromDatabase(){

    }
 
    expandItem(item){
       console.log(item);
       this.coords = item.coords;
       this.map.getMap(this.coords);
        this.cards.map((listItem) => {
            if(item == listItem){
                listItem.expanded = !listItem.expanded;
            } else {
                this.coords = [];
                listItem.expanded = false;
            }
 
            return listItem;
 
        });
 
    }
 
}
