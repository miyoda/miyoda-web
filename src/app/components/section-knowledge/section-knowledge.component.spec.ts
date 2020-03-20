import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionKnowledgeComponent } from './section-knowledge.component';

describe('SectionKnowledgeComponent', () => {
  let component: SectionKnowledgeComponent;
  let fixture: ComponentFixture<SectionKnowledgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionKnowledgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
