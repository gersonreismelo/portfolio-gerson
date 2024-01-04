import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorSmartComponent } from './senior-smart.component';

describe('SeniorSmartComponent', () => {
  let component: SeniorSmartComponent;
  let fixture: ComponentFixture<SeniorSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeniorSmartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeniorSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
