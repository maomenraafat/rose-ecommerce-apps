import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const FiltersActions = createActionGroup({
  source: 'Filters',
  events: {
    'Toggle Category': props<{ id: string }>(),
    'Toggle Occasion': props<{ id: string }>(),
    'Set Search Term': props<{ term: string }>(),
    'Clear Filters': emptyProps(),
  },
});
