import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CustomerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CustomerProvider {
  
  data : any; //สร้างตัวแปร data ชนิดข้อมูลแบบ any

  constructor(public http: HttpClient) {
    
    this.data=[ 
      {id:1,name:"Siwat",image:"contact_profile1.jpg",detail:"Test Detail1"},
      {id:3,name:"Tanapol",image:"contact_profile2.jpg",detail:"Test Detail3"},
      {id:2,name:"Premrutai",image:"contact_profile3.jpg",detail:"Test Detail2"},
      {id:4,name:"Yanisa",image:"contact_profile4.png",detail:"Test Detail4"}
    ];


  }
  
  loadAll(){   
    return Promise.resolve(this.data);  //ฟังชั่นการส่งค่าข้อมูลแบบ Promise
  }

}
