import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsResponse, Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products!: Product[]

  constructor(
    private productsService: ProductsService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts() {
    this.productsService.getAllProducts().subscribe((data) => {
      this.products = data.allProducts
      console.log(this.products)
    })
  }

  goToProductDetails(productId: number) {
    this.router.navigate(['/details', productId])
  }
}
