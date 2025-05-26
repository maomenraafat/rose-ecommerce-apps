import { TestBed } from '@angular/core/testing';

import { ProductAdaptorService } from '../product-adaptor.service';

describe('ProductAdaptorService', () => {
  let service: ProductAdaptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductAdaptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
