import { TestBed } from '@angular/core/testing';

import { CategoryAdaptorService } from './category-adaptor.adaptor';

describe('QuizAdaptorService', () => {
  let service: CategoryAdaptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryAdaptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
