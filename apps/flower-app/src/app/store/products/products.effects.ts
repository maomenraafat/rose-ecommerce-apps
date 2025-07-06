import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsActions } from './products.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { Product } from '../../shared/interfaces/product';
import { environment } from '../../env/environments';
import { API_EndPoints } from '../../enums/endPoints';

export class ProductsEffects {
  loadProducts$ = createEffect(() => {
  const actions$ = inject(Actions);      
  const http = inject(HttpClient);  

  return actions$.pipe(
    ofType(ProductsActions.loadProducts),
    switchMap(() =>
      http
        .get<{ products: Product[] }>(
          `${environment.baseUrl}${API_EndPoints.Products.All}`
        )
        .pipe(
          map(({ products }) =>
            ProductsActions.loadProductsSuccess({ products })
          ),
          catchError(error =>
            of(ProductsActions.loadProductsFailure({ error }))
          )
        )
    )
  );
});

}
