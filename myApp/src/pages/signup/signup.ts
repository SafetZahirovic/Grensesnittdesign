import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, Ion, Label, Item, LoadingController, AlertController } from 'ionic-angular';
import * as firebase from 'Firebase';
import { FormsModule } from '@angular/forms';
import { SigninPage } from '../signin/signin';
import { checkAndUpdateBinding } from '../../../node_modules/@angular/core/src/view/util';
import { TemplateBinding } from '../../../node_modules/@angular/compiler';
import { HomePage } from '../home/home';
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

  
  

  handleSignUp() {
    var email = this.data.email;
    var username = this.data.name;
    var getUserData = "";
    
    firebase.auth().createUserWithEmailAndPassword(this.data.email, this.data.password).then(function success(userData) {
      firebase.database().ref('Users/').push().set({
        Username: username,
        Email: email
      });

      userData.updateProfile({
        displayName: username
      })

  }).then(() => {
    this.something();
  }).catch(function failure(error) {
          // Handle Errors here.
          
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode == 'auth/weak-password') {
            document.getElementById("message").innerHTML = "The password is too weak";
          } else {
            document.getElementById("message").innerHTML = errorMessage;
          }
          console.log(error);
          // [END_EXCLUDE]
          
      });
      document.getElementById("message").innerHTML='';
  // [END createwithemail]
      console.log(firebase.auth().currentUser);    
};

public something(){
  this.data.true = true;
  this.data.removeFields = true;
  setTimeout(() => {
    document.getElementById("circle-loader").id="load-complete";
  }, 2500);
  setTimeout(() => {
    this.data.userCreated = "You have successfully created user";
    this.data.true = false;
    this.data.continue = true;
  }, 6000);
  
}

goToNextPage(){
  this.navCtrl.setRoot(HomePage,{
    UserID: firebase.auth().currentUser.uid,
    Username: this.data.name,
    Email: this.data.email
  })

}
  ionViewDidLoad() {
  console.log('ionViewDidLoad SignupPage');
  }
}
