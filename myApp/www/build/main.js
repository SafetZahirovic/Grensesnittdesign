webpackJsonp([7],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPlacesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_map_map__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__maps_maps__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyPlacesPage = /** @class */ (function () {
    function MyPlacesPage(navCtrl, map) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.map = map;
        this.itemExpandHeight = 100;
        this.coords = [];
        this.cards = [];
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["database"]().ref('Places/' + __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser.uid).on('value', function (snapshot) {
            _this.cards = [];
            Object.keys(snapshot.val()).map(function (map) {
                if (snapshot.val() != null) {
                    _this.cards.push({
                        expanded: false,
                        name: snapshot.val()[map].buildingName,
                        url: snapshot.val()[map].buildingPicture,
                        coords: snapshot.val()[map].places
                    });
                    //this.coords = snapshot.val()[map].places;
                }
            });
        });
    }
    MyPlacesPage.prototype.showMap = function (card) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__maps_maps__["a" /* MapsPage */], {
            Coords: card.coords
        });
    };
    MyPlacesPage.prototype.expandItem = function (item) {
        this.cards.map(function (listItem) {
            if (item == listItem) {
                listItem.expanded = !listItem.expanded;
            }
            else {
                listItem.expanded = false;
            }
            return listItem;
        });
    };
    MyPlacesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-places',template:/*ion-inline-start:"/Users/safetzahirovic/Desktop/test_jobb/Grensesnittdesign/myApp/src/pages/my-places/my-places.html"*/'<!--\n  Generated template for the MyPlacesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <ion-title>\n        My day on Oslo\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n   \n  <ion-content>\n   \n  \n        <ion-item id="list" detail-none ion-item *ngFor="let card of cards;">\n          <ion-thumbnail id="thumbnail" item-start>\n            <img src="{{card.url}}">\n          </ion-thumbnail>\n          <div id="heading">{{card.name}}</div>\n          <button id="delete" (click)="showMap(card)" ion-button> <ion-icon name="navigate"></ion-icon></button>\n          <button id="travel" class="balanced" (click)="delete(card.key)" ion-button> <ion-icon name="close"></ion-icon></button>\n          <div class="vl"></div>\n      </ion-item>\n     \n  </ion-content>'/*ion-inline-end:"/Users/safetzahirovic/Desktop/test_jobb/Grensesnittdesign/myApp/src/pages/my-places/my-places.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__components_map_map__["a" /* MapComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__components_map_map__["a" /* MapComponent */]) === "function" && _b || Object])
    ], MyPlacesPage);
    return MyPlacesPage;
    var _a, _b;
}());

