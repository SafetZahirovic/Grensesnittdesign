import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Content, Ion, Label, Item} from 'ionic-angular';
import * as firebase from 'Firebase';
import {SignupPage} from '../signup/signup';
import {PlacesPage} from '../places/places'
import {SigninPage} from "../signin/signin";

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-startpage',
  templateUrl: 'startpage.html',
})
export class Startpage {
  isTrue: boolean;
  ref = firebase.database().ref('Users/');

  storage = firebase.storage().ref().child('images/');
  public data = {
    User: "",
    Password: "",
    databaseUser: "",
    Message: "",
    isTrue: false,
  };

  public constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data.isTrue = this.navParams.get("true") as boolean;

    Object.keys(this.storage).map(e => {
      console.log(e);
    })


  }
  sendWithUser() {
    this.navCtrl.setRoot(PlacesPage, {
      Username: this.data.User,
      User: firebase.auth().currentUser.displayName,
    })
  }


  userLogin() {
    setTimeout(function () {
      this.navCtrl.setRoot(SigninPage, {}, {animate: true, direction: 'forward'});
    }, 200);
  }


  userSignup() {
    setTimeout(function () {
    this.navCtrl.setRoot(SignupPage, {}, {animate: true, direction: 'forward'});
    }, 300);
  }

  continueAsGuest() {
    this.navCtrl.setRoot(PlacesPage, {}, {animate: true, direction: 'forward'});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

}
