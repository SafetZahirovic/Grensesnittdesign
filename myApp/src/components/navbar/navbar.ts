import { Component } from '@angular/core';
import * as firebase from 'Firebase';
import { NavController } from 'ionic-angular';
import { MyPlacesPage } from '../../pages/my-places/my-places';

@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.html'
})
export class NavbarComponent {

  text: string;
  foundUser: boolean = false;
  constructor(public navCtrl: NavController) {
    
  }

  checkIfUserTrue(){
    if(firebase.auth().currentUser){
      this.navCtrl.setRoot(MyPlacesPage,{},{animate: true, direction: 'forward'})
    }else if(!firebase.auth().currentUser){
      alert("you have no user");
    }
  }

}

