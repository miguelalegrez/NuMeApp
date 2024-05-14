import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionistDetailComponent } from './nutritionist-detail.component';

describe('NutritionistDetailComponent', () => {
  let component: NutritionistDetailComponent;
  let fixture: ComponentFixture<NutritionistDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutritionistDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NutritionistDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
