import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeBlockComponent } from './knowledge-block.component';

describe('KnowledgeBlockComponent', () => {
  let component: KnowledgeBlockComponent;
  let fixture: ComponentFixture<KnowledgeBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
