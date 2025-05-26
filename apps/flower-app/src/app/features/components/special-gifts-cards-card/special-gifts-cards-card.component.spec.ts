import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpecialGiftsCardsCardComponent } from './special-gifts-cards-card.component';

describe('SpecialGiftsCardsCardComponent', () => {
  let component: SpecialGiftsCardsCardComponent;
  let fixture: ComponentFixture<SpecialGiftsCardsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialGiftsCardsCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpecialGiftsCardsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
