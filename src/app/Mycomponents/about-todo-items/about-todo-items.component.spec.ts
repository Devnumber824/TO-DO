import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTodoItemsComponent } from './about-todo-items.component';

describe('AboutTodoItemsComponent', () => {
  let component: AboutTodoItemsComponent;
  let fixture: ComponentFixture<AboutTodoItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTodoItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTodoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
