import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  editProduct: Product = { id: '', name: '', price: '', description: '', image: '' };

  constructor(private ProductServiceService: ProductServiceService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.ProductServiceService.editProduct(this.editProduct).subscribe();
    this.editProduct = { id: '', name: '', price: '', description: '', image: '' };
    alert("Edited Successfully")
  }
}