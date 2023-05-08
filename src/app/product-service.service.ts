import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private apiUrl = 'http://localhost:3000/products';

  constructor(private httpClient : HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }

  addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiUrl, product);
  }

  deleteProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiUrl, product.id);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiUrl, product.id);
  }

  editProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiUrl, product.id);
  }
}
