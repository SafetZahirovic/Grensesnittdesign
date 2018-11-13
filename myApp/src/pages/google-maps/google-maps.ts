import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the GoogleMapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;


@IonicPage()
@Component({
  selector: 'page-google-maps',
  templateUrl: 'google-maps.html',
})
export class GoogleMapsPage {
  
  @ViewChild('map') mapElement: ElementRef;

  map: any;

  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  constructor(public navCtrl: NavController, public navParams: NavParams,private plt: Platform,private geolocation: Geolocation) {
    
  }
  getGeolocation() {
    if (navigator.geolocation) {
      //Gets the current position
       navigator.geolocation.getCurrentPosition((position) => {
        this.initMap(position);
       });
    } 
  }

  ionViewDidLoad(){
    this.getGeolocation();
  }
  initMap(position) {
    console.log("Safet");
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 15,
      center: {lat: position.coords.latitude, lng: position.coords.longitude}
    });
    directionsDisplay.setMap(this.map);
    
    
      directionsService.route({
        origin: {lat: position.coords.latitude, lng: position.coords.longitude},
        destination: {lat: 59.945339, lng: 10.778540},
        
      }, function(response, status) {
        console.log(response);
        
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
  
}
}
  



