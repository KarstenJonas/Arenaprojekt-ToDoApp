import { Component, Input } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { ToDo } from '../../model/to-do';

@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.component.html',
  styleUrl: './delete-todo.component.scss'
})
export class DeleteTodoComponent {

  constructor(private crudService: CrudService) { }

  @Input() todo: ToDo = new ToDo;

  deleteTodo(todo : ToDo) {
    this.crudService.deleteTodo(todo)
  }

}