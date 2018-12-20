import { Component } from '@angular/core';
import { IonicPage, ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(private toastCtrl: ToastController) {
  }

  toastAlert() {
    let toast = this.toastCtrl.create({
      message: 'Algun campo ingresado no es válido, intentalo nuevamente',
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'OK',
      cssClass: 'toast__alert'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  toastWarning() {
    let toast = this.toastCtrl.create({
      message: 'Solo podrás enviar 1 opinión por día, inténtalo mañana',
      position: 'middle',
      showCloseButton: true,
      closeButtonText: 'OK',
      cssClass: 'toast__warning'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
  
  toastNotifications() {
    let toast = this.toastCtrl.create({
      message: 'Tienes un abono de $120.000',
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: 'OK',
      cssClass: 'toast__notifications'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
