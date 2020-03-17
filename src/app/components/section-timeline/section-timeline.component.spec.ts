import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTimelineComponent } from './section-timeline.component';

describe('SectionTimelineComponent', () => {
  let component: SectionTimelineComponent;
  let fixture: ComponentFixture<SectionTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
