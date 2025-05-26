import { Injectable } from '@angular/core';
import {
  CategoryApiData,
  CategoryApiRes,
} from '../../shared/interfaces/category-api-data';
import { ErrorApiData } from '../../shared/interfaces/error-api-data';

@Injectable({
  providedIn: 'root',
})
export class CategoryAdaptorService {
  constructor() {}

  adaptCategories(data: CategoryApiData): CategoryApiRes {
    return {
      message: data.message,
      metadata: data.metadata,
      categories: data.categories,
    };
  }

  adaptError(data: ErrorApiData): ErrorApiData {
    return {
      message: data.message,
      error: data.error,
    };
  }
}
