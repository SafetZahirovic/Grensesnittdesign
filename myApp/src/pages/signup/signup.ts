import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, Ion, Label, Item, LoadingController, AlertController } from 'ionic-angular';
import * as firebase from 'Firebase';
import { PlacesPage } from '../places/places';
import { SigninPage } from '../signin/signin';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  
})

export class SignupPage {
  
  public data = {
    name:"",
    email:"", 
    password:"", 
    repeatPassword:"", 
    loginError:"",
    true: false,
    userCreated: "",
    removeFields: false,
    continue: false
  }
  public constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController){
   
  }

  
  back(){
    this.navCtrl.setRoot(SigninPage, {},{animate: true, direction: 'back'})
  }


  handleSignUp() {
    var email = this.data.email;
    var username = this.data.name;
    var getUserData = "";
    
    firebase.auth().createUserWithEmailAndPassword(this.data.email, this.data.password).then(function success(userData) {
      firebase.database().ref('Users/').push().set({
        Username: username,
        Email: email
      });

  }).then(() => {
    this.something();
  }).catch(function failure(error) {
          // Handle Errors here.
          
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode == 'auth/weak-password') {
            document.getElementById("message").innerHTML = "The password is too weak";
            alert("The password is too weak")
          } else {
            document.getElementById("message").innerHTML = errorMessage;
          }
          console.log(error);
          // [END_EXCLUDE]
          
      });
      document.getElementById("message").innerHTML='';
  // [END createwithemail]   
};

public something(){
  this.data.true = true;
  this.data.removeFields = true;
  let loading = this.loadingCtrl.create({
    spinner: 'dots',
    content: `
    Please wait while your account is being made`,
    duration: 5500
  });

  loading.onDidDismiss(() => {
    console.log('Dismissed loading');
  });

  loading.present();
  setTimeout(() => {
    this.data.userCreated = "You have successfully created user";
    this.data.true = false;
    this.data.continue = true;
  }, 6000);
  
}


goToNextPage(){
  this.navCtrl.setRoot(PlacesPage,{
    UserID: firebase.auth().currentUser.uid,
    Username: this.data.name,
    Email: this.data.email
  })

}
  ionViewDidLoad() {
    let tabs = document.querySelectorAll('.tabbar');
    if ( tabs !== null ) {
      Object.keys(tabs).map((key) => {
        tabs[ key ].style.display = 'none';
      });
    } // end if
    this.something
  console.log('ionViewDidLoad SignupPage');
  }
  ionViewWillEnter() {
    let tabs = document.querySelectorAll('.tabbar');
    if ( tabs !== null ) {
      Object.keys(tabs).map((key) => {
        tabs[ key ].style.display = 'none';
      });
    } // end if
  }

  ionViewDidLeave() {
    let tabs = document.querySelectorAll('.tabbar');
    if ( tabs !== null ) {
      Object.keys(tabs).map((key) => {
        tabs[ key ].style.display = 'none';
      });
    } // end if
  }
}
