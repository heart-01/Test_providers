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

  getByID(id){ //ฟังชั่นกรองข้อมูลจากรหัส id
    for(var i=0;i<(this.data).length;.i++){ //รับค่า id และ loop เช็คค่าที่เข้ามาว่ามากี่ข้อมูล

      if(this.data[i].code==id){
        return Promise.resolve(this.data[i]); 
      }//เปรียบเทียบว่า code ที่ส่งเข้ามานั้นเท่ากันกับ id ของข้อมูลหรือไม่ถ้าเท่ากันถึงจะส่งข้อมูลของ id กลับไป

    }
  }

}
