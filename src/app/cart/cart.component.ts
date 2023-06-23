import { ICartProduct } from './../product';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: ICartProduct[] = [];
  total = 0;

  constructor(
    public cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
    this.calcTotal();
  }

  calcTotal(){
    this.total = this.cartItems.reduce((prev, curr) => prev + (curr.price * curr.quantity),0);
  }

  deleteCartProduct(productId: number){
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.cartService.deleteCartItem(productId);
    this.calcTotal();
  }

  buy(){
    alert("Operation successful");
    this.cartService.cleanCart();
    this.router.navigate(["products"]);
  }

}
