import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact'; // ถ้าจะให้ลิงก์ไปหน้าอื่นต้อง import หน้านั้นเข้ามาด้วย

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoContact(){
    this.navCtrl.push(ContactPage);
  }

}
