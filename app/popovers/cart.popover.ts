import {PopoverController,ViewController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'build/popovers/cartPopOver.html'
})
export class PopoverPage {
  constructor(private viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }
}