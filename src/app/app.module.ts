import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './Product/product-card/product-card.component';
import { ProductsListComponent } from './Product/products-list/products-list.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './layouts/header/header.component';
import { StoreModule } from '@ngrx/store';
import { ProductAddComponent } from './Product/product-add/product-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { cartReducer } from './stores/cart/cart.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './stores/products/products.effects';
import { productsReducer } from './stores/products/products.reducer';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductsListComponent,
    CartComponent,
    HeaderComponent,
    ProductAddComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,HttpClientModule,
    StoreModule.forRoot({ products: productsReducer }),
    EffectsModule.forRoot([ProductsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
