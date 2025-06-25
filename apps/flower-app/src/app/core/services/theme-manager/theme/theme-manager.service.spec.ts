import { ThemeManagerService } from './theme-manager.service';
import { TestBed } from '@angular/core/testing';


describe('ManagerService', () => {
  let service: ThemeManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
