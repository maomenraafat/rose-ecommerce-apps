import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ProductApiData } from '../../interfaces/product-api-data';
import { environment } from '../../../environments/environments';
import { ProductsEnPoints } from '../../../enums/products.enPoints';
import { ProductAdaptorService } from '../../../adaptors/product/product-adaptor.adaptor';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  _httpClient = inject(HttpClient);
  _productAdaptorService = inject(ProductAdaptorService);
  constructor() {}

  getAllProducts(categoryId?: string): Observable<ProductApiData> {
    let url = `${environment.baseUrl}${ProductsEnPoints.AllProducts}`;
    if (categoryId) {
      url += `?category=${categoryId}`;
    }
    return this._httpClient.get<ProductApiData>(url).pipe(
      map((res: ProductApiData) =>
        this._productAdaptorService.adaptProducts(res)
      ),
      catchError((err) =>
        throwError(() => this._productAdaptorService.adaptError(err))
      )
    );
  }
}
