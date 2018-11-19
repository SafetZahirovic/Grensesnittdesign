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
    this.navCtrl.setRoot(SigninPage, {}, {animate: true, direction: 'forward'});
  }


  userSignup() {
    this.navCtrl.setRoot(SignupPage);
  }

  continueAsGuest() {
    this.navCtrl.setRoot(PlacesPage, {}, {animate: true, direction: 'forward'});
  }

  ionViewDidLoad() {
    firebase.auth().signOut();
    console.log(firebase.auth().currentUser);
    
    console.log('ionViewDidLoad SigninPage');
  }

  ionViewWillEnter() {
    let tabs = document.querySelectorAll('.tabbar');
    if ( tabs !== null ) {
      Object.keys(tabs).map((key) => {
        tabs[ key ].style.transform = 'translateY(56px)';
      });
    } // end if
  }

  ionViewDidLeave() {
    let tabs = document.querySelectorAll('.tabbar');
    if ( tabs !== null ) {
      Object.keys(tabs).map((key) => {
        tabs[ key ].style.transform = 'translateY(0)';
      });
    } // end if
  }

}
