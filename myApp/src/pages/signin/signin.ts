import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, Ion, Label, Item } from 'ionic-angular';
import * as firebase from 'Firebase';
import { SignupPage } from '../signup/signup';
import { PlacesPage } from '../places/places';
import { MyPlacesPage } from '../my-places/my-places';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { Startpage } from '../startpage/startpage';
/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  isTrue:boolean;
  ref = firebase.database().ref('Users/');
  user: string;
  password: string;
  tabBarElement: any;

  storage = firebase.storage().ref().child('images/');
  public data = { 
    User:"", 
    Password:"", 
    databaseUser:"", 
    Message:"" ,
    isTrue: false,
  };
  public constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data.isTrue = this.navParams.get("true") as boolean;
    Object.keys(this.storage).map( e =>{
    })
  }

  userLogin() {
    if(!this.user){
      alert("Type in email");
      this.user = "";
    }
    if(!this.password){
      alert("Type in password");
      this.password = "";
    }
   
    
    let databaseUser = this.data.databaseUser;
    
    let Message = this.data.Message;

    firebase.auth().signInWithEmailAndPassword(this.user, this.password).then(() => {
      this.sendWithUser()
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      Message ="You don't have a user";

      
      // ...
    });

  }

  back(){
    this.navCtrl.setRoot(Startpage, {},{animate: true, direction: 'back'})
  }

  
  sendWithUser(){
    this.navCtrl.setRoot(PlacesPage, {
      Username: this.data.User,
      User: firebase.auth().currentUser.displayName,
     },{animate: true, direction:'forward'}
    )}

  userSignup(){
    this.navCtrl.setRoot(SignupPage);
  }
  continueAsGuest(){
    this.navCtrl.setRoot(PlacesPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }
  resetPassword(){
    this.navCtrl.setRoot(ResetPasswordPage);
  }

  ionViewWillEnter() {
    let tabs = document.querySelectorAll('.tabbar');
    if ( tabs !== null ) {
      Object.keys(tabs).map((key) => {
        tabs[ key ].style.display = 'none';
      });
    } // end if
  }

  ionViewWillLeave() {
    let tabs = document.querySelectorAll('.tabbar');
    if ( tabs !== null ) {
      Object.keys(tabs).map((key) => {
        tabs[ key ].style.display = 'flex';
      });
    } // end if
  }

}
