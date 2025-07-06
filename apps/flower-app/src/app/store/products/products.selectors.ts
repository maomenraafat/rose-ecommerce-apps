import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProductsState } from './products.state';
import { _selectAllProducts } from './products.adapter';

export const selectProductsState =
  createFeatureSelector<ProductsState>('products');

export const selectAllProducts = createSelector(
  selectProductsState,
  _selectAllProducts
);

