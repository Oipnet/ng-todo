import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosLitsComponent } from './todos-lits.component';

describe('TodosLitsComponent', () => {
  let component: TodosLitsComponent;
  let fixture: ComponentFixture<TodosLitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosLitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosLitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
