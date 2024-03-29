import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';
import { SigninPage } from '../signin/signin';

/**
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {
  public data = {
    email:"", 
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  resetPassword(email: string){
    var auth = firebase.auth();
    var emailAddress = email;
    
    auth.sendPasswordResetEmail(emailAddress).then(function() {
      
      // Email sent.
    }).then(() =>{
      this.navCtrl.setRoot(SigninPage);
    }).catch(function(error) {
      console.log("Something went wrong");
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
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
        tabs[ key ].style.display = 'flex';
      });
    } // end if
  }

}
