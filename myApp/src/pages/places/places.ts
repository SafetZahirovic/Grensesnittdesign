import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import {PopoverComponent} from "../../components/popover/popover";
import { PlaceDescriptionPage } from "../place-description/place-description";
import * as firebase from 'Firebase';
import { MyPlacesPage } from '../my-places/my-places';
import { SigninPage } from '../signin/signin';
import { Startpage } from '../startpage/startpage';


@IonicPage()
@Component({
 selector: 'page-places',
 templateUrl: 'places.html',
})

export class PlacesPage {
 counter: number;
 asked: boolean = false;
 user:boolean;

 constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, private alertCtrl: AlertController) {
   this.counter = 0
    if(firebase.auth().currentUser){
        this.user = true;
    }
 }

 public cards = [
  {placeName: "Barcode", placeCategory: "Cool Buildings", placeImages: "assets/imgs/barcode.jpg", adress: "Dronning Eufemias gate", quote: "The New City",coords:[10.756800,59.908680], description: 
  "As well as spectacular architecture, Barcode offers more than 30 different restaurants, stores, galleries and services. The restaurants offer food from around the world and houses" 
     + "several known galleries like Kunsthall Oslo and The Munch museum.", author1: "Wieng Zing", header1: "Amazing buildings", rating1: "assets/imgs/four.png", comment1: "Me and my wife went here last year on our" +
         "vacation. Really interesting buildings and architecture", author2: "Laman Dong", header2: "Really cool!", rating2: "assets/imgs/five.png", comment2: "Was there yesterday with my sister." +
         " She's really into modern building design" + "so this was a perfect fit.", author3: "Mao Zedong", header3: "Boring buildings", rating3: "assets/imgs/two.png", comment3:  "It's just buildings," +
         "not really that exciting. It's also really expensive here. They charged me like 40 kroner for a Soda!"},
  {placeName: "Royal Castle", placeCategory: "Cool Buildings", placeImages: "assets/imgs/slottet.jpeg", adress: "Slottsplassen 1", quote: "The Royalty", coords:[10.727720,59.917060], description: 
  "The Royal Palace is situated on a rise, the Bellevue, at one end of Oslo’s main thoroughfare, Karl Johans gate. The Royal Palace is one of the country’s most important buildings" 
     + "houses the royal family and is open to the public during the summer season.", author1: "Wieng Lee", header1: "Beautiful castle.", rating1: "assets/imgs/four.png", comment1: "Castle looked amazing and got us a lot" +
         "of cool pictures!", author2: "Park Dong", header2: "Awesome!", rating2: "assets/imgs/five.png", comment2: "The guards were really cool!.", author3: "Lee Sin", header3: "Intimidating guards", rating3: "assets/imgs/three.png", comment3:  "Even though the castle looked great, the guards scared my daughter when she got too close." +
         "Be careful around the guards!"},
  {placeName: "Holmenkollen", placeCategory: "Nature", placeImages: "assets/imgs/holmenkollen.jpg", adress: "Kongeveien 5", quote: "Norwegian Pride", coords:[10.666290,59.962630], description:
     "Holmenkollen is a Norwegian national arena built in 2011. During the winter there is an arrangement of winter games as well as the museum and the jump tower is open for the audience." 
      + "The popular zip line is open during the summer.", author1: "Ji Seong Lee", header1: "Incredible!", rating1: "assets/imgs/five.png", comment1: "Incredible looking tower, no idea how the ski jumpers do it!", author2: "Jie Shei", header2: "Great facility!", rating2: "assets/imgs/four.png", comment2: "Very well put together facility, would recommend checking it out.", author3: "Park Dre", header3: "Fascinating jump tower.", rating3: "assets/imgs/four.png", comment3: "Amazes me how the jumpers dare to jump, especially after seeing a tower in real life"},
  {placeName: "Frognerparken", placeCategory: "Parks", placeImages: "assets/imgs/frognerparken.jpg", adress: "Kirkeveien", quote: "Park of Dreams", coords:[10.704114,59.925854], description: 
   "Frognerparken is Oslo’s most popular recreational area, in which Vigelandsparken with over 200 famous sculptures of Gustav Vigeland is located. The park has both cafes and restaurants" 
      + "along with Frognerbadet, a popular swimming pool.", author1: "Hooi Weng", header1: "Relaxing area", rating1: "assets/imgs/four.png", comment1: "A lot of people, but still more than enough room to relaxing and enjoy the weather.", author2: "Zhong Bo", header2: "Very fun!", rating2: "assets/imgs/five.png", comment2: "My sister and I really had fun throwing frisbees back and forth!.", author3: "Xia Chin", header3: "Nothing special", rating3: "assets/imgs/two.png", comment3: "It's just a park, seen it before."},
  {placeName: "The Opera", placeCategory: "Cool Buildings", placeImages: "assets/imgs/Opera.jpg", adress: "Kirsten Flagstads plass 1", quote: "The Opera House", coords:[10.754150,59.906570], description: 
     "The Royal Palace is situated on a rise, the Bellevue, at one end of Oslo’s main thoroughfare, Karl Johans gate. The Royal Palace is one of the country’s most important buildings,"
      + "houses the royal family and is open to the public during the summer season.", author1: "Tang Feng", header1: "Cool place", rating1: "assets/imgs/three.png", comment1: "The house looks great, and the space outside makes for great pictures.", author2: "Yin Min", header2: "Interesting show!", rating2: "assets/imgs/four.png", comment2: "The show had me entertained from beginning to end.", author3: "Sun Ju", header3: "Beautiful place", rating3: "assets/imgs/four.png", comment3: "The place looks amazing!"},
  {placeName: "Museum of Science", placeCategory: "Museums", placeImages: "assets/imgs/teknisk_museum.jpg", adress: "Kjelsåsveien 143", quote: "The Tech museum", coords:[10.781110,59.966250], description: 
  "Dive into exciting exhibitions on Norwegian medicine history, oil and gas production and music machines, get an energy boost in the hydroelectric power exhibition or find out more about" 
      + "the fascinating Norwegian history of industry.", author1: "Du Liuxian", header1: "Fun museum!", rating1: "assets/imgs/four.png", comment1: "A lot of cool and fun stuff to try out!", author2: "Zou Luoyang", header2: "Interesting museum", rating2: "assets/imgs/four.png", comment2: "A lot of interesting stuff to check out! My brother didn't want to leave.", author3: "Fan Wuying", header3: "Very cool show", rating3: "assets/imgs/four.png", comment3: "The science show they had for us was very cool and interesting! Would highly recommend checking out their shows!"},
  {placeName: "Tusenfryd", placeCategory: "Experiences", placeImages: "assets/imgs/tusenfryd.jpg", adress: "Fryds Vei 25", quote: "Place Of Fun", coords:[10.777370,59.749930], description: 
  "Tusenfryd is Norway’s biggest amusement park located in Ås, about 20 kilometers south of Oslo centrum. Tusenfryd has over 30 exciting attractions, games and stores."
      + "Being customized for people of all ages, the park is a great place for tourists.", author1: "Deng He", header1: "Tons of fun!", rating1: "assets/imgs/five.png", comment1: "My kids had a really great time and tried out all of the rides.", author2: "Wen Jie", header2: "Nice and big amusement park", rating2: "assets/imgs/five.png", comment2: "Even though I dont enjoy taking rides, my friends did and had a nice time.", author3: "Zhang Zhihao", header3: "Good food and snacks", rating3: "assets/imgs/four.png", comment3: "Lots of good food and different snacks."},
  {placeName: "Sightseeing Bus", placeCategory: "Experiences", placeImages: "assets/imgs/bus.jpg", adress: "Akershusstranda 15", quote: "The Tourist Bus", coords:[10.738270, 59.905060], description: 
  "The hop-on-hop-off sightseeing bus tour only runs in the Spring and Summer, and it is designed to get you around the best of Oslo in 18 strategically located bus stops." 
      + "Spot your favorite location from the double-decker exclusive panoramic view and just hop-off to explore further.", author1: "Zhou Tai", header1: "Great consept", rating1: "assets/imgs/three.png", comment1: "Very good way to check out stuff in the city.", author2: "Lang Bai", header2: "Comfortable seats", rating2: "assets/imgs/four.png", comment2: "The bus had very comfortable seats.", author3: "Xing Qing", header3: "Polite driver", rating3: "assets/imgs/four.png", comment3: "The bus driver was very polite and easy to converse with"},
  {placeName: "Historic museum", placeCategory: "Museums", placeImages: "assets/imgs/n_museum.jpg", adress: "Sars' gate 1", quote: "Nature Freak", coords:[10.771080,59.919791], description: 
  "The museum of natural history on Tøyen in Oslo is part of the university of Oslo and houses the university’s natural history collections and botanical garden." 
      + "The museum has the biggest collection of natural sciences objects.", author1: "Jin Huang", header1: "Cool exhibits", rating1: "assets/imgs/four.png", comment1: "Very cool exhibits.", author2: "Zhao Jingyi", header2: "Clean museum", rating2: "assets/imgs/four.png", comment2: "The museum was clean and smelled nice, which i value a lot!", author3: "Peng He", header3: "Garden was cool", rating3: "assets/imgs/three.png", comment3: "Enjoyed checking out the garden!"},	
  {placeName: "Vigeland Park", placeCategory: "Parks", placeImages: "assets/imgs/vigeland.jpg", adress: "Nobels gate 32", quote: "Sculpture Madness", coords:[10.700963, 59.927022], description: 
  "The Vigeland facility, originally called “Tørtberg-anlegget”,  is a facility of sculptures in Frognerparken. The collection of sculptures was named after their creator," 
      + "Gustav Vigeland, created from the 1920s to his death in 1943. It is one of Norway’s most visited attraction.", author1: "Guo Ping", header1: "Funny sculptures", rating1: "assets/imgs/four.png", comment1: "Sculptures looked funny, very well made.", author2: "Gu De", header2: "Interesting artwork", rating2: "assets/imgs/four.png", comment2: "Impressive work from Vigeland", author3: "Teng Yan", header3: "Cool artwork", rating3: "assets/imgs/three.png", comment3: "Cool artwork."},
  {placeName: "Nobel Peacecenter", placeCategory: "Museums", placeImages: "assets/imgs/the-nobel-peace-center.jpg", adress: "Brynjulf Bulls plass 1", quote: "Palace of Peace", coords:[10.730253 ,59.911818], description: 
  "Nobels Peacecenter is the museum for Nobels peace prize that conveys information and knowledge about Nobels peace prize, Alfred Nobel and the winners of the prize" 
      + "and their work through permanent and changing exhibitions.", author1: "Gu Chin", header1: "Interesting museum", rating1: "assets/imgs/three.png", comment1: "Cool to visit the center.", author2: "Xia Guanting", header2: "What a man mr. Nobel ", rating2: "assets/imgs/three.png", comment2: "Nobel must have been a great man", author3: "Zhuan Jin", header3: "Easy to navigate", rating3: "assets/imgs/four.png", comment3: "Easy to navigate through the museum."},
  {placeName: "Sognsvann", placeCategory: "Nature", placeImages: "assets/imgs/sognsvann.jpg", adress: "Sognsvann", quote: "The Cooldown",coords:[10.727275 ,59.975974], description: 
  "Sognsvann is a swimming and hiking facility. The trail around Sognsvann is one of Norway’s most popular hiking trails, the trail is about 3,5km facilitated for people" 
      + "with disabilities or other needs. It is also possible to go for a refreshing swim in the lake.", author1: "Shao Shui", header1: "Refreshing water", rating1: "assets/imgs/four.png", comment1: "Swim was very refreshing, but cold ", author2: "Zhong Shu", header2: "Cold water", rating2: "assets/imgs/three.png", comment2: "Water as cold, but was very nice", author3: "Gu Zan", header3: "Beautiful beach", rating3: "assets/imgs/five.png", comment3: "Beach was very beautiful and relaxing."}, 
  {placeName: "Paradise bay", placeCategory: "Nature", placeImages: "assets/imgs/paradis.png",  adress: "Paradisbukta", quote: "Paradise On Earth",coords:[10.665449, 59.902791], description:
  "Paradisbukta is a great place to go for a swim with a beautiful beach. With wonderful hiking trails covering the most of Bygdøy, there is plenty of options for your hiking route." 
      + "The swimming area is equipped with public toilets, benches, swim rafts etc.", author1: "Lai Qiu", header1: "Very nice", rating1: "assets/imgs/four.png", comment1: "Perfect for relaxing and letting the kids run around.", author2: "He Huang", header2: "Nice trails", rating2: "assets/imgs/three.png", comment2: "Nice to walk in the hiking trails", author3: "Xu Fang", header3: "Nice combo", rating3: "assets/imgs/five.png", comment3: "Combination between hiking trails and swimming I value very much."}
]


