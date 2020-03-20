import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionContinuousImprovementComponent } from './section-continuous-improvement.component';

describe('SectionContinuousImprovementComponent', () => {
  let component: SectionContinuousImprovementComponent;
  let fixture: ComponentFixture<SectionContinuousImprovementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionContinuousImprovementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionContinuousImprovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
