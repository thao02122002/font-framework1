import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  name = 'thaovtp'

  // dữ liệu mảng
   students = [
     {
       id: '16945',
       name: 'thaovtp',
       status: 0
     },
     {
      id: '16946',
      name: 'khaipv',
      status: 1
    }
   ]

   teachers = [
     {
       id: '123',
       name: "loan",
       age: 35,
       gender: 0,
       avatar : 'https://static.wixstatic.com/media/8a8033_a738085f564f4d43aa34edebaebae5b5~mv2_d_1600_1600_s_2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg',
       status: 1
     },
     {
      id: '124',
      name: "nhật",
      age: 42,
      gender: 1,
      avatar : 'https://static.wixstatic.com/media/8a8033_a738085f564f4d43aa34edebaebae5b5~mv2_d_1600_1600_s_2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg',
      status: 0
    },
    {
      id: '15',
      name: "minh",
      age: 35,
      gender: 0,
      avatar : 'https://static.wixstatic.com/media/8a8033_a738085f564f4d43aa34edebaebae5b5~mv2_d_1600_1600_s_2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg',
      status: 0
    }
   ]
   studentName = "Thaovtp"
   identity = "PH16945";
   //định nghĩ hàm khi click vào clickH1 ở bên file html
   schoolName = ''
   clickH1() {
      this.schoolName = 'Poly'
      
   }
   // định nghĩa hàm để click nút ẩn hiện bảng
   showStatus = true
   changeStatusTable() {
     // đảo giá trị
        this.showStatus = !this.showStatus;
   }

   //định nghĩa hàm khi thay đổi nội dung input
   inputValue = 'thaovtp'
   changeInput(event: any) {
    this.inputValue =  event.target.value;
      
   }
}
