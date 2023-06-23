import { CartService } from './../../cart.service';
import { NotificationService } from './../../notification.service';
import { ActivatedRoute } from '@angular/router';
import { ICartProduct, IProduct } from 'src/app/product';
import { ProductsService } from './../../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: IProduct | undefined;
  quantity = 1;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get("id"));
    this.product = this.productService.getOne(productId);
  }

  addToCart(){
    this.notificationService.notify("Product added to cart");
    const product: ICartProduct = {
      ...this.product!,
      quantity: this.quantity
    }
    this.cartService.addToCart(product);
  }

}
