import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, Ion, Label, Item } from 'ionic-angular';
import * as firebase from 'Firebase';
import { SignupPage } from '../signup/signup';
import { PlacesPage } from '../places/places';
import { MyPlacesPage } from '../my-places/my-places';
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
      console.log(e);
    })
  }

  userLogin() {
    console.log(this.user);
    console.log(this.password);
    
    
    let databaseUser = this.data.databaseUser;
    
    let Message = this.data.Message;

    firebase.auth().signInWithEmailAndPassword(this.user, this.password).then(() => {
      this.sendWithUser()
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      Message ="You don't have a user";
      console.log(error);
      
      // ...
    });
    
    /*this.ref.on("value", snapshot =>{
      var loc = snapshot.val();
      Object.keys(loc).map((key) => {
        loc[key].User === this.data.User ?
          this.navCtrl.setRoot(RoomPage, {
           Username: this.data.User
          }) : this.data.Message ="You don't have a user";
      })
    });*/

        //this.ref.push().set({User: this.data.User});
          /*id = loc[key].uid;
          if(userData.uid === id){
              object2 ={
                  userKey: key
              }*/
  }

  
  sendWithUser(){
    this.navCtrl.setRoot(MyPlacesPage, {
      Username: this.data.User,
      User: firebase.auth().currentUser.displayName,
     })
  }

  userSignup(){
    console.log("Safet");
    this.navCtrl.push(SignupPage);
  }
  continueAsGuest(){
    this.navCtrl.setRoot(PlacesPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

}
