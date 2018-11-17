import { Component } from '@angular/core';
import {ViewController} from "ionic-angular";

@Component({
 selector: 'popover',
 templateUrl: 'popover.html'
})
export class PopoverComponent {

 items: any;
 text: string;

 constructor(public viewCtrl: ViewController) {
   this.items = [
     {item: "All"},
     {item: "Cool Buildings"},
     {item: "Parks"},
     {item: "Museums"},
   ]
 }

 itemClick(item) {
   this.viewCtrl.dismiss(item)
     .catch((error) => alert("Something went wrong"));
 }
}