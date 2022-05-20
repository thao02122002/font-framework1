import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inputValues = {
    id: 0,
    name: '',
    age: 0,
    email: ''
  };

  users = [
    { 
      id:1,
      name: 'thaovtp',
      age: 19,
      email: 'thaovtpph16945@fpt.edu.vn',
      sđt: '039472394',
      avatar: 'https://static.wixstatic.com/media/8a8033_a738085f564f4d43aa34edebaebae5b5~mv2_d_1600_1600_s_2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg'
    },
    { 
      id:10,
      name: 'khaipv',
      age: 19,
      email: 'khaipv@fpt.edu.vn',
      sđt: '039472394',
      avatar: 'https://static.wixstatic.com/media/8a8033_a738085f564f4d43aa34edebaebae5b5~mv2_d_1600_1600_s_2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg'
    },
    { 
      id:15,
      name: 'khaipv',
      age: 19,
      email: 'khaipv@fpt.edu.vn',
      sđt: '039472394',
      avatar: 'https://static.wixstatic.com/media/8a8033_a738085f564f4d43aa34edebaebae5b5~mv2_d_1600_1600_s_2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg'
    }
    
  ]
  onSubmit(userForm : NgForm) {
   //1. tìm ra id max    
   const userIds = this.users.map(users => users.id).sort((a,b) => a-b);
   console.log(userIds);
   const newId = userIds[userIds.length -1];

   // thêm vào mảng
   this.users.push({...userForm.value, // lấy ra object gt của form
     id: newId + 1})
   // cập nhật lại gt ban đầu
  //  userForm.resetForm(); // nếu k truyền j thì tất cả về null
  userForm.resetForm({
    name: '',
    age: 0,
    email: ''
  })
  }

}
