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
       id: 123,
       name: "loan",
       age: 35,
       gender: 0,
       avatar : 'https://static.wixstatic.com/media/8a8033_a738085f564f4d43aa34edebaebae5b5~mv2_d_1600_1600_s_2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg',
       status: 1
     },
     {
      id: 124,
      name: "nhật",
      age: 42,
      gender: 1,
      avatar : 'https://static.wixstatic.com/media/8a8033_a738085f564f4d43aa34edebaebae5b5~mv2_d_1600_1600_s_2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg',
      status: 0
    },
    {
      id: 15,
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
// định nghĩa hàm trong form
  inputValues = {
    
    name: '',
    age: '',
    gender : '0',
    avatar: '',
    status: '0'

  }
  //  onInputName(event: any, info: string) {
  //   this.inputValues.name = event.target.value;
     
  //  }
  //  onInputAge(event: any, info: string) {
  //   this.inputValues.age = event.target.value;

  //  }

  // key: 'name'|'age' => key chỉ được là giá trị của name hoặc age
   onInput(event:any, key: 'name'|'age'|'avatar'|'gender'|'status') {
     this.inputValues[key] = event.target.value;
   }
   // sự kiện click vào nút submit
   onSubmit(){
    console.log(this.inputValues);
    //thêm dữ liệu vừa thao tác vs form vào mảng teachers
    this.teachers.push({...this.inputValues, 
      age:+this.inputValues.age,// đưa age từ chuỗi về số
      gender: +this.inputValues.gender,
      status : +this.inputValues.status,
    id: this.teachers.length +1});
    // cập nhật lại gt cho input ở form
    this.inputValues = {
      name: '',
      age: '',
      gender: '0',
      avatar:'',
      status: '0'
    }
   }
}
