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
    // nếu inputValues có id = 0 thì thêm mới ->2
    // nếu inputvalues có id !=0 thì chỉnh sửa -> 2.1
    if(this.inputValues.id == 0) {
       //2 thêm vào mảng
   this.users.push({...userForm.value, // lấy ra object gt của form
   id: newId + 1})
    } else {
      // 2.1 chỉnh sửa
      const idx = this.users.findIndex((user) => user.id === this.inputValues.id)
      if(idx > -1) {
        this.users[idx] = {...userForm.value, id: this.inputValues.id}
      }      

    }

   
   //3. cập nhật lại gt ban đầu
  //  userForm.resetForm(); // nếu k truyền j thì tất cả về null
  userForm.resetForm({
    name: '',
    age: 0,
    email: ''
  })
  }

  onDelete(userId: number){
     this.users = this.users.filter((users) => users.id !== userId);
  }

  onEdit(userId: number) {
    // tìm ra user có id  là userId truyền vào 
    const editUser = this.users.find((user) => user.id === userId);
    // nếu tồn tại editUser thì sẽ cho hiện dữ liệu ở form
    if(editUser) {
       this.inputValues = {...editUser}
    }
  }

}