//# sourceMappingURL=my-places.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_map_map__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_places_my_places__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapsPage = /** @class */ (function () {
    function MapsPage(navCtrl, navParams, map) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.map = map;
        this.currLoc = [];
        this.currLoc.push(this.navParams.data.Coords[0], this.navParams.data.Coords[1]);
    }
    MapsPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__my_places_my_places__["a" /* MyPlacesPage */], {}, { animate: true, direction: 'back' });
    };
    MapsPage.prototype.mapshow = function () {
        this.map.getRoutes(this.currLoc);
    };
    /*$http({
      method: 'GET',
      url: directionsRequest,
    }).done(function(data) {
      var route = data.routes[0].geometry;
      map.addLayer({
        id: 'route',
        type: 'line',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: route
          }
        },
        paint: {
          'line-width': 2
        }
      });
      // this is where the code from the next step will go
    });*/
    MapsPage.prototype.ionViewDidEnter = function () {
        this.mapshow();
        document.getElementById("button").style.cssText = "display: block";
    };
    MapsPage.prototype.ionViewDidLoad = function () {
        this.mapshow();
        document.getElementById("button").style.cssText = "display: none";
    };
    MapsPage.prototype.ionWillEnter = function () {
        this.mapshow();
        document.getElementById("button").style.cssText = "display: block";
    };
    MapsPage.prototype.ionViewWillLeave = function () {
        document.getElementById("button").style.cssText = "display: none";
    };
    MapsPage.prototype.ionViewCanEnter = function () {
    };
    MapsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-maps',template:/*ion-inline-start:"/Users/safetzahirovic/Desktop/test_jobb/Grensesnittdesign/myApp/src/pages/maps/maps.html"*/'<!--\n  Generated template for the MapsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n      <button id="button" (click)="back()">\n        <ion-icon name="ios-arrow-round-back"></ion-icon>\n      </button>\n\n<div id=\'map\' style=\'z-index: 1; width: 100%; height: 100%;\'></div>\n'/*ion-inline-end:"/Users/safetzahirovic/Desktop/test_jobb/Grensesnittdesign/myApp/src/pages/maps/maps.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__components_map_map__["a" /* MapComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__components_map_map__["a" /* MapComponent */]) === "function" && _c || Object])
    ], MapsPage);
    return MapsPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=maps.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceDescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_map_map__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__places_places__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlaceDescriptionPage = /** @class */ (function () {
    function PlaceDescriptionPage(navCtrl, navParams, map, viewCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.map = map;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.user = false;
        this.foundUser = false;
        this.pcode = this.navParams.data.Data[0].description;
        this.quote = this.navParams.data.Data[0].quote;
        this.description = this.navParams.data.Data[0].description;
        this.adress = this.navParams.data.Data[0].adress;
        this.name = this.navParams.data.Data[0].placeName;
        this.img = this.navParams.data.Data[0].placeImages;
        this.coords = this.navParams.data.Data[0].coords;
        this.author1 = this.navParams.data.Data[0].author1;
        this.header1 = this.navParams.data.Data[0].header1;
        this.rating1 = this.navParams.data.Data[0].rating1;
        this.comment1 = this.navParams.data.Data[0].comment1;
        this.author2 = this.navParams.data.Data[0].author2;
        this.header2 = this.navParams.data.Data[0].header2;
        this.rating2 = this.navParams.data.Data[0].rating2;
        this.comment2 = this.navParams.data.Data[0].comment2;
        this.author3 = this.navParams.data.Data[0].author3;
        this.header3 = this.navParams.data.Data[0].header3;
        this.rating3 = this.navParams.data.Data[0].rating3;
        this.comment3 = this.navParams.data.Data[0].comment3;
        if (__WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser) {
            this.user = true;
            __WEBPACK_IMPORTED_MODULE_3_firebase_app__["database"]().ref('Places/').on('value', function (snapshot) {
                Object.keys(snapshot.val()).map(function (map) {
                    if (map === __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser.uid) {
                        _this.found = true;
                        Object.keys(snapshot.val()[map]).map(function (e) {
                            if (snapshot.exists()) {
                                if (snapshot.val()[map][e].buildingName === _this.name) {
                                    _this.foundUser = true;
                                    _this.placesKey = e;
                                }
                            }
                        });
                    }
                });
            });
        }
    }
    PlaceDescriptionPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__places_places__["a" /* PlacesPage */], {}, { animate: true, direction: 'back' });
        //this.viewCtrl.dismiss();
    };
    PlaceDescriptionPage.prototype.addToDatabase = function () {
        if (!__WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser) {
            var alert = this.alertCtrl.create({
                title: 'Login',
                subTitle: 'You need to be signed in to use this feature',
                buttons: ['Dismiss']
            });
            alert.present();
        }
        if (__WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser) {
            if (!this.foundUser) {
                __WEBPACK_IMPORTED_MODULE_3_firebase_app__["database"]().ref('Places/' + __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser.uid).push().set({
                    places: this.coords,
                    buildingPicture: this.img,
                    buildingName: this.name
                });
            }
        }
    };
    PlaceDescriptionPage.prototype.removeFromDatabase = function () {
        var _this = this;
        if (!__WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser) {
            var alert = this.alertCtrl.create({
                title: 'Login',
                subTitle: 'You need to be signed in to use this feature',
                buttons: ['Dismiss']
            });
            alert.present();
        }
        if (__WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser) {
            if (this.foundUser) {
                __WEBPACK_IMPORTED_MODULE_3_firebase_app__["database"]().ref('Places/' + __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser.uid + "/" + this.placesKey).on('value', function (snapshot) {
                    if (snapshot.val() != null) {
                        __WEBPACK_IMPORTED_MODULE_3_firebase_app__["database"]().ref('Places/' + __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser.uid + "/" + _this.placesKey).remove();
                    }
                });
            }
        }
        this.foundUser = false;
    };
    PlaceDescriptionPage.prototype.addToFavourites = function () {
    };
    PlaceDescriptionPage.prototype.presentAlert = function () {
    };
    PlaceDescriptionPage.prototype.ionViewDidLoad = function () {
        if (!__WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser) {
            document.getElementById("favourites").style.cssText = "opacity: 1;bacground-color: grey; background-image: linear-gradient(to right, grey , grey);";
        }
        document.getElementById("button").style.cssText = "display: none";
    };
    PlaceDescriptionPage.prototype.ionWillEnter = function () {
        document.getElementById("button").style.cssText = "display: block";
    };
    PlaceDescriptionPage.prototype.ionViewDidEnter = function () {
        document.getElementById("button").style.cssText = "display: block";
        this.map.getMap(this.coords);
    };
    PlaceDescriptionPage.prototype.ionViewWillLeave = function () {
        document.getElementById("button").style.cssText = "display: none";
    };
    PlaceDescriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-place-description',template:/*ion-inline-start:"/Users/safetzahirovic/Desktop/test_jobb/Grensesnittdesign/myApp/src/pages/place-description/place-description.html"*/'<!--\n  Generated template for the PlaceDescriptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<nav-bar class="bottom"></nav-bar>\n<ion-content>\n  <button id="button" (click)="back()" icon-only>\n    <ion-icon name="ios-arrow-round-back"  ></ion-icon>\n  </button>\n  <div class="hero">\n    <img src={{this.img}} alt="" />\n    <figure>\n      <figcaption>\n        <h1>{{this.name}}</h1>\n        <hr>\n        <p> {{ this.quote }}</p>\n      </figcaption>\n    </figure>\n    <button id="favourites" (click)="this.foundUser ? removeFromDatabase() :  addToDatabase()">\n      \n      \n      <ion-icon *ngIf="this.foundUser" name="checkmark-circle"></ion-icon>\n      <ion-icon *ngIf="!this.foundUser" name="ios-heart-outline"></ion-icon>\n    </button>\n  </div>\n  <div id="description-container">\n    <div id="description-header">\n      <p>{{this.adress}}</p>\n    </div>\n    <div id="description-text">\n      <p>{{ this.description }}</p>\n    </div>\n  </div>\n  <div id="comments-container">\n    <p class="small-headline">Comments and Reviews</p>\n    <hr>\n    <div class="comments">\n      <div class="author">Author: <b> {{this.author1 }}</b></div>\n      <div class="rating-author-container">\n        <div class="comment-header"><b> {{ this.header1 }} </b></div>\n        <img class="rating" src= {{this.rating1}} />\n      </div>\n      <div class="real-comment">\n        <p>{{ this.comment1 }}</p>\n      </div>\n    </div>\n    <div class="comments">\n      <div class="author">Author: <b> {{this.author2 }}</b></div>\n      <div class="rating-author-container">\n        <div class="comment-header"><b> {{ this.header2 }} </b></div>\n        <img class="rating" src= {{this.rating2}} />\n      </div>\n      <div class="real-comment">\n        <p>{{ this.comment2 }}</p>\n      </div>\n    </div>\n    <div class="comments">\n      <div class="author">Author: <b> {{this.author3 }}</b></div>\n      <div class="rating-author-container">\n        <div class="comment-header"><b> {{ this.header3 }} </b></div>\n        <img class="rating" src= {{this.rating3}} />\n      </div>\n      <div class="real-comment">\n        <p>{{ this.comment3 }}</p>\n      </div>\n    </div>\n  </div>\n  <div id="description-map-container"> \n    <div id=\'map\' style=\'z-index: 1; width: 100%; height: 100%;\'></div\n      ></div>\n \n</ion-content>\n\n\n'/*ion-inline-end:"/Users/safetzahirovic/Desktop/test_jobb/Grensesnittdesign/myApp/src/pages/place-description/place-description.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__components_map_map__["a" /* MapComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__components_map_map__["a" /* MapComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
    ], PlaceDescriptionPage);
    return PlaceDescriptionPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=place-description.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__places_places__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.data = {
            name: "",
            email: "",
            password: "",
            repeatPassword: "",
            loginError: "",
            true: false,
            userCreated: "",
            removeFields: false,
            continue: false
        };
    }
    SignupPage.prototype.handleSignUp = function () {
        var _this = this;
        var email = this.data.email;
        var username = this.data.name;
        var getUserData = "";
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().createUserWithEmailAndPassword(this.data.email, this.data.password).then(function success(userData) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["database"]().ref('Users/').push().set({
                Username: username,
                Email: email
            });
        }).then(function () {
            _this.something();
        }).catch(function failure(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode == 'auth/weak-password') {
                document.getElementById("message").innerHTML = "The password is too weak";
            }
            else {
                document.getElementById("message").innerHTML = errorMessage;
            }
            console.log(error);
            // [END_EXCLUDE]
        });
        document.getElementById("message").innerHTML = '';
        // [END createwithemail]
        console.log(__WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser);
    };
    ;
    SignupPage.prototype.something = function () {
        var _this = this;
        this.data.true = true;
        this.data.removeFields = true;
        setTimeout(function () {
            document.getElementById("circle-loader").id = "load-complete";
        }, 2500);
        setTimeout(function () {
            _this.data.userCreated = "You have successfully created user";
            _this.data.true = false;
            _this.data.continue = true;
        }, 6000);
    };
    SignupPage.prototype.goToNextPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__places_places__["a" /* PlacesPage */], {
            UserID: __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser.uid,
            Username: this.data.name,
            Email: this.data.email
        });
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.ionViewWillEnter = function () {
        var tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.display = 'none';
            });
        } // end if
    };
    SignupPage.prototype.ionViewDidLeave = function () {
        var tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.display = 'flex';
            });
        } // end if
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/safetzahirovic/Desktop/test_jobb/Grensesnittdesign/myApp/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n  \n<ion-content class="no-scroll" padding>\n\n    <canvas style="display: none" width="300px" height="200"></canvas>\n    <!-- <ion-img class="img" src="assets/imgs/oslo-logo.png" alt="not found"></ion-img> -->\n    <video preload="true" class="mov" src="assets/vid/norwegian.mp4" type="video/mp4" autoplay loop muted playsinline>\n    </video>\n\n\n\n\n  <form *ngIf="!data.removeFields" (ngSubmit)="handleSignUp()">\n\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Enter your nickname</ion-label>\n        <ion-input type="email" [(ngModel)]="data.name" name="Email" required=""></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Enter your email</ion-label>\n        <ion-input type="email" [(ngModel)]="data.email" name="Email" required=""></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Enter your password</ion-label>\n        <ion-input type="password" [(ngModel)]="data.password" name="Password" required=""></ion-input>\n      </ion-item>\n\n      <button class="btn2" type="submit">Sign up</button>\n      <div class="acc-btn" text-center (click)="resetPassword()">Already have an account? <br>\n        Sign in here\n      </div>\n\n    </ion-list>\n\n  </form>\n\n  <ion-content>\n    <div>{{data.userCreated}}</div>\n    <div id="message"></div>\n    <div *ngIf="data.removeFields" id="circle-loader" class="circle-loader">\n      <div class="checkmark draw"></div>\n    </div>\n\n    <button *ngIf="data.continue" ion-button full (click)="goToNextPage()" color="primary" type="submit">Continue\n    </button>\n\n  </ion-content>\n\n\n</ion-content>'/*ion-inline-end:"/Users/safetzahirovic/Desktop/test_jobb/Grensesnittdesign/myApp/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _c || Object])
    ], SignupPage);
    return SignupPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/maps/maps.module": [
		304,
		16
	],
	"../pages/place-description/place-description.module": [
		305,
		15
	],
	"../pages/placepage/placepage.module": [
		307,
		10
	],
	"../pages/places/places.module": [
		306,
		14
	],
	"../pages/reset-password/reset-password.module": [
		308,
		13
	],
	"../pages/signin/signin.module": [
		310,
		12
	],
	"../pages/signup/signup.module": [
		309,
		11
	],
	"../pages/startpage/startpage.module": [
		435,
		9
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverComponent = /** @class */ (function () {
    function PopoverComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.items = [
            { item: "All" },
            { item: "Cool Buildings" },
            { item: "Parks" },
            { item: "Museums" },
            { item: "Experiences" }
        ];
    }
    PopoverComponent.prototype.itemClick = function (item) {
        this.viewCtrl.dismiss(item)
            .catch(function (error) { return alert("Something went wrong"); });
    };
    PopoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'popover',template:/*ion-inline-start:"/Users/safetzahirovic/Desktop/test_jobb/Grensesnittdesign/myApp/src/components/popover/popover.html"*/'<!-- Generated template for the PopoverComponent component -->\n<ion-list>\n    <ion-item *ngFor="let item of items" (click)="itemClick(item)">\n      {{item.item}}\n    </ion-item>\n   </ion-list>\n'/*ion-inline-end:"/Users/safetzahirovic/Desktop/test_jobb/Grensesnittdesign/myApp/src/components/popover/popover.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], PopoverComponent);
    return PopoverComponent;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__places_places__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_places_my_places__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__startpage_startpage__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__startpage_startpage__["a" /* Startpage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__places_places__["a" /* PlacesPage */];
        this.tab3Root = null;
    }
    TabsPage.prototype.ionViewDidEnter = function () {
        if (!__WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser) {
            document.getElementById("tab-t0-2").addEventListener("click", function () {
                console.log("nothing");
                alert("no way Jose");
            });
        }
        else if (__WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser) {
            this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__my_places_my_places__["a" /* MyPlacesPage */];
        }
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/safetzahirovic/Desktop/test_jobb/Grensesnittdesign/myApp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n <ion-tab [root]="tab1Root" ></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Places" tabIcon="custom-mynewicon1"></ion-tab>\n  <ion-tab id="user" [root]="tab3Root" tabTitle="MyList" tabIcon="custom-mynewicon"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/safetzahirovic/Desktop/test_jobb/Grensesnittdesign/myApp/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetPasswordPage = /** @class */ (function () {
    function ResetPasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = {
            email: "",
        };
    }
    ResetPasswordPage.prototype.resetPassword = function (email) {
        var _this = this;
        var auth = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]();
        var emailAddress = email;
        auth.sendPasswordResetEmail(emailAddress).then(function () {
            console.log("sent email to: " + emailAddress);
            // Email sent.
        }).then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__signin_signin__["a" /* SigninPage */]);
        }).catch(function (error) {
            console.log("Something went wrong");
        });
    };
    ResetPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetPasswordPage');
    };
    ResetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reset-password',template:/*ion-inline-start:"/Users/safetzahirovic/Desktop/test_jobb/Grensesnittdesign/myApp/src/pages/reset-password/reset-password.html"*/'<!--\n  Generated template for the ResetPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ResetPassword</ion-title>\n  </ion-navbar>\n  </ion-header>\n\n  <ion-content padding>\n      <ion-img width="350" height="200" src="https://firebasestorage.googleapis.com/v0/b/grensesnittdesign.appspot.com/o/images%2Fstock-vector-oslo-norway-skyline-with-panorama-in-white-background-vector-illustration-business-travel-and-533055928.jpg?alt=media&token=67a1e35c-f038-4492-a097-bae6f60fb507"></ion-img>\n  \n      \n      <ion-list>\n          <ion-input type="email" placeholder="E-mail" [(ngModel)]="data.email" name="Email" required="" id="email-input"></ion-input>\n          <button ion-button full round (click)= "resetPassword(data.email)" color="primary" type="submit">ResetPassword</button>\n      </ion-list>\n\n       \n  </ion-content>\n'/*ion-inline-end:"/Users/safetzahirovic/Desktop/test_jobb/Grensesnittdesign/myApp/src/pages/reset-password/reset-password.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
    ], ResetPasswordPage);
    return ResetPasswordPage;
    var _a, _b;
}());

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signin_signin__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_maps_maps__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_reset_password_reset_password__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_places_places__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_place_description_place_description__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_map_map__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_popover_popover__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_expandable_expandable__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_my_places_my_places__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_places_places__["a" /* PlacesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_place_description_place_description__["a" /* PlaceDescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_maps_maps__["a" /* MapsPage */],
                __WEBPACK_IMPORTED_MODULE_15__components_map_map__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__components_popover_popover__["a" /* PopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_expandable_expandable__["a" /* ExpandableComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_my_places_my_places__["a" /* MyPlacesPage */],
                __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar__["a" /* NavbarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/maps/maps.module#MapsPageModule', name: 'MapsPage', segment: 'maps', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/place-description/place-description.module#PlaceDescriptionPageModule', name: 'PlaceDescriptionPage', segment: 'tabs', priority: 'high', defaultHistory: [] },
                        { loadChildren: '../pages/places/places.module#PlacesPageModule', name: 'PlacesPage', segment: 'places', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/placepage/placepage.module#PlacePageModule', name: 'PlacePage', segment: 'placepage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_places_places__["a" /* PlacesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_place_description_place_description__["a" /* PlaceDescriptionPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_maps_maps__["a" /* MapsPage */],
                __WEBPACK_IMPORTED_MODULE_15__components_map_map__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__components_popover_popover__["a" /* PopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_expandable_expandable__["a" /* ExpandableComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_my_places_my_places__["a" /* MyPlacesPage */],
                __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar__["a" /* NavbarComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__components_expandable_expandable__["a" /* ExpandableComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_map_map__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar__["a" /* NavbarComponent */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var config = {
    apiKey: "AIzaSyDqM3XHOVjR4IDR2vQfAyUzEnLCHgGlXPY",
    authDomain: "grensesnittdesign.firebaseapp.com",
    databaseURL: "https://grensesnittdesign.firebaseio.com",
    projectId: "grensesnittdesign",
    storageBucket: "grensesnittdesign.appspot.com",
    messagingSenderId: "687720485139"
};
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        __WEBPACK_IMPORTED_MODULE_4_firebase_app__["initializeApp"](config);
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/safetzahirovic/Desktop/test_jobb/Grensesnittdesign/myApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/safetzahirovic/Desktop/test_jobb/Grensesnittdesign/myApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_my_places_my_places__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(navCtrl) {
        this.navCtrl = navCtrl;
        this.foundUser = false;
    }
    NavbarComponent.prototype.checkIfUserTrue = function () {
        if (__WEBPACK_IMPORTED_MODULE_1_firebase_app__["auth"]().currentUser) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_my_places_my_places__["a" /* MyPlacesPage */], {}, { animate: true, direction: 'forward' });
        }
        else if (!__WEBPACK_IMPORTED_MODULE_1_firebase_app__["auth"]().currentUser) {
            alert("you have no user");
        }
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'nav-bar',template:/*ion-inline-start:"/Users/safetzahirovic/Desktop/test_jobb/Grensesnittdesign/myApp/src/components/navbar/navbar.html"*/'<!-- Generated template for the NavbarComponent component -->\n<div class="navbar">\n  <div class="svg svg-1">\n    <svg width="26px" height="27px" viewBox="0 0 26 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <defs>\n        <linearGradient x1="50%" y1="100%" x2="50%" y2="-2.48949813e-15%" id="linearGradient-1">\n          <stop stop-color="#86B2E6" offset="0%"></stop>\n          <stop stop-color="#277CAE" offset="100%"></stop>\n        </linearGradient>\n      </defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">\n        <g id="places-page" transform="translate(-86.000000, -850.000000)" stroke="url(#linearGradient-1)" stroke-width="2">\n          <g id="Group-2" transform="translate(-1.000000, 836.000000)">\n            <g id="Group">\n              <g id="BottomMenu">\n                <g id="Explore" transform="translate(88.000000, 15.000000)">\n                  <path d="M12,14 C14.208,14 16,12.432 16,10.5 C16,8.568 14.208,7 12,7 C9.792,7 8,8.568 8,10.5 C8,12.432 9.792,14 12,14 Z" id="Stroke-178"></path>\n                  <path d="M24,10.7142857 C24,19.6428571 14,25 12,25 C10,25 0,19.6428571 0,10.7142857 C0,4.79821429 5.374,0 12,0 C18.626,0 24,4.79821429 24,10.7142857 Z" id="Stroke-179"></path>\n                </g>\n              </g>\n            </g>\n          </g>\n        </g>\n      </g>\n    </svg>\n  </div>\n\n  <div class="svg svg-2">\n    <svg width="24px" height="26px" viewBox="0 0 24 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="places-page" transform="translate(-299.000000, -850.000000)" fill="#7E8184" fill-rule="nonzero">\n          <g id="Group-2" transform="translate(-1.000000, 836.000000)">\n            <g id="Group">\n              <g id="calendar-check" transform="translate(300.000000, 14.000000)">\n                <path d="M21.4285714,3.25 L18.8571429,3.25 L18.8571429,0.609375 C18.8571429,0.272847656 18.5693036,0 18.2142857,0 L16.0714286,0 C15.7164107,0 15.4285714,0.272847656 15.4285714,0.609375 L15.4285714,3.25 L8.57142857,3.25 L8.57142857,0.609375 C8.57142857,0.272847656 8.28358929,0 7.92857143,0 L5.78571429,0 C5.43069643,0 5.14285714,0.272847656 5.14285714,0.609375 L5.14285714,3.25 L2.57142857,3.25 C1.15125,3.25 0,4.34128906 0,5.6875 L0,23.5625 C0,24.9087109 1.15125,26 2.57142857,26 L21.4285714,26 C22.84875,26 24,24.9087109 24,23.5625 L24,5.6875 C24,4.34128906 22.84875,3.25 21.4285714,3.25 Z M21.1071429,23.5625 L2.89285714,23.5625 C2.71533704,23.5625 2.57142857,23.4260868 2.57142857,23.2578125 L2.57142857,8.125 L21.4285714,8.125 L21.4285714,23.2578125 C21.4285714,23.4260868 21.284663,23.5625 21.1071429,23.5625 Z M18.2759464,13.3732422 L10.65225,20.5419805 C10.4001964,20.7789766 9.99316071,20.7774531 9.74308929,20.5385273 L5.72035714,16.6944375 C5.47033929,16.4555117 5.47194643,16.0696758 5.724,15.8326289 L6.94108929,14.6882227 C7.19314286,14.4512266 7.60017857,14.45275 7.85019643,14.6917266 L10.2129107,16.9495117 L16.1631964,11.3543828 C16.41525,11.1173867 16.8222857,11.1189102 17.0723571,11.3578359 L18.2796429,12.5114844 C18.5296607,12.7504102 18.528,13.1362461 18.2759464,13.3732422 Z" id="Shape"></path>\n              </g>\n            </g>\n          </g>\n        </g>\n      </g>\n    </svg>\n  </div>\n\n</div>\n'/*ion-inline-end:"/Users/safetzahirovic/Desktop/test_jobb/Grensesnittdesign/myApp/src/components/navbar/navbar.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]) === "function" && _a || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a;
}());

//# sourceMappingURL=navbar.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpandableComponent = /** @class */ (function () {
    function ExpandableComponent(renderer) {
        this.renderer = renderer;
    }
    ExpandableComponent.prototype.ngAfterViewInit = function () {
        this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('expandWrapper', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expandWrapper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('expanded'),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expanded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('expandHeight'),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expandHeight", void 0);
    ExpandableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'expandable',template:/*ion-inline-start:"/Users/safetzahirovic/Desktop/test_jobb/Grensesnittdesign/myApp/src/components/expandable/expandable.html"*/'<!-- Generated template for the ExpandableComponent component -->\n<div #expandWrapper class=\'expand-wrapper\' [class.collapsed]="!expanded">\n    <ng-content></ng-content>\n</div>\n'/*ion-inline-end:"/Users/safetzahirovic/Desktop/test_jobb/Grensesnittdesign/myApp/src/components/expandable/expandable.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], ExpandableComponent);
    return ExpandableComponent;
}());

//# sourceMappingURL=expandable.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Startpage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__places_places__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signin_signin__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Startpage = /** @class */ (function () {
    function Startpage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ref = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["database"]().ref('Users/');
        this.storage = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["storage"]().ref().child('images/');
        this.data = {
            User: "",
            Password: "",
            databaseUser: "",
            Message: "",
            isTrue: false,
        };
        this.data.isTrue = this.navParams.get("true");
        Object.keys(this.storage).map(function (e) {
            console.log(e);
        });
    }
    Startpage.prototype.sendWithUser = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__places_places__["a" /* PlacesPage */], {
            Username: this.data.User,
            User: __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser.displayName,
        });
    };
    Startpage.prototype.userLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__signin_signin__["a" /* SigninPage */], {}, { animate: true, direction: 'forward' });
    };
    Startpage.prototype.userSignup = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */], {}, { animate: true, direction: 'forward' });
    };
    Startpage.prototype.continueAsGuest = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__places_places__["a" /* PlacesPage */], {}, { animate: true, direction: 'forward' });
    };
    Startpage.prototype.ionViewDidLoad = function () {
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signOut();
        console.log(__WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser);
        console.log('ionViewDidLoad SigninPage');
    };
    Startpage.prototype.ionViewWillEnter = function () {
        var tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.transform = 'translateY(56px)';
            });
        } // end if
    };
    Startpage.prototype.ionViewDidLeave = function () {
        var tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.transform = 'translateY(0)';
            });
        } // end if
    };
    Startpage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-startpage',template:/*ion-inline-start:"/Users/safetzahirovic/Desktop/test_jobb/Grensesnittdesign/myApp/src/pages/startpage/startpage.html"*/'<!--\n  Generated template for the SigninPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding>\n\n    <canvas style="display: none" width="300px" height="200"></canvas>\n    <!-- <ion-img class="img" src="assets/imgs/oslo-logo.png" alt="not found"></ion-img> -->\n    <video preload="true" class="mov" src="assets/vid/oslo-logo.mp4" type="video/mp4" autoplay muted playsinline>\n    </video>\n    <ion-list>\n\n      <div class="btn-container">\n        <button class="btn1" (click)="userLogin()" type="submit">Sign In</button>\n        <button class="btn2"  (click)="userSignup()" type="submit">Sign up</button>\n      </div>\n  <div id="continue" text-center (click)="continueAsGuest()">Continue as a guest</div>\n    </ion-list>\n\n\n\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/safetzahirovic/Desktop/test_jobb/Grensesnittdesign/myApp/src/pages/startpage/startpage.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
    ], Startpage);
    return Startpage;
    var _a, _b;
}());

