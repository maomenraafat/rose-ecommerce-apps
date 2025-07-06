import { createReducer, on } from '@ngrx/store';
import { ProductsActions } from './products.actions';
import { initialState } from './products.state';
import { productsAdapter } from './products.adapter';


export const productsReducer = createReducer(
  initialState,

  on(ProductsActions.loadProductsSuccess, (state, { products }) =>
    productsAdapter.setAll(products, { ...state, loaded: true })
  ),

  on(ProductsActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);


