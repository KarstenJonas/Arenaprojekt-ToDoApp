import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';


@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class CreateTodoComponent {

  selected: Date | null | undefined;
  errorMessage = '';
  priorityOptions: string[] = ['Prio1', 'Prio2', 'Prio3'];

  todoForm = new FormGroup({

    titel : new FormControl('', Validators.required)

  });

  updateErrorMessage() {
    if (this.todoForm.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    }
  }

  
}
