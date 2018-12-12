import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SingleAppareilPage } from '../single-appareil/single-appareil';

/**
 * Generated class for the AppareilsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-appareils',
  templateUrl: 'appareils.html',
})
export class AppareilsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppareilsPage');
  }

  onLoadAppareil(name: string) {
    this.navCtrl.push(SingleAppareilPage, {appareilName: name});
  }

}
