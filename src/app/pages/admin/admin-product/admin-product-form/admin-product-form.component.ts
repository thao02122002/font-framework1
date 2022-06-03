import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
productForm: FormGroup
  constructor(private productService: ProductService,
              private router: Router) { 
    this.productForm = new FormGroup({
       name: new FormControl('', [
         Validators.required,
         Validators.minLength(6),
         Validators.maxLength(32)
       ]) // FormControl(giá trị mặc định)
    })
  }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.productForm);
    // nhập dữ liệu từ form
    const data = this.productForm.value
    // call api
    this.productService.createProduct(data).subscribe(data => {
      //chuyển trang về list
      this.router.navigate(['/admin','products'])
      //khi đã quay về list thì ngOnInit trong list sẽ lại được chạy và call api
      // lấy ds mới

  
    })
    
    
  }

}
