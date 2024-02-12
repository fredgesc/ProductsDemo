import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
//import { AppState } from '../../stores/products/products.state';
import { getAll, remove } from '../../stores/products/products.actions';
import { Observable, map } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductsState } from '../../stores/products/products.state';
import { AppState } from '../../stores/app.state';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {

  products$: Observable<Product[]> = new Observable();
  
  constructor(private store : Store<AppState>){
    
    this.products$ = this.store.select("products")
      .pipe(map(p => {
        return p.productList
      }));
  }
  ngOnInit(){
    this.store.dispatch(getAll())
  }

  removeProduct(id: number){
    alert(id);
    this.store.dispatch(remove(id));
  }
}
