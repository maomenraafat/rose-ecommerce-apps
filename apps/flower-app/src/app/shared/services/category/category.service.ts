import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { CategoryApiData } from '../../interfaces/category-api-data';
import { environment } from '../../../environments/environments';
import { CategoriesEnPoints } from '../../../enums/categories.enPoints';
import { CategoryAdaptorService } from '../../../adaptors/category/category-adaptor.adaptor';
import { Category } from '../../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  public _categoryList: WritableSignal<Category[]> = signal<Category[]>([]);
  public categoryList = this._categoryList.asReadonly();
  isLoadingCategory: WritableSignal<boolean> = signal(true);
  _httpClient = inject(HttpClient);
  _categoryAdaptorService = inject(CategoryAdaptorService);
  constructor() {}

  getAllCategories(): Observable<CategoryApiData> {
    return this._httpClient
      .get(`${environment.baseUrl}${CategoriesEnPoints.AllCategories}`)
      .pipe(
        map((res: any) => this._categoryAdaptorService.adaptCategories(res)),
        catchError((err) => {
          return throwError(() => this._categoryAdaptorService.adaptError(err));
        })
      );
  }
}
