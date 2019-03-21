import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomerProvider } from '../../providers/customer/customer'; //นำเข้า ProviderCustomer
import { CustomerDetailPage } from '../customer-detail/customer-detail';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  Customer:any=0; //สร้างตัวแปร Customer ชนิด any เท่ากับ 0; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public data:CustomerProvider) {
    //ดึงข้อมูล data จากหน้า CustomerProvider
    this.data.loadAll().then(result=>{this.Customer=result});
    //เรียกใช้ฟังชั่น loadAll ผลที่ได้จากการส่งค่ากลับมาจะอยู่ในตัวแปร Customer
  }

  gotoCustomerDetail(id){
    this.navCtrl.push(CustomerDetailPage,{code:id});
    //เปิดหน้า CustomerDetail และ แนบ id ไปด้วย
  }


}
