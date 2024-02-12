import { createReducer, on } from "@ngrx/store";
import { Product } from "../../models/product.model";
import * as actions from "./cart.actions"
import { Cart } from "../../models/cart.model";

export const initialState : Cart = [];

export const cartReducer = createReducer(
    initialState
    
)