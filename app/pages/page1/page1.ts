import { Component } from '@angular/core';
import {PopoverController,ViewController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ProductDetailsPage } from '../product-details/product-details';
import {product} from '../interfaces/product';
import {PopoverPage} from '../../Popovers/cart.popover';
import { AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
  products : Array<product>;
  constructor(public navCtrl: NavController,private popoverCtrl: PopoverController,private alertCtrl: AlertController) {
    this.products = [
      {productId:1,productName:'Test Product',productDesc:'This is test Product.',productPrice:'$500'},
      {productId:2,productName:'Test Product 2',productDesc:'This is test Product 2.',productPrice:'$500'},
      {productId:3,productName:'Test Product 3',productDesc:'This is test Product 3.',productPrice:'$500'},
      {productId:4,productName:'Test Product 4',productDesc:'This is test Product 4.',productPrice:'$500'},
      {productId:3,productName:'Test Product 3',productDesc:'This is test Product 3.',productPrice:'$500'},
      {productId:4,productName:'Test Product 4',productDesc:'This is test Product 4.',productPrice:'$500'}
    ]
  }

  openCartView(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage,{},{'cssClass':'cartPopOverOuter'});
    popover.present({
      ev: myEvent
    });
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    //this.navCtrl.push(ProductDetailsPage);
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Congrats!',
      subTitle: '<div class="popupDiv"></div><div class="popupDivText">Thank You for shopping.</div>',
      buttons: ['OKAY'],
      cssClass : "popupClass"
    });
    alert.present();
  }
}
