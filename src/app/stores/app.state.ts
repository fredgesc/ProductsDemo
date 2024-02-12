import { ActionReducer } from "@ngrx/store";
import { ProductsState } from "./products/products.state";
import { productsReducer } from "./products/products.reducer";

export interface AppState { 
    products: ProductsState
}

