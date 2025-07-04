import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ProductApiData } from '../../interfaces/product-api-data';
import { environment } from '../../../env/environments';
import { ProductAdaptorService } from '../../../adaptors/product/product-adaptor.adaptor';
import { API_EndPoints } from '../../../enums/endPoints';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly _httpClient = inject(HttpClient);
  private readonly _productAdaptorService = inject(ProductAdaptorService);


  getAllProducts(categoryId?: string): Observable<ProductApiData> {
    let url = `${environment.baseUrl}${API_EndPoints.Products.All}`;
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
