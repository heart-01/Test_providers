import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomerProvider } from './../../providers/customer/customer'; //import provider

/**
 * Generated class for the CustomerDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-detail',
  templateUrl: 'customer-detail.html',
})
export class CustomerDetailPage {

  details:any=0; //ประกาศตัวแปร detail ชนิด any
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public data:CustomerProvider) {
    // public data:CustomerProvider ประกาศใช้งานตัวแปรและการรับค่าจาก provider ซึ่งในที่นี้จัดเก็บไว้ในตัวแปร data
    this.data.getByID(this.navParams.get('code')).then(result=>{this.details=result;});
    /*รับตัวแปรจากหน้า contact ที่ส่งมา และ เรียกใช้ฟังชั่น getByID โดยแนบค่าตัวแปรที่ได้รับมาด้วยวิธี get จากตัวแปร code 
      ซึ่งฟังชั่นจะทำการเลือกข้อมูลจาก provider ที่มีรหัสตรงกับตัวแปร code และมาเก็บไง้ในตัวแปร detail*/

  }


}
