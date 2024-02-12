import { Component, Input } from '@angular/core';
import { FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../stores/app.state';
import { add } from '../../stores/products/products.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {

  @Input() localProduct : Product = {
    name: "",
    price: 0,
    stock: 0,
    reviews: [],
    category: "General"
  }
  name:FormControl = new FormControl(this.localProduct.name, [Validators.required, Validators.minLength(3)]);
  price:FormControl = new FormControl(this.localProduct.price, [Validators.required, Validators.min(0.01), Validators.max(100000)]);
  stock:FormControl = new FormControl(this.localProduct.stock,[Validators.required, Validators.min(1)]);
  
  formProduct = this.fb.group([this.name, this.price, this.stock])

  constructor(private fb: FormBuilder, private service : ProductsService, private route : ActivatedRoute, private store : Store<AppState>){

  }

  ngOnInit(){
    this.route.paramMap.subscribe((obs) => {
      if(obs.get('id')){
        let id = parseInt(obs.get('id') ?? "0");
        this.service.getProduct(id).subscribe(product => {
          console.log("Getting Product: ", product)
          this.localProduct = product;
          this.setFormData();
        })
      }
    });
  }

  onSubmit(){
    this.store.dispatch(add({
      name: this.name.value,
      price: this.price.value,
      stock: this.stock.value,
      category: "General",
      reviews: []
    }))
  }


  setFormData(){
    this.name.setValue(this.localProduct.name);
    this.price.setValue(this.localProduct.price);
    this.stock.setValue(this.localProduct.stock);
  }
}
