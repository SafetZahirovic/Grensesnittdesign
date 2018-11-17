import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as firebase from 'Firebase';

/**
 * Generated class for the RoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'home-room',
  templateUrl: 'placepage.html',
})
export class PlacePage {
  rooms = [];
  ref = firebase.database().ref('Users/');
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ref.on('value', resp => {
      console.log();


    });
    console.log(this.navParams.get('User'));
  }


  joinRoom(key) {
    this.navCtrl.setRoot(PlacePage, {
      key:key,
      nickname:this.navParams.get("Location")
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }
};
