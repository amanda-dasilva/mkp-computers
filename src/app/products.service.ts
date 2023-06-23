import { products, IProduct } from './product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: IProduct[] = products;

  constructor() { }

  getAll(){
    return this.products;
  }

  getOne(productId: number){
    return this.products.find(product => product.id === productId);
  }
}
