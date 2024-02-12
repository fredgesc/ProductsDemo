import { createReducer, on } from "@ngrx/store";
import { Product } from "../../models/product.model";
import * as actions from "./products.actions"


export interface ProductsState   {
    productList: Product[];
}

export const initialState : ProductsState = { productList: []};