import { createEntityAdapter } from '@ngrx/entity';
import { Product } from '../../shared/interfaces/product';

export const productsAdapter = createEntityAdapter<Product>({
  selectId: p => p._id,
});

export const {
  selectAll  : _selectAllProducts,

} = productsAdapter.getSelectors();
