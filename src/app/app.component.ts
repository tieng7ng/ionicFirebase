import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { firebaseConfig } from './credentials';


import { HomePage } from '../pages/home/home';
import { AuthPage } from '../pages/auth/auth';
import { OptionsPage } from '../pages/options/options';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  //=====
  // Pages
  tabsPage: any = TabsPage;
  optionsPage: any = OptionsPage;
  authPage: any = AuthPage;
  // Pages
  //=====

  isAuth: boolean;

  @ViewChild('content') content: NavController;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menuCtrl: MenuController
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      //=====
      // Initialize Firebase
      let config = {
        apiKey: "AIzaSyD76lsd6DVIMiIpLJsVQX4X0_uOkGHdQrM",
        authDomain: "firstproject-998a2.firebaseapp.com",
        databaseURL: "https://firstproject-998a2.firebaseio.com",
        projectId: "firstproject-998a2",
        storageBucket: "firstproject-998a2.appspot.com",
        messagingSenderId: "43949308687"
      };

      firebase.initializeApp(config);
      // Initialize Firebase
      //=====

      firebase.auth().onAuthStateChanged(
        (user) => {
          if (user) {
            this.isAuth = true;
            this.content.setRoot(TabsPage);
          } else {
            this.isAuth = false;
            this.content.setRoot(AuthPage, { mode: 'connect' });
          }
        }
      );
    });
  }

  /**
   * used by menu for display plage
   * @param page : display page
   * @param data 
   */
  onNavigate(page: any, data?: {}) {
    console.log('>>> app component - onNavigate');
    this.content.setRoot(page, data ? data : null);
    this.menuCtrl.close();
  }


  onDisconnect() {
    firebase.auth().signOut();
    this.menuCtrl.close();
  }
}

