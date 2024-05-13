import { Component, Input} from '@angular/core';
import { ToDo } from '../../model/to-do';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrl: './update-todo.component.scss'
})
export class UpdateTodoComponent {

  @Input() todo: ToDo = new ToDo();

  constructor(private crudService: CrudService) {}

  updateTodo(){

  }
}
