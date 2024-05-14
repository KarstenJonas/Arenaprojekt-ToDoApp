import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Duration, Priority, ToDo } from '../../model/to-do';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {

  @Output() formSubmitted: EventEmitter<any> = new EventEmitter();
  @Input() todo!: ToDo;

  ngOnInit(): void {
    console.log("constructor", this.todo);
    if (this.todo)
      this.todoForm.setValue(this.todo);
  }

  constructor(fb: FormBuilder) {
    this.todoForm = fb.group({
      id: [''],
      title: ['', Validators.required],
      text: [''],
      priority: [Priority.LOW],
      duration: [Duration.UNSET]
    })
  }

  todoForm: FormGroup;
  errorMessage = '';
  priorities = Object.values(Priority);
  durations = Object.values(Duration);

  selected: Date | null | undefined; // duedate-picker-variable

  updateErrorMessage() {
    if (this.todoForm.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    }
  }
  onSubmit() {
    if (this.todoForm.valid) {
      this.formSubmitted.emit(this.todoForm.value);
    }
  }
}
