import { createReducer, on } from '@ngrx/store';
import { ProductsActions } from './products.actions';
import { FiltersState, initialState } from './products.model';
import { productsAdapter } from './products.adapter';
import { Product } from '../../shared/interfaces/product';


export const productsReducer = createReducer(
  initialState,

  on(ProductsActions.loadProductsSuccess, (s,{products}) => {
    const next = productsAdapter.setAll(products,{ ...s, loaded:true });
    return { ...next, filteredIds: products.map(p => p._id) }; 
  }),

  on(ProductsActions.applyFilters, (s,{filters}) => ({
    ...s,
    filteredIds: calcFilteredIds(productsAdapter.getSelectors().selectAll(s), filters)
  })),

  on(ProductsActions.loadProductsFailure, (s,{error}) => ({ ...s, error })),
);

function calcFilteredIds(products: Product[], f: FiltersState): string[] {
  const term = f.searchTerm.trim().toLowerCase();
  return products
    .filter(p => {
      const cat = !f.categories.length || f.categories.includes(p.category);
      const occ = !f.occasions.length  || f.occasions.includes(p.occasion);
      const kw  = !term || p.title.toLowerCase().includes(term);
      return cat && occ && kw;
    })
    .map(p => p._id);
}



