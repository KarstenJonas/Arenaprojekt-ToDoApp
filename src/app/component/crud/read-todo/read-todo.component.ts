import { Component, Input } from '@angular/core';
import { ToDo } from '../../model/to-do';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-read-todo',
  templateUrl: './read-todo.component.html',
  styleUrl: './read-todo.component.scss'
})
export class ReadTodoComponent {

  todos: ToDo[] = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.readAllTask();
  }

  readAllTask() {
  this.crudService.getAllTodo().subscribe({
    next: res => this.todos = res,
    error: error => console.error("Something went wrong while retrieving todos", error)
    })
  }

}
