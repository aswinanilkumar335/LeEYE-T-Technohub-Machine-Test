import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service'; 
import { Product } from '../product';


@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  deleteProduct: Product = { id: '', name: '', price: '', description: '',image:'' };

  constructor(private ProductServiceService: ProductServiceService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.ProductServiceService.deleteProduct(this.deleteProduct).subscribe();
    this.deleteProduct = { id: '', name: '', price: '', description: '',image:'' };
    alert("Deleted Successfully")
  }
 
}
