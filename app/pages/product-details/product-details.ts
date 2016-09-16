import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ProductDetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/product-details/product-details.html',
})
export class ProductDetailsPage {

  constructor(private navCtrl: NavController) {

  }

  expandDesc() {
    alert("Hello");
  }

}
