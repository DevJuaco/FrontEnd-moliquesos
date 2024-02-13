import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductResponse } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId!: number;
  productDetails!: ProductResponse;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id']
      this.getDetails()
    })
  }

  getDetails() {
    this.productsService.getProductById(this.productId).subscribe((data: ProductResponse) => {
      this.productDetails = data
      console.log(this.productDetails)
    })
  }

  addToCart(product: Product) {
    this.cartService.addToCart({
      id: product.id,
      urlImage: product.urlImage,
      productName: product.productName,
      price: product.price,
      quantity: 1
    })
  }
}
