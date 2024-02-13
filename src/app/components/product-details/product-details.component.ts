import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId!: number;
  productDetails!: Product

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id']
    })
    this.getDetails()
  }

  getDetails() {
    this.productsService.getProductById(this.productId).subscribe((data: Product) => {
      this.productDetails = data
      console.log(this.productDetails)
    })
  }
}
