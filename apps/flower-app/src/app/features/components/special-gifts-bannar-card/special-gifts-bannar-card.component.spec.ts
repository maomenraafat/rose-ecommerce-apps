import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpecialGiftsBannarCardComponent } from './special-gifts-bannar-card.component';

describe('SpecialGiftsBannarCardComponent', () => {
  let component: SpecialGiftsBannarCardComponent;
  let fixture: ComponentFixture<SpecialGiftsBannarCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialGiftsBannarCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpecialGiftsBannarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
