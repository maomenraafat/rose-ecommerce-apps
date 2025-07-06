import { EntityState } from '@ngrx/entity';
import { Product } from '../../shared/interfaces/product';

export interface ProductsState extends EntityState<Product> {
  loaded: boolean;
  error : any;
}

export const initialState: ProductsState = {
  ids:[],  
  entities:{},
  loaded: false,
  error: null,
};
