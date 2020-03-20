import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOtherComponent } from './section-other.component';

describe('SectionOtherComponent', () => {
  let component: SectionOtherComponent;
  let fixture: ComponentFixture<SectionOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
