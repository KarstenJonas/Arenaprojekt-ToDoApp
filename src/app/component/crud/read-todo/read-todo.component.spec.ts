import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadTodoComponent } from './read-todo.component';

describe('ReadTodoComponent', () => {
  let component: ReadTodoComponent;
  let fixture: ComponentFixture<ReadTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadTodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
