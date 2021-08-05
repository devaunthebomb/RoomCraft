import { Component, OnInit } from '@angular/core';

import { ToastController } from '@ionic/angular';  
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  constructor(public toastCrtl: ToastController) { }

  ngOnInit() {
  }

  async openToast() {
    const toast = this.toastCrtl.create({
      message: "Item Purchased",
      duration: 2000
    });
    (await toast).present()
  }

}
