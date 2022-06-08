import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { ProductService } from 'src/app/service/product.service';
import { Product, ProductCart } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
  product: Product;
  cartItemValue: number = 1;
  constructor(private productService: ProductService,
              
              private activateRoute: ActivatedRoute,
              private lsService: LocalStorageService) {
                this.product={
                  _id: '',
                  name: '',
                  status: 0,
                  price: 0,
                  salePrice: 0,
                  description: '',
                  imageUrl: ''
                  // category: 0
                }
               }

  ngOnInit(): void {
    const idFromUrl = this.activateRoute.snapshot.params['_id']
    this.productService.getProduct(idFromUrl).subscribe(data => {
      this.product = data
      
    })
  }

  onInputValueChange(event: any) {
    this.cartItemValue = event.target.value;
  }

  onAddToCart() {
    //1 định nghĩa cấu trúc dữ liệu thêm vào giỏ
    const addItem = {
      _id: this.product._id,
      name: this.product.name,
      value: +this.cartItemValue
    }
    
  this.lsService.setItem(addItem)
  //5. cập nhật lại giá trị cho ô input
  this.cartItemValue = 1
  
  }

}
