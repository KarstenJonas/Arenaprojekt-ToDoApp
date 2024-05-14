import { Component, Input, ViewChild } from '@angular/core';
import { ToDo } from '../../model/to-do';
import { CrudService } from '../../service/crud.service';
import { provideNativeDateAdapter } from '@angular/material/core';
import { TodoFormComponent } from '../todo-form/todo-form.component';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrl: './update-todo.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class UpdateTodoComponent {

  updateFormVisibility: boolean = false;
  @ViewChild(TodoFormComponent) todoFormComponent!: TodoFormComponent;

  toggleUpdateFormVisibility() {
    this.updateFormVisibility = !this.updateFormVisibility;
  }

  @Input() todo!: ToDo;

  constructor(private crudService: CrudService) {}

  updateTodo(todo: ToDo){
    console.log("Formfields", todo);
    if (todo) {
      console.log("Formfields", todo);
      this.crudService.updateTodo(todo);
      this.toggleUpdateFormVisibility();
    }
  }
}
