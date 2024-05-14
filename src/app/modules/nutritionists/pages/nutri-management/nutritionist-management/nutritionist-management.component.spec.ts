import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionistManagementComponent } from './nutritionist-management.component';

describe('NutritionistManagementComponent', () => {
  let component: NutritionistManagementComponent;
  let fixture: ComponentFixture<NutritionistManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutritionistManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NutritionistManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
