import { createFeatureSelector } from '@ngrx/store';
import { FiltersState } from './filters.state';

export const selectFilters = createFeatureSelector<FiltersState>('filters');
