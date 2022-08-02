import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoItemsComponent } from './add-todo-items.component';

describe('AddTodoItemsComponent', () => {
  let component: AddTodoItemsComponent;
  let fixture: ComponentFixture<AddTodoItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTodoItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTodoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
