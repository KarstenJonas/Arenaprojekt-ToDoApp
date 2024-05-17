import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { ToDo } from '../../model/to-do';
import { CrudService } from '../../service/crud.service';
import { MatButtonToggleChange, MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
  selector: 'app-status-todo',
  templateUrl: './status-todo.component.html',
  styleUrl: './status-todo.component.scss'
})
export class StatusTodoComponent {

  @Input() todo!: ToDo;
  

  constructor(private crudService: CrudService) {

  }

  changeTodoStatus(todo: ToDo){
    
    if (todo) {
      todo.status = !todo.status;
      this.crudService.updateTodo(todo);
    }
  }

  onStatusChange($event: MatButtonToggleChange) {
    console.log("$event", $event)
    const isDone = $event.value.includes("isDone");
    if (this.todo.status != isDone) {
      let changedTodo = this.todo;
      changedTodo.status = isDone;
      this.crudService.updateTodo(changedTodo);
    }
  }

}
