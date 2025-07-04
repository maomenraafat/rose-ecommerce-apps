import { TestBed } from '@angular/core/testing';

import { FiltersOptionsService } from './filters-options.service';

describe('FiltersOptionsService', () => {
  let service: FiltersOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltersOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
