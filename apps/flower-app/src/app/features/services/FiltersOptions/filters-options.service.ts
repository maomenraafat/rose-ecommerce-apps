import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../../env/environments';
import { API_EndPoints } from '../../../enums/endPoints';
import { CategoryApiAbstract } from '../../base/categoryApiAbstract';
import { CategoryApiAdaptorService } from '../../adaptor/category/category-api.adaptor';
import { CategoryApiData, CategoryRes } from '../../interfaces/categoryRes';
import { OccasionApiData, OccasionRes } from '../../interfaces/occasionRes';
import { OccasionApiAbstract } from '../../base/occasionApiAbstract';
import { OccasionApiAdaptorService } from '../../adaptor/occasion/occasion-api.adaptor';


@Injectable({
  providedIn: 'root'
})
export class FiltersOptionsService implements CategoryApiAbstract, OccasionApiAbstract {
  // Call Services
  private readonly _http = inject(HttpClient)
  private readonly _categoryApiAdaptorService = inject(CategoryApiAdaptorService)
  private readonly _occasionApiAdaptorService = inject(OccasionApiAdaptorService)


  getAllCategories(): Observable<CategoryRes> {
    return this._http.get<CategoryApiData>(`${environment.baseUrl}${API_EndPoints.Categories.All}`).pipe(
      map( (res: CategoryApiData) => this._categoryApiAdaptorService.adaptApiCategory(res)),
      catchError( (err) => of(err)),
    )
  }


  getAllOccasions(): Observable<OccasionRes> {
    return this._http.get<OccasionApiData>(`${environment.baseUrl}${API_EndPoints.Occasions.All}?limit=15`).pipe(
      map( (res: OccasionApiData) => this._occasionApiAdaptorService.adaptApiOccasion(res)),
      catchError( (err) => of(err)),
    )
  }

}
