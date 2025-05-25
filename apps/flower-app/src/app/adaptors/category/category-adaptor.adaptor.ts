import { Injectable } from '@angular/core';
import {
  CategoryApiData,
  CategoryApiRes,
} from '../../shared/interfaces/category-api-data';

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

  adaptError(data: any): any {
    return {
      message: data.error.message,
      code: data.error.code,
    };
  }
}
