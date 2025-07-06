import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { Product } from '../../shared/interfaces/product';
import { FiltersState } from './products.model';


export const ProductsActions = createActionGroup({
  source: 'Products',
  events: {
    'Load Products': emptyProps(),                   
    'Load Products Success': props<{ products: Product[] }>(),
    'Load Products Failure': props<{ error: any }>(),
    'Apply Filters': props<{ filters: FiltersState }>(),
  },
});
