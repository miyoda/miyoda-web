import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeItemComponent } from './knowledge-item.component';

describe('KnowledgeItemComponent', () => {
  let component: KnowledgeItemComponent;
  let fixture: ComponentFixture<KnowledgeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
