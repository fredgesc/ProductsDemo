import { createAction, props } from "@ngrx/store";
import { Product } from "../../models/product.model";


const prefix = "[Products]: " 
export const getAll = createAction(prefix+"GET_PRODUCTS");
export const getAllSuccess = createAction(
    prefix+"GET_PRODUCTS_SUCCESS",  
    (productList: Product[]) => ({productList})
)
//(products: Product[]) => ({products}));
export const getAllFailure = createAction(prefix+"GET_PRODUCTS_FAILURE");
//export const get = createAction("GET_PRODUCT", (id: number) => ({id}));

export const add = createAction(prefix+"ADD_PRODUCT", (product: Product) => ({product}));
export const addSuccess = createAction(
    prefix+"ADD_PRODUCTS_SUCCESS",  
    (product: Product) => ({product})
)
//export const update = createAction(prefix+"UPDATE_PRODUCT", (product: Product) => ({product}));
export const remove = createAction(prefix+"REMOVE_PRODUCT", (id: number) => ({id}));
export const removeSuccess = createAction(
    prefix+"REMOVE_PRODUCTS_SUCCESS",  
    (id: number) => ({id})
)