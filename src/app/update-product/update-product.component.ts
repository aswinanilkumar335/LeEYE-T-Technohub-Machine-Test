import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service'; 
import { Product } from '../product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  updateProduct: Product = { id: '', name: '', price: '', description: '',image:'' };

  constructor(private ProductServiceService: ProductServiceService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.ProductServiceService.updateProduct(this.updateProduct).subscribe();
    this.updateProduct = { id: '', name: '', price: '', description: '',image:'' };
    alert("Updated Successfully")
  }

}