//# sourceMappingURL=startpage.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mapbox_gl_dist_mapbox_gl_js__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mapbox_gl_dist_mapbox_gl_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mapbox_gl_dist_mapbox_gl_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MapComponent = /** @class */ (function () {
    function MapComponent(httpClient) {
        var _this = this;
        this.httpClient = httpClient;
        this.currLoc = [];
        __WEBPACK_IMPORTED_MODULE_2_mapbox_gl_dist_mapbox_gl_js___default.a.accessToken = 'pk.eyJ1Ijoic2FmZXQtMTk5MCIsImEiOiJjam16eGw1aXkyODVrM3FxeWs1NzhrNzE5In0.zS31UERwy9uupx_Ajw7nOw';
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (e) {
                _this.currLoc.push(e.coords.longitude, e.coords.latitude);
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    MapComponent.prototype.getMap = function (coords) {
        var map = new __WEBPACK_IMPORTED_MODULE_2_mapbox_gl_dist_mapbox_gl_js___default.a.Map({
            style: 'mapbox://styles/mapbox/streets-v10',
            zoom: 16,
            container: 'map',
            center: coords
        });
        //Drawing a new nav controller on the map.
        var nav = new __WEBPACK_IMPORTED_MODULE_2_mapbox_gl_dist_mapbox_gl_js___default.a.NavigationControl();
        map.addControl(nav, 'top-left');
    };
    //Drawing coordinatest on the map
    MapComponent.prototype.getRoutes = function (cords) {
        var _this = this;
        if (navigator.geolocation) {
            var map = new __WEBPACK_IMPORTED_MODULE_2_mapbox_gl_dist_mapbox_gl_js___default.a.Map({
                style: 'mapbox://styles/mapbox/streets-v10',
                zoom: 12,
                container: 'map',
                center: this.currLoc
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
        console.log(this.currLoc);
        var start = { Lat: this.currLoc[0], Long: this.currLoc[1] };
        var end = cords;
        /*var arrayPos = arr.map(arr => {
          return arr[0].split(",").map(string => {
            console.log(parseFloat(string));
            
            return parseFloat(string)
          })
        })*/
        var geometry = {
            coordinates: this.currLoc,
            type: "LineString"
        };
        var apiUrl = 'https://api.mapbox.com/directions/v5/mapbox/walking/' + start.Lat + ',' + start.Long + ';' + end[0] + ',' + end[1] + '?geometries=geojson&access_token=' + 'pk.eyJ1Ijoic2FmZXQtMTk5MCIsImEiOiJjam16eGw1aXkyODVrM3FxeWs1NzhrNzE5In0.zS31UERwy9uupx_Ajw7nOw';
        this.data = this.httpClient.get(apiUrl);
        console.log(this.data);
        this.data.subscribe(function (result) {
            console.log(result);
            console.log(geometry);
            map.addLayer({
                id: 'route',
                type: 'line',
                source: {
                    type: 'geojson',
                    data: {
                        type: 'Feature',
                        geometry: result.routes[0].geometry
                    }
                },
                paint: {
                    'line-width': 2
                }
            });
            map.addLayer({
                id: 'start',
                type: 'circle',
                source: {
                    type: 'geojson',
                    data: {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: start
                        }
                    }
                }
            });
            map.addLayer({
                id: 'end',
                type: 'circle',
                source: {
                    type: 'geojson',
                    data: {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: _this.currLoc
                        }
                    }
                }
            });
        });
    };
    MapComponent.prototype.ionViewDidLoad = function () {
    };
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'map',template:/*ion-inline-start:"/Users/safetzahirovic/Desktop/test_jobb/Grensesnittdesign/myApp/src/components/map/map.html"*/'<!-- Generated template for the MapComponent component -->\n    <div id=\'map\' style=\'z-index: 1; width: 100%; height: 100%;\'></div>\n'/*ion-inline-end:"/Users/safetzahirovic/Desktop/test_jobb/Grensesnittdesign/myApp/src/components/map/map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MapComponent);
    return MapComponent;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popover_popover__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__place_description_place_description__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PlacesPage = /** @class */ (function () {
    function PlacesPage(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.cards = [
            { placeName: "Barcode", placeCategory: "Cool Buildings", placeImages: "assets/imgs/barcode.jpg", adress: "Dronning Eufemias gate", quote: "The New City", coords: [10.756800, 59.908680], description: "As well as spectacular architecture, Barcode offers more than 30 different restaurants, stores, galleries and services. The restaurants offer food from around the world and houses"
                    + "several known galleries like Kunsthall Oslo and The Munch museum.", author1: "Wieng Zing", header1: "Amazing buildings", rating1: "assets/imgs/four.png", comment1: "Me and my wife went here last year on our" +
                    "vacation. Really interesting buildings and architecture", author2: "Laman Dong", header2: "Really cool!", rating2: "assets/imgs/five.png", comment2: "Was there yesterday with my sister." +
                    " She's really into modern building design" + "so this was a perfect fit.", author3: "Mao Zedong", header3: "Boring buildings", rating3: "assets/imgs/two.png", comment3: "It's just buildings," +
                    "not really that exciting. It's also really expensive here. They charged me like 40 kroner for a Soda!" },
            { placeName: "Royal Castle", placeCategory: "Cool Buildings", placeImages: "assets/imgs/slottet.jpeg", adress: "Slottsplassen 1", quote: "The Royalty", coords: [10.727720, 59.917060], description: "The Royal Palace is situated on a rise, the Bellevue, at one end of Oslo’s main thoroughfare, Karl Johans gate. The Royal Palace is one of the country’s most important buildings"
                    + "houses the royal family and is open to the public during the summer season.", author1: "Wieng Lee", header1: "Beautiful castle.", rating1: "assets/imgs/four.png", comment1: "Castle looked amazing and got us a lot" +
                    "of cool pictures!", author2: "Park Dong", header2: "Awesome!", rating2: "assets/imgs/five.png", comment2: "The guards were really cool!.", author3: "Lee Sin", header3: "Intimidating guards", rating3: "assets/imgs/three.png", comment3: "Even though the castle looked great, the guards scared my daughter when she got too close." +
                    "Be careful around the guards!" },
            { placeName: "Holmenkollen", placeCategory: "Nature", placeImages: "assets/imgs/holmenkollen.jpg", adress: "Kongeveien 5", quote: "Norwegian Pride", coords: [10.666290, 59.962630], description: "Holmenkollen is a Norwegian national arena built in 2011. During the winter there is an arrangement of winter games as well as the museum and the jump tower is open for the audience."
                    + "The popular zip line is open during the summer.", author1: "Ji Seong Lee", header1: "Incredible!", rating1: "assets/imgs/five.png", comment1: "Incredible looking tower, no idea how the ski jumpers do it!", author2: "Jie Shei", header2: "Great facility!", rating2: "assets/imgs/four.png", comment2: "Very well put together facility, would recommend checking it out.", author3: "Park Dre", header3: "Fascinating jump tower.", rating3: "assets/imgs/four.png", comment3: "Amazes me how the jumpers dare to jump, especially after seeing a tower in real life" },
            { placeName: "Frognerparken", placeCategory: "Parks", placeImages: "assets/imgs/frognerparken.jpg", adress: "Kirkeveien", quote: "Park of Dreams", coords: [10.704114, 59.925854], description: "Frognerparken is Oslo’s most popular recreational area, in which Vigelandsparken with over 200 famous sculptures of Gustav Vigeland is located. The park has both cafes and restaurants"
                    + "along with Frognerbadet, a popular swimming pool.", author1: "Hooi Weng", header1: "Relaxing area", rating1: "assets/imgs/four.png", comment1: "A lot of people, but still more than enough room to relaxing and enjoy the weather.", author2: "Zhong Bo", header2: "Very fun!", rating2: "assets/imgs/five.png", comment2: "My sister and I really had fun throwing frisbees back and forth!.", author3: "Xia Chin", header3: "Nothing special", rating3: "assets/imgs/two.png", comment3: "It's just a park, seen it before." },
            { placeName: "The Opera", placeCategory: "Cool Buildings", placeImages: "assets/imgs/Opera.jpg", adress: "Kirsten Flagstads plass 1", quote: "The Opera House", coords: [10.754150, 59.906570], description: "The Royal Palace is situated on a rise, the Bellevue, at one end of Oslo’s main thoroughfare, Karl Johans gate. The Royal Palace is one of the country’s most important buildings,"
                    + "houses the royal family and is open to the public during the summer season.", author1: "Tang Feng", header1: "Cool place", rating1: "assets/imgs/three.png", comment1: "The house looks great, and the space outside makes for great pictures.", author2: "Yin Min", header2: "Interesting show!", rating2: "assets/imgs/four.png", comment2: "The show had me entertained from beginning to end.", author3: "Sun Ju", header3: "Beautiful place", rating3: "assets/imgs/four.png", comment3: "The place looks amazing!" },
            { placeName: "Museum of Science", placeCategory: "Museums", placeImages: "assets/imgs/teknisk_museum.jpg", adress: "Kjelsåsveien 143", quote: "The Tech museum", coords: [10.781110, 59.966250], description: "Dive into exciting exhibitions on Norwegian medicine history, oil and gas production and music machines, get an energy boost in the hydroelectric power exhibition or find out more about"
                    + "the fascinating Norwegian history of industry.", author1: "Du Liuxian", header1: "Fun museum!", rating1: "assets/imgs/four.png", comment1: "A lot of cool and fun stuff to try out!", author2: "Zou Luoyang", header2: "Interesting museum", rating2: "assets/imgs/four.png", comment2: "A lot of interesting stuff to check out! My brother didn't want to leave.", author3: "Fan Wuying", header3: "Very cool show", rating3: "assets/imgs/four.png", comment3: "The science show they had for us was very cool and interesting! Would highly recommend checking out their shows!" },
            { placeName: "Tusenfryd", placeCategory: "Experiences", placeImages: "assets/imgs/tusenfryd.jpg", adress: "Fryds Vei 25", quote: "Place Of Fun", coords: [10.777370, 59.749930], description: "Tusenfryd is Norway’s biggest amusement park located in Ås, about 20 kilometers south of Oslo centrum. Tusenfryd has over 30 exciting attractions, games and stores."
                    + "Being customized for people of all ages, the park is a great place for tourists.", author1: "Deng He", header1: "Tons of fun!", rating1: "assets/imgs/five.png", comment1: "My kids had a really great time and tried out all of the rides.", author2: "Wen Jie", header2: "Nice and big amusement park", rating2: "assets/imgs/five.png", comment2: "Even though I dont enjoy taking rides, my friends did and had a nice time.", author3: "Zhang Zhihao", header3: "Good food and snacks", rating3: "assets/imgs/four.png", comment3: "Lots of good food and different snacks." },
            { placeName: "Sightseeing Bus", placeCategory: "Experiences", placeImages: "assets/imgs/bus.jpg", adress: "Akershusstranda 15", quote: "The Tourist Bus", coords: [10.738270, 59.905060], description: "The hop-on-hop-off sightseeing bus tour only runs in the Spring and Summer, and it is designed to get you around the best of Oslo in 18 strategically located bus stops."
                    + "Spot your favorite location from the double-decker exclusive panoramic view and just hop-off to explore further.", author1: "Zhou Tai", header1: "Great consept", rating1: "assets/imgs/three.png", comment1: "Very good way to check out stuff in the city.", author2: "Lang Bai", header2: "Comfortable seats", rating2: "assets/imgs/four.png", comment2: "The bus had very comfortable seats.", author3: "Xing Qing", header3: "Polite driver", rating3: "assets/imgs/four.png", comment3: "The bus driver was very polite and easy to converse with" },
            { placeName: "Historic museum", placeCategory: "Museums", placeImages: "assets/imgs/n_museum.jpg", adress: "Sars' gate 1", quote: "Nature Freak", coords: [10.771080, 59.919791], description: "The museum of natural history on Tøyen in Oslo is part of the university of Oslo and houses the university’s natural history collections and botanical garden."
                    + "The museum has the biggest collection of natural sciences objects.", author1: "Jin Huang", header1: "Cool exhibits", rating1: "assets/imgs/four.png", comment1: "Very cool exhibits.", author2: "Zhao Jingyi", header2: "Clean museum", rating2: "assets/imgs/four.png", comment2: "The museum was clean and smelled nice, which i value a lot!", author3: "Peng He", header3: "Garden was cool", rating3: "assets/imgs/three.png", comment3: "Enjoyed checking out the garden!" },
            { placeName: "Vigeland Park", placeCategory: "Parks", placeImages: "assets/imgs/vigeland.jpg", adress: "Nobels gate 32", quote: "Sculpture Madness", coords: [10.700963, 59.927022], description: "The Vigeland facility, originally called “Tørtberg-anlegget”,  is a facility of sculptures in Frognerparken. The collection of sculptures was named after their creator,"
                    + "Gustav Vigeland, created from the 1920s to his death in 1943. It is one of Norway’s most visited attraction.", author1: "Guo Ping", header1: "Funny sculptures", rating1: "assets/imgs/four.png", comment1: "Sculptures looked funny, very well made.", author2: "Gu De", header2: "Interesting artwork", rating2: "assets/imgs/four.png", comment2: "Impressive work from Vigeland", author3: "Teng Yan", header3: "Cool artwork", rating3: "assets/imgs/three.png", comment3: "Cool artwork." },
            { placeName: "Nobel Peacecenter", placeCategory: "Museums", placeImages: "assets/imgs/the-nobel-peace-center.jpg", adress: "Brynjulf Bulls plass 1", quote: "Palace of Peace", coords: [10.730253, 59.911818], description: "Nobels Peacecenter is the museum for Nobels peace prize that conveys information and knowledge about Nobels peace prize, Alfred Nobel and the winners of the prize"
                    + "and their work through permanent and changing exhibitions.", author1: "Gu Chin", header1: "Interesting museum", rating1: "assets/imgs/three.png", comment1: "Cool to visit the center.", author2: "Xia Guanting", header2: "What a man mr. Nobel ", rating2: "assets/imgs/three.png", comment2: "Nobel must have been a great man", author3: "Zhuan Jin", header3: "Easy to navigate", rating3: "assets/imgs/four.png", comment3: "Easy to navigate through the museum." },
            { placeName: "Sognsvann", placeCategory: "Nature", placeImages: "assets/imgs/sognsvann.jpg", adress: "Sognsvann", quote: "The Cooldown", coords: [10.727275, 59.975974], description: "Sognsvann is a swimming and hiking facility. The trail around Sognsvann is one of Norway’s most popular hiking trails, the trail is about 3,5km facilitated for people"
                    + "with disabilities or other needs. It is also possible to go for a refreshing swim in the lake.", author1: "Shao Shui", header1: "Refreshing water", rating1: "assets/imgs/four.png", comment1: "Swim was very refreshing, but cold ", author2: "Zhong Shu", header2: "Cold water", rating2: "assets/imgs/three.png", comment2: "Water as cold, but was very nice", author3: "Gu Zan", header3: "Beautiful beach", rating3: "assets/imgs/five.png", comment3: "Beach was very beautiful and relaxing." },
            { placeName: "Paradise bay", placeCategory: "Nature", placeImages: "assets/imgs/paradis.png", adress: "Paradisbukta", quote: "Paradise On Earth", coords: [10.665449, 59.902791], description: "Paradisbukta is a great place to go for a swim with a beautiful beach. With wonderful hiking trails covering the most of Bygdøy, there is plenty of options for your hiking route."
                    + "The swimming area is equipped with public toilets, benches, swim rafts etc.", author1: "Lai Qiu", header1: "Very nice", rating1: "assets/imgs/four.png", comment1: "Perfect for relaxing and letting the kids run around.", author2: "He Huang", header2: "Nice trails", rating2: "assets/imgs/three.png", comment2: "Nice to walk in the hiking trails", author3: "Xu Fang", header3: "Nice combo", rating3: "assets/imgs/five.png", comment3: "Combination between hiking trails and swimming I value very much." }
        ];
        this.counter = 0;
    }
    PlacesPage.prototype.initializeItems = function () {
        this.cards = [
            { placeName: "Barcode", placeCategory: "Cool Buildings", placeImages: "assets/imgs/barcode.jpg", adress: "Dronning Eufemias gate", quote: "The New City", coords: [10.756800, 59.908680], description: "As well as spectacular architecture, Barcode offers more than 30 different restaurants, stores, galleries and services. The restaurants offer food from around the world and houses"
                    + "several known galleries like Kunsthall Oslo and The Munch museum.", author1: "Wieng Zing", header1: "Amazing buildings", rating1: "assets/imgs/four.png", comment1: "Me and my wife went here last year on our" +
                    "vacation. Really interesting buildings and architecture", author2: "Laman Dong", header2: "Really cool!", rating2: "assets/imgs/five.png", comment2: "Was there yesterday with my sister." +
                    " She's really into modern building design" + "so this was a perfect fit.", author3: "Mao Zedong", header3: "Boring buildings", rating3: "assets/imgs/two.png", comment3: "It's just buildings," +
                    "not really that exciting. It's also really expensive here. They charged me like 40 kroner for a Soda!" },
            { placeName: "Royal Castle", placeCategory: "Cool Buildings", placeImages: "assets/imgs/slottet.jpeg", adress: "Slottsplassen 1", quote: "The Royalty", coords: [10.727720, 59.917060], description: "The Royal Palace is situated on a rise, the Bellevue, at one end of Oslo’s main thoroughfare, Karl Johans gate. The Royal Palace is one of the country’s most important buildings"
                    + "houses the royal family and is open to the public during the summer season.", author1: "Wieng Lee", header1: "Beautiful castle.", rating1: "assets/imgs/four.png", comment1: "Castle looked amazing and got us a lot" +
                    "of cool pictures!", author2: "Park Dong", header2: "Awesome!", rating2: "assets/imgs/five.png", comment2: "The guards were really cool!.", author3: "Lee Sin", header3: "Intimidating guards", rating3: "assets/imgs/three.png", comment3: "Even though the castle looked great, the guards scared my daughter when she got too close." +
                    "Be careful around the guards!" },
            { placeName: "Holmenkollen", placeCategory: "Nature", placeImages: "assets/imgs/holmenkollen.jpg", adress: "Kongeveien 5", quote: "Norwegian Pride", coords: [10.666290, 59.962630], description: "Holmenkollen is a Norwegian national arena built in 2011. During the winter there is an arrangement of winter games as well as the museum and the jump tower is open for the audience."
                    + "The popular zip line is open during the summer.", author1: "Ji Seong Lee", header1: "Incredible!", rating1: "assets/imgs/five.png", comment1: "Incredible looking tower, no idea how the ski jumpers do it!", author2: "Jie Shei", header2: "Great facility!", rating2: "assets/imgs/four.png", comment2: "Very well put together facility, would recommend checking it out.", author3: "Park Dre", header3: "Fascinating jump tower.", rating3: "assets/imgs/four.png", comment3: "Amazes me how the jumpers dare to jump, especially after seeing a tower in real life" },
            { placeName: "Frognerparken", placeCategory: "Parks", placeImages: "assets/imgs/frognerparken.jpg", adress: "Kirkeveien", quote: "Park of Dreams", coords: [10.704114, 59.925854], description: "Frognerparken is Oslo’s most popular recreational area, in which Vigelandsparken with over 200 famous sculptures of Gustav Vigeland is located. The park has both cafes and restaurants"
                    + "along with Frognerbadet, a popular swimming pool.", author1: "Hooi Weng", header1: "Relaxing area", rating1: "assets/imgs/four.png", comment1: "A lot of people, but still more than enough room to relaxing and enjoy the weather.", author2: "Zhong Bo", header2: "Very fun!", rating2: "assets/imgs/five.png", comment2: "My sister and I really had fun throwing frisbees back and forth!.", author3: "Xia Chin", header3: "Nothing special", rating3: "assets/imgs/two.png", comment3: "It's just a park, seen it before." },
            { placeName: "The Opera", placeCategory: "Cool Buildings", placeImages: "assets/imgs/Opera.jpg", adress: "Kirsten Flagstads plass 1", quote: "The Opera House", coords: [10.754150, 59.906570], description: "The Royal Palace is situated on a rise, the Bellevue, at one end of Oslo’s main thoroughfare, Karl Johans gate. The Royal Palace is one of the country’s most important buildings,"
                    + "houses the royal family and is open to the public during the summer season.", author1: "Tang Feng", header1: "Cool place", rating1: "assets/imgs/three.png", comment1: "The house looks great, and the space outside makes for great pictures.", author2: "Yin Min", header2: "Interesting show!", rating2: "assets/imgs/four.png", comment2: "The show had me entertained from beginning to end.", author3: "Sun Ju", header3: "Beautiful place", rating3: "assets/imgs/four.png", comment3: "The place looks amazing!" },
            { placeName: "Museum of Science", placeCategory: "Museums", placeImages: "assets/imgs/teknisk_museum.jpg", adress: "Kjelsåsveien 143", quote: "The Tech museum", coords: [10.781110, 59.966250], description: "Dive into exciting exhibitions on Norwegian medicine history, oil and gas production and music machines, get an energy boost in the hydroelectric power exhibition or find out more about"
                    + "the fascinating Norwegian history of industry.", author1: "Du Liuxian", header1: "Fun museum!", rating1: "assets/imgs/four.png", comment1: "A lot of cool and fun stuff to try out!", author2: "Zou Luoyang", header2: "Interesting museum", rating2: "assets/imgs/four.png", comment2: "A lot of interesting stuff to check out! My brother didn't want to leave.", author3: "Fan Wuying", header3: "Very cool show", rating3: "assets/imgs/four.png", comment3: "The science show they had for us was very cool and interesting! Would highly recommend checking out their shows!" },
            { placeName: "Tusenfryd", placeCategory: "Experiences", placeImages: "assets/imgs/tusenfryd.jpg", adress: "Fryds Vei 25", quote: "Place Of Fun", coords: [10.777370, 59.749930], description: "Tusenfryd is Norway’s biggest amusement park located in Ås, about 20 kilometers south of Oslo centrum. Tusenfryd has over 30 exciting attractions, games and stores."
                    + "Being customized for people of all ages, the park is a great place for tourists.", author1: "Deng He", header1: "Tons of fun!", rating1: "assets/imgs/five.png", comment1: "My kids had a really great time and tried out all of the rides.", author2: "Wen Jie", header2: "Nice and big amusement park", rating2: "assets/imgs/five.png", comment2: "Even though I dont enjoy taking rides, my friends did and had a nice time.", author3: "Zhang Zhihao", header3: "Good food and snacks", rating3: "assets/imgs/four.png", comment3: "Lots of good food and different snacks." },
            { placeName: "Sightseeing Bus", placeCategory: "Experiences", placeImages: "assets/imgs/bus.jpg", adress: "Akershusstranda 15", quote: "The Tourist Bus", coords: [10.738270, 59.905060], description: "The hop-on-hop-off sightseeing bus tour only runs in the Spring and Summer, and it is designed to get you around the best of Oslo in 18 strategically located bus stops."
                    + "Spot your favorite location from the double-decker exclusive panoramic view and just hop-off to explore further.", author1: "Zhou Tai", header1: "Great consept", rating1: "assets/imgs/three.png", comment1: "Very good way to check out stuff in the city.", author2: "Lang Bai", header2: "Comfortable seats", rating2: "assets/imgs/four.png", comment2: "The bus had very comfortable seats.", author3: "Xing Qing", header3: "Polite driver", rating3: "assets/imgs/four.png", comment3: "The bus driver was very polite and easy to converse with" },
            { placeName: "Historic museum", placeCategory: "Museums", placeImages: "assets/imgs/n_museum.jpg", adress: "Sars' gate 1", quote: "Nature Freak", coords: [10.771080, 59.919791], description: "The museum of natural history on Tøyen in Oslo is part of the university of Oslo and houses the university’s natural history collections and botanical garden."
                    + "The museum has the biggest collection of natural sciences objects.", author1: "Jin Huang", header1: "Cool exhibits", rating1: "assets/imgs/four.png", comment1: "Very cool exhibits.", author2: "Zhao Jingyi", header2: "Clean museum", rating2: "assets/imgs/four.png", comment2: "The museum was clean and smelled nice, which i value a lot!", author3: "Peng He", header3: "Garden was cool", rating3: "assets/imgs/three.png", comment3: "Enjoyed checking out the garden!" },
            { placeName: "Vigeland Park", placeCategory: "Parks", placeImages: "assets/imgs/vigeland.jpg", adress: "Nobels gate 32", quote: "Sculpture Madness", coords: [10.700963, 59.927022], description: "The Vigeland facility, originally called “Tørtberg-anlegget”,  is a facility of sculptures in Frognerparken. The collection of sculptures was named after their creator,"
                    + "Gustav Vigeland, created from the 1920s to his death in 1943. It is one of Norway’s most visited attraction.", author1: "Guo Ping", header1: "Funny sculptures", rating1: "assets/imgs/four.png", comment1: "Sculptures looked funny, very well made.", author2: "Gu De", header2: "Interesting artwork", rating2: "assets/imgs/four.png", comment2: "Impressive work from Vigeland", author3: "Teng Yan", header3: "Cool artwork", rating3: "assets/imgs/three.png", comment3: "Cool artwork." },
            { placeName: "Nobel Peacecenter", placeCategory: "Museums", placeImages: "assets/imgs/the-nobel-peace-center.jpg", adress: "Brynjulf Bulls plass 1", quote: "Palace of Peace", coords: [10.730253, 59.911818], description: "Nobels Peacecenter is the museum for Nobels peace prize that conveys information and knowledge about Nobels peace prize, Alfred Nobel and the winners of the prize"
                    + "and their work through permanent and changing exhibitions.", author1: "Gu Chin", header1: "Interesting museum", rating1: "assets/imgs/three.png", comment1: "Cool to visit the center.", author2: "Xia Guanting", header2: "What a man mr. Nobel ", rating2: "assets/imgs/three.png", comment2: "Nobel must have been a great man", author3: "Zhuan Jin", header3: "Easy to navigate", rating3: "assets/imgs/four.png", comment3: "Easy to navigate through the museum." },
            { placeName: "Sognsvann", placeCategory: "Nature", placeImages: "assets/imgs/sognsvann.jpg", adress: "Sognsvann", quote: "The Cooldown", coords: [10.727275, 59.975974], description: "Sognsvann is a swimming and hiking facility. The trail around Sognsvann is one of Norway’s most popular hiking trails, the trail is about 3,5km facilitated for people"
                    + "with disabilities or other needs. It is also possible to go for a refreshing swim in the lake.", author1: "Shao Shui", header1: "Refreshing water", rating1: "assets/imgs/four.png", comment1: "Swim was very refreshing, but cold ", author2: "Zhong Shu", header2: "Cold water", rating2: "assets/imgs/three.png", comment2: "Water as cold, but was very nice", author3: "Gu Zan", header3: "Beautiful beach", rating3: "assets/imgs/five.png", comment3: "Beach was very beautiful and relaxing." },
            { placeName: "Paradise bay", placeCategory: "Nature", placeImages: "assets/imgs/paradis.png", adress: "Paradisbukta", quote: "Paradise On Earth", coords: [10.665449, 59.902791], description: "Paradisbukta is a great place to go for a swim with a beautiful beach. With wonderful hiking trails covering the most of Bygdøy, there is plenty of options for your hiking route."
                    + "The swimming area is equipped with public toilets, benches, swim rafts etc.", author1: "Lai Qiu", header1: "Very nice", rating1: "assets/imgs/four.png", comment1: "Perfect for relaxing and letting the kids run around.", author2: "He Huang", header2: "Nice trails", rating2: "assets/imgs/three.png", comment2: "Nice to walk in the hiking trails", author3: "Xu Fang", header3: "Nice combo", rating3: "assets/imgs/five.png", comment3: "Combination between hiking trails and swimming I value very much." }
        ];
    };
    //Method of searchbar
    PlacesPage.prototype.getItems = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim != '') {
            this.cards = this.cards.filter(function (item) {
                return (item.placeName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    //Method for filter button
    PlacesPage.prototype.presentPopover = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_popover_popover__["a" /* PopoverComponent */]);
        popover.present({
            ev: myEvent
        }).catch(function (error) { return alert("Something went wrong"); });
        popover.onDidDismiss(function (popoverData) {
            if (popoverData != null) {
                _this.initializeItems();
                var clickValue_1 = popoverData.item;
                if (clickValue_1 !== "All") {
                    _this.cards = _this.cards.filter(function (item) {
                        return (item.placeCategory.toLowerCase().indexOf(clickValue_1.toLowerCase()) > -1);
                    });
                }
                else {
                    return _this.cards.forEach(function (item) {
                        return item;
                    });
                }
            }
        });
    };
    PlacesPage.prototype.getInformation = function (event) {
        // do something with the id...
        var target = event.currentTarget.children;
        var arr = [];
        for (var index = 0; index < this.cards.length; index++) {
            var element = this.cards[index].placeName;
            if (element === event.currentTarget.children.item(0).innerHTML) {
                arr.push(this.cards[index]);
            }
        }
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__place_description_place_description__["a" /* PlaceDescriptionPage */], {
            Data: arr,
        }, { animate: true, direction: 'forward' });
    };
    PlacesPage.prototype.ionViewDidEnter = function () {
        this.initializeItems();
        console.log(__WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser);
    };
    PlacesPage.prototype.ionViewWillLeave = function () {
    };
    PlacesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-places',template:/*ion-inline-start:"/Users/safetzahirovic/Desktop/test_jobb/Grensesnittdesign/myApp/src/pages/places/places.html"*/'<!--\n  Generated template for the PlacesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<!-- Cards for different attractions -->\n\n\n\n\n<ion-content class ="card-background-page">\n  <img id="logo" src="assets/imgs/logo.png"/>\n  <div class="search-container">\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    <img id="filter" (click)="presentPopover()" src="assets/imgs/filter.png">\n  </div>\n\n  <div id="places-to-visit">Places to Visit</div>\n  <ion-card (click)="getInformation($event)" *ngFor="let card of cards; let i = index">\n    <div class="card-title">{{cards[i].placeName}}</div>\n    <div class="card-category">{{cards[i].placeCategory}}</div>\n    <img src= {{cards[i].placeImages}} />\n  </ion-card>\n\n\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/safetzahirovic/Desktop/test_jobb/Grensesnittdesign/myApp/src/pages/places/places.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */]) === "function" && _c || Object])
    ], PlacesPage);
    return PlacesPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=places.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__places_places__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ref = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["database"]().ref('Users/');
        this.storage = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["storage"]().ref().child('images/');
        this.data = {
            User: "",
            Password: "",
            databaseUser: "",
            Message: "",
            isTrue: false,
        };
        this.data.isTrue = this.navParams.get("true");
        Object.keys(this.storage).map(function (e) {
            console.log(e);
        });
    }
    SigninPage.prototype.userLogin = function () {
        var _this = this;
        console.log(this.user);
        console.log(this.password);
        var databaseUser = this.data.databaseUser;
        var Message = this.data.Message;
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithEmailAndPassword(this.user, this.password).then(function () {
            _this.sendWithUser();
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            Message = "You don't have a user";
            console.log(error);
            // ...
        });
    };
    SigninPage.prototype.sendWithUser = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__places_places__["a" /* PlacesPage */], {
            Username: this.data.User,
            User: __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().currentUser.displayName,
        });
    };
    SigninPage.prototype.userSignup = function () {
        console.log("Safet");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage.prototype.continueAsGuest = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__places_places__["a" /* PlacesPage */]);
    };
    SigninPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SigninPage');
    };
    SigninPage.prototype.ionViewWillEnter = function () {
        var tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.display = 'none';
            });
        } // end if
    };
    SigninPage.prototype.ionViewDidLeave = function () {
        var tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.display = 'flex';
            });
        } // end if
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/Users/safetzahirovic/Desktop/test_jobb/Grensesnittdesign/myApp/src/pages/signin/signin.html"*/'<!--\n  Generated template for the SigninPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content class="no-scroll" padding>\n\n    <canvas style="display: none" width="300px" height="200"></canvas>\n    <!-- <ion-img class="img" src="assets/imgs/oslo-logo.png" alt="not found"></ion-img> -->\n    <video preload="true" class="mov" src="assets/vid/norwegian.mp4" type="video/mp4" autoplay loop muted playsinline>\n    </video>\n    <form>\n    <ion-list>\n        <ion-item>\n            <ion-label >Username</ion-label>\n            <ion-input type="text" [(ngModel)]="this.user" placeholder="Username"  [ngModelOptions]="{standalone: true}" required=""></ion-input>\n          </ion-item>\n        <ion-item>\n            <ion-label>Password</ion-label>\n            <ion-input type="password" [(ngModel)]="this.password" placeholder="Password" [ngModelOptions]="{standalone: true}" required=""></ion-input>\n          </ion-item>\n        <div class="forgot-btn" text-center (click)="resetPassword()">Forgot password?</div>\n        <div id="button-container">\n          <button class="btn2" (click)="userLogin()" color="primary" type="submit">Sign In</button>\n        </div>\n        <div class="acc-btn" text-center (click)="resetPassword()">Dont have an account yet? <br>\n          Sign up here</div>\n      </ion-list>\n    </form>\n\n  </ion-content>\n\n  \n  '/*ion-inline-end:"/Users/safetzahirovic/Desktop/test_jobb/Grensesnittdesign/myApp/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
    ], SigninPage);
    return SigninPage;
    var _a, _b;
}());

//# sourceMappingURL=signin.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map