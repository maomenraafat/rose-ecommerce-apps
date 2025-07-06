import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { Product } from '../../shared/interfaces/product';

export const ProductsActions = createActionGroup({
  source: 'Products',
  events: {
    'Load Products': emptyProps(),                   
    'Load Products Success': props<{ products: Product[] }>(),
    'Load Products Failure': props<{ error: any }>(),
  },
});
