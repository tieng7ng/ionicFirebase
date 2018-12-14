import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { Appareil } from '../../models/Appareil';
import { AppareilsService } from '../../services/appareils.service';


@Component({
  selector: 'page-single-appareil',
  templateUrl: 'single-appareil.html',
})

export class SingleAppareilPage {

  public index: number;
  public appareil: Appareil;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public appareilsService: AppareilsService,
  ) {
  }

  ngOnInit() {
    console.log('>>> single-appareil', this.navParams.get('appareil'));
    this.index = this.navParams.get('index');
    this.appareil = this.appareilsService.appareilsList[this.index];
  }

  /**
   * close modal
   */
  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleAppareil() {
    this.appareil.isOn = !this.appareil.isOn;
  }
}
