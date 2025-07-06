import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.model';
import { _selectAllProducts } from './products.adapter';

export const selectProductsState =
  createFeatureSelector<ProductsState>('products');

export const selectFilteredProducts = createSelector(
  selectProductsState,
  state => state.filteredIds.map(id => state.entities[id]!)
);