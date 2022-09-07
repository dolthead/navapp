import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { InfoPage } from '../info/info.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  rowClicked: number;

  constructor(private router: Router, private modal: ModalController) {}

  goToAbout() {
    this.router.navigate(['about']);
  }

  async openInfo() {
    this.rowClicked = undefined;
    const infoModal = await this.modal.create({ component: InfoPage });
    infoModal.present();
    const { data } = await infoModal.onWillDismiss();
    this.rowClicked = data?.value;
  }

}
