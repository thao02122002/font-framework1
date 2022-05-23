import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  formValues = {
    id: 0,
    name: '',
    age: 0,
    email: '',
    sdt: '',
    avatar: ''
  }
  // nơi quản lí tất cả dữ liệu và logic của chức năng users
  users = [
    { 
      id:1,
      name: 'thaovtp',
      age: 19,
      email: 'thaovtpph16945@fpt.edu.vn',
      sdt: '039472394',
      avatar: 'https://static.wixstatic.com/media/8a8033_a738085f564f4d43aa34edebaebae5b5~mv2_d_1600_1600_s_2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg'
    },
    { 
      id:10,
      name: 'khaipv',
      age: 19,
      email: 'khaipv@fpt.edu.vn',
      sdt: '039472394',
      avatar: 'https://static.wixstatic.com/media/8a8033_a738085f564f4d43aa34edebaebae5b5~mv2_d_1600_1600_s_2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg'
    },
    { 
      id:15,
      name: 'khaipv',
      age: 19,
      email: 'khaipv@fpt.edu.vn',
      sdt: '039472394',
      avatar: 'https://static.wixstatic.com/media/8a8033_a738085f564f4d43aa34edebaebae5b5~mv2_d_1600_1600_s_2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg'
    }
    
  ]
  inputValues = {
    id: 0,
    name: '',
    age: 0,
    email: '',
    sdt: '',
    avatar: ''
  };

  onParentSubmit( formData: any){
    console.log('paren form data', formData);
    //1. tìm ra id max    
   const userIds = this.users.map(users => users.id).sort((a,b) => a-b);
   console.log(userIds);
   const newId = userIds[userIds.length -1];
    // nếu formValue có id = 0 thì thêm mới ->2
    // nếu formValue có id !=0 thì chỉnh sửa -> 2.1
    if(this.formValues.id == 0) {
       //2 thêm vào mảng
   this.users.push({...formData, // lấy ra object gt của form
   id: newId + 1})
    } else {
      // 2.1 chỉnh sửa
      const idx = this.users.findIndex((user) => user.id === this.formValues.id)
      if(idx > -1) {
        this.users[idx] = {...formData, id: this.formValues.id}
      }      

    }
    
  }
  onParentDelete(userId: number) {
    this.users = this.users.filter(user => user.id !== userId)
  }
  onParentEdit(userId: number) {
     // tìm ra user có id  là userId truyền vào 
     const editUser = this.users.find((user) => user.id === userId);
     // nếu tồn tại editUser thì sẽ cho hiện dữ liệu ở form
     if(editUser) {
      return  this.formValues = {...editUser}
     }
     return alert('không tìm thấy user')
  }
}
