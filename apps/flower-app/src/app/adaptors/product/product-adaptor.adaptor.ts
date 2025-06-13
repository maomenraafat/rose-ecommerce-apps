import { Injectable } from '@angular/core';
import {
  ProductApiData,
  ProductApiRes,
} from '../../shared/interfaces/product-api-data';
import { ErrorApiData } from '../../shared/interfaces/error-api-data';

@Injectable({
  providedIn: 'root',
})
export class ProductAdaptorService {
  constructor() {}
  adaptProducts(data: ProductApiData): ProductApiRes {
    return {
      message: data.message,
      metadata: data.metadata,
      products: data.products,
    };
  }

  adaptError(data: ErrorApiData): ErrorApiData {
    return {
      message: data.message,
      error: data.error,
    };
  }
}
