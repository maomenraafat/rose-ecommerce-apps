import { Injectable } from '@angular/core';
import { ProductApiData, ProductApiRes } from '../../shared/interfaces/product-api-data';

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

  adaptError(data: any): any {
    return {
      message: data.error.message,
      code: data.error.code,
    };
  }
}
