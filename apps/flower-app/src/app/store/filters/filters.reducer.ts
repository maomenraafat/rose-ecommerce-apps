import { createReducer, on } from '@ngrx/store';
import { FiltersActions } from './filters.actions';
import { initialState } from './filters.state';


const toggle = (arr: string[], val: string) =>
  arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val];

export const filtersReducer = createReducer(
  initialState,

  on(FiltersActions.toggleCategory, (s, { id }) => ({
    ...s,
    categories: toggle(s.categories, id),
  })),

  on(FiltersActions.toggleOccasion, (s, { id }) => ({
    ...s,
    occasions: toggle(s.occasions, id),
  })),

  on(FiltersActions.setSearchTerm, (s, { term }) => ({
    ...s,
    searchTerm: term.trim(),
  })),

  on(FiltersActions.clearFilters, () => initialState)
);
