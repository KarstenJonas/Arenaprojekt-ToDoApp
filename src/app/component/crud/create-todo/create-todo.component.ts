import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { ToDo } from '../../model/to-do';
import { CrudService } from '../../service/crud.service';
import { TodoFormComponent } from '../todo-form/todo-form.component';


@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.scss'
})
export class CreateTodoComponent {

  @ViewChild(TodoFormComponent) todoFormComponent!: TodoFormComponent;
  @Output() closeForm: EventEmitter<void> = new EventEmitter<void>();

  constructor(private crudService: CrudService) { }

  createTodo(todo: ToDo) {
    console.log("Formular-Daten vom Unterformular:", todo);
    if (todo) {
      console.log("Formfields", todo);
      this.crudService.createTodo(todo)
      this.closeForm.emit();
    }
  }
}
