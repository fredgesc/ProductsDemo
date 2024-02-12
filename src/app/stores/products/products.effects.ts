import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductsService } from "../../services/products.service";
import { Injectable } from "@angular/core";
import { add, addSuccess, getAll, getAllSuccess, remove, removeSuccess } from "./products.actions";
import { EMPTY, catchError, map, mergeMap, switchMap } from "rxjs";

@Injectable()
export class ProductsEffects {
    constructor(private actions$: Actions, private productsService : ProductsService){

    }

    getAll$ = createEffect(() => 
         this.actions$.pipe(
            ofType(getAll.type), 
            mergeMap(() => 
                 this.productsService.getAll()
                 .pipe(
                    map(products => {
                        return getAllSuccess(products)
                    }),
                    catchError(() => EMPTY)
                )
            )
        )
    )

    remove$ = createEffect(() => 
         this.actions$.pipe(
            ofType(remove), 
            map(action => action.id),
            switchMap(id => 
                this.productsService.removeProduct(id).pipe(
                    map(res => removeSuccess(id))
                )
            )
        )
    )

    add$ = createEffect(() => 
         this.actions$.pipe(
            ofType(add), 
            map(action => action.product),
            switchMap(product => 
                this.productsService.saveProduct(product)
                .pipe(
                    map(product => addSuccess(product))
                )
            )
        )
    )
}