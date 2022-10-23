import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  usuario = '';
  senha = '';
  telefone = '';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  salvar(){

    console.log('usuario', this.usuario);
    console.log('senha', this.senha);
    console.log('telefone', this.telefone);
  }
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Salvar seus dados?',
      message: 'Quer realmente salvar seus dados?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}
