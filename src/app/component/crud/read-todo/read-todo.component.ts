import { Component } from '@angular/core';
import { ToDo } from '../../model/to-do';
import { CrudService } from '../../service/crud.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-read-todo',
  templateUrl: './read-todo.component.html',
  styleUrl: './read-todo.component.scss'
})
export class ReadTodoComponent {

  todos: Observable<ToDo[]>;

  constructor(private crudService: CrudService) { 
    this.todos = crudService.getAllTodo()
  }

}
