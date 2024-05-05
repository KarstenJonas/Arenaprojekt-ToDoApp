import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ToDo, Priority, Duration } from '../../model/to-do';
import { CrudService } from '../../service/crud.service';
import { error } from 'console';


@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class CreateTodoComponent {


  constructor(fb: FormBuilder, private crudService: CrudService) {
    this.todoForm = fb.group({
      title: ['', Validators.required],
      text: [''],
      priority: [Priority.LOW],
      duration: [Duration.UNSET]
    })
  }

  @Output() closeForm = new EventEmitter();

  todoForm !: FormGroup;

  selected: Date | null | undefined; // duedate-picker-variable

  errorMessage = '';
  priorities = Object.values(Priority);
  durations = Object.values(Duration);



  updateErrorMessage() {
    if (this.todoForm.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    }
  }


  createTodo() {
    console.log("createtodo executed");
    if (this.todoForm.valid) {
      console.log("Formfields", this.todoForm.value)
      const todo: ToDo = this.todoForm.value;
      console.log("todo=", todo)
      //new ToDo(this.todoForm.get('title')?.value);

      console.log("todoForm is valid");
      this.crudService.createTodo(todo).subscribe({
        next: todo => {
          console.log("Todo created sucessfully", todo);
          this.todoForm.reset();
          this.closeForm.emit("");
        },
        error: error => console.error("Something went wrong on creating todo", error)
      }
      )
    }
  }
}
