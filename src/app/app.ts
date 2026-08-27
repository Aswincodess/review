import { Component, signal,inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { addToCart } from './store/cart.action';
import { Store } from '@ngrx/store'
import { selectProducts } from './store/cart.selector';
import { CommonModule } from '@angular/common';
import { Product } from './store/model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 private store=inject(Store);

 products$=this.store.select(selectProducts);

 iphone:Product={
  id:2,
  name:'iphone',
  price:50000
 }


 addProduct(){
  this.store.dispatch(
    addToCart({ product: this.iphone })
  )
 }
}
