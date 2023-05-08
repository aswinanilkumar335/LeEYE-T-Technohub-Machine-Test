import { Component } from '@angular/core';
import { ProductServiceService } from '../product-service.service'; 
import { Product } from '../product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent {
  newProduct: Product = { id: '', name: '', price: '', description: '',image:'' };

  constructor(private ProductServiceService: ProductServiceService) { }
  
  ngOnInit(): void {
  }

  onSubmit() {
    this.ProductServiceService.addProduct(this.newProduct).subscribe();
    this.newProduct = { id: '', name: '', price: '', description: '',image:'' };
    alert("Product Added Successfully")
  }
}