initializeItems(){

  this.cards = [
    {placeName: "Barcode", placeCategory: "Cool Buildings", placeImages: "assets/imgs/barcode.jpg", adress: "Dronning Eufemias gate", quote: "The New City",coords:[10.756800,59.908680], description: 
    "As well as spectacular architecture, Barcode offers more than 30 different restaurants, stores, galleries and services. The restaurants offer food from around the world and houses" 
       + "several known galleries like Kunsthall Oslo and The Munch museum.", author1: "Wieng Zing", header1: "Amazing buildings", rating1: "assets/imgs/four.png", comment1: "Me and my wife went here last year on our" +
           "vacation. Really interesting buildings and architecture", author2: "Laman Dong", header2: "Really cool!", rating2: "assets/imgs/five.png", comment2: "Was there yesterday with my sister." +
           " She's really into modern building design" + "so this was a perfect fit.", author3: "Mao Zedong", header3: "Boring buildings", rating3: "assets/imgs/two.png", comment3:  "It's just buildings," +
           "not really that exciting. It's also really expensive here. They charged me like 40 kroner for a Soda!"},
    {placeName: "Royal Castle", placeCategory: "Cool Buildings", placeImages: "assets/imgs/slottet.jpeg", adress: "Slottsplassen 1", quote: "The Royalty", coords:[10.727720,59.917060], description: 
    "The Royal Palace is situated on a rise, the Bellevue, at one end of Oslo’s main thoroughfare, Karl Johans gate. The Royal Palace is one of the country’s most important buildings" 
       + "houses the royal family and is open to the public during the summer season.", author1: "Wieng Lee", header1: "Beautiful castle.", rating1: "assets/imgs/four.png", comment1: "Castle looked amazing and got us a lot" +
           "of cool pictures!", author2: "Park Dong", header2: "Awesome!", rating2: "assets/imgs/five.png", comment2: "The guards were really cool!.", author3: "Lee Sin", header3: "Intimidating guards", rating3: "assets/imgs/three.png", comment3:  "Even though the castle looked great, the guards scared my daughter when she got too close." +
           "Be careful around the guards!"},
    {placeName: "Holmenkollen", placeCategory: "Nature", placeImages: "assets/imgs/holmenkollen.jpg", adress: "Kongeveien 5", quote: "Norwegian Pride", coords:[10.666290,59.962630], description:
       "Holmenkollen is a Norwegian national arena built in 2011. During the winter there is an arrangement of winter games as well as the museum and the jump tower is open for the audience." 
        + "The popular zip line is open during the summer.", author1: "Ji Seong Lee", header1: "Incredible!", rating1: "assets/imgs/five.png", comment1: "Incredible looking tower, no idea how the ski jumpers do it!", author2: "Jie Shei", header2: "Great facility!", rating2: "assets/imgs/four.png", comment2: "Very well put together facility, would recommend checking it out.", author3: "Park Dre", header3: "Fascinating jump tower.", rating3: "assets/imgs/four.png", comment3: "Amazes me how the jumpers dare to jump, especially after seeing a tower in real life"},
    {placeName: "Frognerparken", placeCategory: "Parks", placeImages: "assets/imgs/frognerparken.jpg", adress: "Kirkeveien", quote: "Park of Dreams", coords:[10.704114,59.925854], description: 
     "Frognerparken is Oslo’s most popular recreational area, in which Vigelandsparken with over 200 famous sculptures of Gustav Vigeland is located. The park has both cafes and restaurants" 
        + "along with Frognerbadet, a popular swimming pool.", author1: "Hooi Weng", header1: "Relaxing area", rating1: "assets/imgs/four.png", comment1: "A lot of people, but still more than enough room to relaxing and enjoy the weather.", author2: "Zhong Bo", header2: "Very fun!", rating2: "assets/imgs/five.png", comment2: "My sister and I really had fun throwing frisbees back and forth!.", author3: "Xia Chin", header3: "Nothing special", rating3: "assets/imgs/two.png", comment3: "It's just a park, seen it before."},
    {placeName: "The Opera", placeCategory: "Cool Buildings", placeImages: "assets/imgs/Opera.jpg", adress: "Kirsten Flagstads plass 1", quote: "The Opera House", coords:[10.754150,59.906570], description: 
       "The Royal Palace is situated on a rise, the Bellevue, at one end of Oslo’s main thoroughfare, Karl Johans gate. The Royal Palace is one of the country’s most important buildings,"
        + "houses the royal family and is open to the public during the summer season.", author1: "Tang Feng", header1: "Cool place", rating1: "assets/imgs/three.png", comment1: "The house looks great, and the space outside makes for great pictures.", author2: "Yin Min", header2: "Interesting show!", rating2: "assets/imgs/four.png", comment2: "The show had me entertained from beginning to end.", author3: "Sun Ju", header3: "Beautiful place", rating3: "assets/imgs/four.png", comment3: "The place looks amazing!"},
    {placeName: "Museum of Science", placeCategory: "Museums", placeImages: "assets/imgs/teknisk_museum.jpg", adress: "Kjelsåsveien 143", quote: "The Tech museum", coords:[10.781110,59.966250], description: 
    "Dive into exciting exhibitions on Norwegian medicine history, oil and gas production and music machines, get an energy boost in the hydroelectric power exhibition or find out more about" 
        + "the fascinating Norwegian history of industry.", author1: "Du Liuxian", header1: "Fun museum!", rating1: "assets/imgs/four.png", comment1: "A lot of cool and fun stuff to try out!", author2: "Zou Luoyang", header2: "Interesting museum", rating2: "assets/imgs/four.png", comment2: "A lot of interesting stuff to check out! My brother didn't want to leave.", author3: "Fan Wuying", header3: "Very cool show", rating3: "assets/imgs/four.png", comment3: "The science show they had for us was very cool and interesting! Would highly recommend checking out their shows!"},
    {placeName: "Tusenfryd", placeCategory: "Experiences", placeImages: "assets/imgs/tusenfryd.jpg", adress: "Fryds Vei 25", quote: "Place Of Fun", coords:[10.777370,59.749930], description: 
    "Tusenfryd is Norway’s biggest amusement park located in Ås, about 20 kilometers south of Oslo centrum. Tusenfryd has over 30 exciting attractions, games and stores."
        + "Being customized for people of all ages, the park is a great place for tourists.", author1: "Deng He", header1: "Tons of fun!", rating1: "assets/imgs/five.png", comment1: "My kids had a really great time and tried out all of the rides.", author2: "Wen Jie", header2: "Nice and big amusement park", rating2: "assets/imgs/five.png", comment2: "Even though I dont enjoy taking rides, my friends did and had a nice time.", author3: "Zhang Zhihao", header3: "Good food and snacks", rating3: "assets/imgs/four.png", comment3: "Lots of good food and different snacks."},
    {placeName: "Sightseeing Bus", placeCategory: "Experiences", placeImages: "assets/imgs/bus.jpg", adress: "Akershusstranda 15", quote: "The Tourist Bus", coords:[10.738270, 59.905060], description: 
    "The hop-on-hop-off sightseeing bus tour only runs in the Spring and Summer, and it is designed to get you around the best of Oslo in 18 strategically located bus stops." 
        + "Spot your favorite location from the double-decker exclusive panoramic view and just hop-off to explore further.", author1: "Zhou Tai", header1: "Great consept", rating1: "assets/imgs/three.png", comment1: "Very good way to check out stuff in the city.", author2: "Lang Bai", header2: "Comfortable seats", rating2: "assets/imgs/four.png", comment2: "The bus had very comfortable seats.", author3: "Xing Qing", header3: "Polite driver", rating3: "assets/imgs/four.png", comment3: "The bus driver was very polite and easy to converse with"},
    {placeName: "Historic museum", placeCategory: "Museums", placeImages: "assets/imgs/n_museum.jpg", adress: "Sars' gate 1", quote: "Nature Freak", coords:[10.771080,59.919791], description: 
    "The museum of natural history on Tøyen in Oslo is part of the university of Oslo and houses the university’s natural history collections and botanical garden." 
        + "The museum has the biggest collection of natural sciences objects.", author1: "Jin Huang", header1: "Cool exhibits", rating1: "assets/imgs/four.png", comment1: "Very cool exhibits.", author2: "Zhao Jingyi", header2: "Clean museum", rating2: "assets/imgs/four.png", comment2: "The museum was clean and smelled nice, which i value a lot!", author3: "Peng He", header3: "Garden was cool", rating3: "assets/imgs/three.png", comment3: "Enjoyed checking out the garden!"},	
    {placeName: "Vigeland Park", placeCategory: "Parks", placeImages: "assets/imgs/vigeland.jpg", adress: "Nobels gate 32", quote: "Sculpture Madness", coords:[10.700963, 59.927022], description: 
    "The Vigeland facility, originally called “Tørtberg-anlegget”,  is a facility of sculptures in Frognerparken. The collection of sculptures was named after their creator," 
        + "Gustav Vigeland, created from the 1920s to his death in 1943. It is one of Norway’s most visited attraction.", author1: "Guo Ping", header1: "Funny sculptures", rating1: "assets/imgs/four.png", comment1: "Sculptures looked funny, very well made.", author2: "Gu De", header2: "Interesting artwork", rating2: "assets/imgs/four.png", comment2: "Impressive work from Vigeland", author3: "Teng Yan", header3: "Cool artwork", rating3: "assets/imgs/three.png", comment3: "Cool artwork."},
    {placeName: "Nobel Peacecenter", placeCategory: "Museums", placeImages: "assets/imgs/the-nobel-peace-center.jpg", adress: "Brynjulf Bulls plass 1", quote: "Palace of Peace", coords:[10.730253 ,59.911818], description: 
    "Nobels Peacecenter is the museum for Nobels peace prize that conveys information and knowledge about Nobels peace prize, Alfred Nobel and the winners of the prize" 
        + "and their work through permanent and changing exhibitions.", author1: "Gu Chin", header1: "Interesting museum", rating1: "assets/imgs/three.png", comment1: "Cool to visit the center.", author2: "Xia Guanting", header2: "What a man mr. Nobel ", rating2: "assets/imgs/three.png", comment2: "Nobel must have been a great man", author3: "Zhuan Jin", header3: "Easy to navigate", rating3: "assets/imgs/four.png", comment3: "Easy to navigate through the museum."},
    {placeName: "Sognsvann", placeCategory: "Nature", placeImages: "assets/imgs/sognsvann.jpg", adress: "Sognsvann", quote: "The Cooldown",coords:[10.727275 ,59.975974], description: 
    "Sognsvann is a swimming and hiking facility. The trail around Sognsvann is one of Norway’s most popular hiking trails, the trail is about 3,5km facilitated for people" 
        + "with disabilities or other needs. It is also possible to go for a refreshing swim in the lake.", author1: "Shao Shui", header1: "Refreshing water", rating1: "assets/imgs/four.png", comment1: "Swim was very refreshing, but cold ", author2: "Zhong Shu", header2: "Cold water", rating2: "assets/imgs/three.png", comment2: "Water as cold, but was very nice", author3: "Gu Zan", header3: "Beautiful beach", rating3: "assets/imgs/five.png", comment3: "Beach was very beautiful and relaxing."}, 
    {placeName: "Paradise bay", placeCategory: "Nature", placeImages: "assets/imgs/paradis.png",  adress: "Paradisbukta", quote: "Paradise On Earth",coords:[10.665449, 59.902791], description:
    "Paradisbukta is a great place to go for a swim with a beautiful beach. With wonderful hiking trails covering the most of Bygdøy, there is plenty of options for your hiking route." 
        + "The swimming area is equipped with public toilets, benches, swim rafts etc.", author1: "Lai Qiu", header1: "Very nice", rating1: "assets/imgs/four.png", comment1: "Perfect for relaxing and letting the kids run around.", author2: "He Huang", header2: "Nice trails", rating2: "assets/imgs/three.png", comment2: "Nice to walk in the hiking trails", author3: "Xu Fang", header3: "Nice combo", rating3: "assets/imgs/five.png", comment3: "Combination between hiking trails and swimming I value very much."}
  ]
}

 //Method of searchbar
 getItems(ev: any) {
   this.initializeItems();

   const val = ev.target.value;

   if(val && val.trim != '') {
     this.cards = this.cards.filter((item) => {
       return (item.placeName.toLowerCase().indexOf(val.toLowerCase()) > -1);
     })
   }
 }

 //Method for filter button
 presentPopover(myEvent) {

   let popover = this.popoverCtrl.create(PopoverComponent);
   popover.present({
     ev: myEvent
   }).catch((error) => alert("Something went wrong"));

   popover.onDidDismiss(popoverData => {
     if(popoverData != null) {
       this.initializeItems();
       const clickValue = popoverData.item;

       if(clickValue !== "All") {
         this.cards = this.cards.filter((item) => {
           return (item.placeCategory.toLowerCase().indexOf(clickValue.toLowerCase()) > -1);
         })
       } else {
         return this.cards.forEach((item) => {
           return item;
         })
       }
     }
   })
 }
  getInformation(event){
    // do something with the id...
    var target = event.currentTarget.children;
    let arr = [];

    for (let index = 0; index < this.cards.length; index++) {
      const element = this.cards[index].placeName;
      
      if(element === event.currentTarget.children.item(0).innerHTML){
        arr.push(this.cards[index])
      }
    }
    this.navCtrl.setRoot(PlaceDescriptionPage, {
     Data: arr,
    }, {animate: true, direction: 'forward'})
}

push(){
}

ionViewDidLoad(){
    console.log(firebase.auth().currentUser);
    if(!this.asked){
        if(!firebase.auth().currentUser){
            var tabs = document.getElementById("tab-t0-2");
            tabs.style.display = "none";
              
          }
        }
    

}

signout(){
    firebase.auth().signOut;
    this.navCtrl.setRoot(Startpage);
}

ionViewWillEnter() {
    this.initializeItems();
    this.asked=true;
    }
  ionViewWillLeave(){
  }

}
