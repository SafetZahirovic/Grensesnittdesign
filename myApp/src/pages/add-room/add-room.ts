import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';

/**
 * Generated class for the AddRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-room',
  templateUrl: 'add-room.html',
})
export class AddRoomPage {
  data = { location:'' };
  ref = firebase.database().ref('Users/');
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRoomPage');
  }
  addRoom() {
    let newData = this.ref.push();
    newData.set({
      Location:this.data.location
    });
    this.navCtrl.pop();
  }
}
