import { Injectable } from '@angular/core';
import { CategoryAdaptor } from '../../interfaces/category-adaptor';
import { CategoryApiData, CategoryRes } from '../../interfaces/categoryRes';


@Injectable({
  providedIn: 'root'
})
export class CategoryApiAdaptorService implements CategoryAdaptor {


  adaptApiCategory(data: CategoryApiData): CategoryRes {
    return {
      message: data.message,
      categories: data.categories.map( c => ({
        name: c.name,
        image: c.image,
        _id: c._id,
        productsCount: c.productsCount,
        isSuperAdmin: c.isSuperAdmin,
      })),
    };
  }

}
