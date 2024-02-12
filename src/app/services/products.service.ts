import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Product } from '../models/product.model';
import { Observable, map } from 'rxjs';


export const baseUrl : string = "https://localhost:7099/products";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAll() {
    let url = baseUrl;
    return this.http.get<Product[]>(url);
  }

  
  getProduct(id: number) {
    let url = baseUrl + "/"+id;
    return this.http.get<Product>(url);
  }
  
  saveProduct(product: Product) {
    let url = baseUrl;
    return this.http.post<Product>(url, product, this.httpOptions);
  }

  removeProduct(id: number) {
    let url = baseUrl + "/"+id;
    return this.http.delete(url);
  }
}