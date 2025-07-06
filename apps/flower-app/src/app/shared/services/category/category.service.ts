import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { CategoryApiData } from '../../interfaces/category-api-data';
import { environment } from '../../../env/environments';
import { Category } from '../../interfaces/category';
import { API_EndPoints } from '../../../enums/endPoints';
import { CategoryAdaptorService } from '../../../adaptors/category/category-adaptor.adaptor';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  public _categoryList: WritableSignal<Category[]> = signal<Category[]>([]);
  public categoryList = this._categoryList.asReadonly();
  isLoadingCategory: WritableSignal<boolean> = signal(true);
  _httpClient = inject(HttpClient);
  _categoryAdaptorService = inject(CategoryAdaptorService);


  getAllCategories(): Observable<CategoryApiData> {
    return this._httpClient
      .get<CategoryApiData>(
        `${environment.baseUrl}${API_EndPoints.Categories.All}`
      )
      .pipe(
        map((res: CategoryApiData) =>
          this._categoryAdaptorService.adaptCategories(res)
        ),
        catchError((err) => {
          return throwError(() => this._categoryAdaptorService.adaptError(err));
        })
      );
  }
}
