import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductDetailsPage } from '../product-details/product-details';

@Component({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {
  }

  goToOtherPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(ProductDetailsPage);
  }
}
