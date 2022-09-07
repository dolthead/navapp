import { IonicModule, ModalController } from '@ionic/angular';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InfoPage implements OnInit {

  returnValue: string;

  constructor(private modal: ModalController) { }

  ngOnInit() {
  }

  repeater(n: number) { return new Array(n); }

  closeModal() {
    this.modal.dismiss();
  }

  clicked(i: number) {
    this.modal.dismiss({ value: i+1 });
  }

}
