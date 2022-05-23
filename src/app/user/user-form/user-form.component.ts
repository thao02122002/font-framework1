import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() inputValues: any;
 // 1. định nghĩa sự kiện để bắn ngược lại
@Output() handleSubmit: EventEmitter<any>;
  constructor() {
    //2. khai báo giá gtrij defaut
    this.handleSubmit = new EventEmitter()
   }

  ngOnInit(): void {
   
  }
  
  onSubmit(userForm : NgForm) {
    
    
    //3. gửi dữ liệu đi
    this.handleSubmit.emit(userForm.value)
   userForm.resetForm({
     name: '',
     age: 0,
     email: '',
     sdt: '',
     avatar: ''
   })
   }

}
