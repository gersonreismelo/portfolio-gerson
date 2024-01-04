import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateHiringSystemComponent } from './candidate-hiring-system.component';

describe('CandidateHiringSystemComponent', () => {
  let component: CandidateHiringSystemComponent;
  let fixture: ComponentFixture<CandidateHiringSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateHiringSystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandidateHiringSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
