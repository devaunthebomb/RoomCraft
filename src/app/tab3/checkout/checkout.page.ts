import { Component, OnInit } from '@angular/core';

//control
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular'; 
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  constructor(public toastCrtl: ToastController, public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async openToast() {
    const toast = this.toastCrtl.create({
      message: "Item Purchased",
      duration: 3000
    });
    (await toast).present()
  }

  async confirmPurchase() { 
    const confirm = await this.alertCtrl.create({ 
    header: 'Confirmation', 
    message: 'Are you sure you want to purchase this item', 
    buttons: [
    { 
    text: 'Yes',
    role: 'Ok', 
    handler: () => {  
      this.openToast()
    } 
    }, 
    { 
    text: 'Cancel', 
    role: 'Cancel',
    handler: () => { 
    console.log('Purchase Cancelled.'); 
    } 
    } 
    ] 
    }); 
    await confirm.present(); 
    } 

}
