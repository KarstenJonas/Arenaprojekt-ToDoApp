import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../../model/to-do';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrl: './update-todo.component.scss'
})
export class UpdateTodoComponent {

  @Input() todo : ToDo = new ToDo;
  @Output() todoUpdated = new EventEmitter<void>();

  todoObj : ToDo = new ToDo();
  editTaskValue : string = '';

  constructor(private crudService: CrudService) { }

  updateTask() {
    
    this.crudService.editTask(this.todoObj).subscribe({
      next: () => this.todoUpdated.emit(),
      error: () => alert("Failed to update task")
    });
  }
}
