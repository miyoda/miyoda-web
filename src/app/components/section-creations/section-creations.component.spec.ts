import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCreationsComponent } from './section-creations.component';

describe('SectionCreationsComponent', () => {
  let component: SectionCreationsComponent;
  let fixture: ComponentFixture<SectionCreationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionCreationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCreationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
