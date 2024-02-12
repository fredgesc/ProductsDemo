import { createReducer, on } from "@ngrx/store";
import { Product } from "../../models/product.model";
import * as actions from "./products.actions"
import { initialState } from "./products.state";




export const productsReducer = createReducer(
    initialState,
    on(actions.getAllSuccess, (state, payload) => {
        return { productList : payload.productList};
    }),
    on(actions.removeSuccess, (state, payload) => {
        console.log("On Removing Reducer...", payload)
        return { productList: state.productList.filter(o => o.id != payload.id)}
    }),
    on(actions.addSuccess, (state, payload) => {
        console.log("On Adding Reducer...", payload)
        return { productList: [...state.productList, payload.product]}
    })
    //on(actions.getAll, (state, payload) => )
    /*
    on(actions.add, (state, payload) => {
        //Locally by now
        if(state.filter(o => o.name == payload.product.name).length == 0){
            return [...state, payload.product]
        }
        return state;
    }),
    on(actions.update, (state, payload) => [...state.map(o => o.id == payload.product.id ? payload.product : o)]),
    on(actions.remove, (state, payload) => [...state.filter(o => o.id != payload.id)]),*/
)