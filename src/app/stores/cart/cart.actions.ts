import { createAction } from "@ngrx/store";
import { Product } from "../../models/product.model";


const prefix = "[Shopping Cart]: " 
//export const getAll = createAction("GET_ALL");
//export const get = createAction("GET_PRODUCT", (id: number) => ({id}));
export const add = createAction(prefix+"ADD_PRODUCT", (product: Product, quantity: number) => ({product, quantity}));
export const remove = createAction(prefix+"REMOVE_PRODUCT", (id: number) => ({id}));