import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Product, ProductsResponse } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  BASE_URL: string = environment.baseUrl

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<ProductsResponse>(`${this.BASE_URL}/products`)
  }

  getProductById(id: number) {
    return this.http.get<Product>(`${this.BASE_URL}/products/${id}`)
  }
}
