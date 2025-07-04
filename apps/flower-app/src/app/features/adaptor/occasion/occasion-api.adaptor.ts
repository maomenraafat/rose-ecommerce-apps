import { Injectable } from '@angular/core';
import { OccasionAdaptor } from '../../interfaces/occasion-adaptor';
import { OccasionApiData, OccasionRes } from '../../interfaces/occasionRes';

@Injectable({
  providedIn: 'root'
})
export class OccasionApiAdaptorService implements OccasionAdaptor {

  adaptApiOccasion(data: OccasionApiData): OccasionRes {
    return {
      message: data.message,
      occasions: data.occasions.map( (o) => ({
        name: o.name,
        image: o.image,
        _id: o._id,
        productsCount: o.productsCount,
        isSuperAdmin: o.isSuperAdmin,
      }
      ))
    }
  }
}
