import { EntityState } from '@ngrx/entity';
import { Product } from '../../shared/interfaces/product';

export interface ProductsState extends EntityState<Product> {
  loaded: boolean;
  filteredIds : string[]; 
}

export const initialState: ProductsState = {
  ids:[],  
  entities:{},
  loaded: false,
  filteredIds: [], 
};

export interface FiltersState {
  categories: string[];
  occasions: string[];
  searchTerm: string;
}
