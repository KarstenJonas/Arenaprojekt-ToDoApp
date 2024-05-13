import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() todoDeleted = new EventEmitter<void>();

  deleteTodo(todo : ToDo) {
    this.crudService.deleteTodo(todo).subscribe({
      next: () => this.todoDeleted.emit(),
      error: () => alert("Failed to delete task")
    });
  }

}