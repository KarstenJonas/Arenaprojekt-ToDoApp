import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Priority, ToDo } from '../model/to-do';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  serviceURL: string;

  private todoSubject = new BehaviorSubject<ToDo[]>([]);

  private _isDoneFilterActive: boolean = false;

  public set isDoneFilterActive(value: boolean) {
    this._isDoneFilterActive = value;
  }

  private _selectedPriorities: Priority[] = [];

  public set selectedPriorities(value: string[]) {
    this._selectedPriorities = value.map((priorityName: string) => Priority[priorityName as keyof typeof Priority]);
    console.log("selectetPrio:", this._selectedPriorities);
  }


  constructor(private http: HttpClient) {
    this.serviceURL = "http://localhost:3000/todos"
  }

  createTodo(todo: ToDo): void {
    this.http.post<ToDo>(this.serviceURL, todo).subscribe({
      next: result => this.todoSubject.next([...this.todoSubject.value, result]),
      error: error => console.error("Error on todo create", error)
    });
  }

  getAllTodo(): Observable<ToDo[]> {
    if ((this.todoSubject.value as ToDo[]).length === 0) {
      this.http.get<ToDo[]>(this.serviceURL).subscribe({
        next: res => this.todoSubject.next(res),
        error: error => { console.error("Something went wrong while retrieving todos", error); this.todoSubject.next([]); }
      });
    }
    return this.todoSubject.pipe(
      map(todos => {
        //       if (this._isDoneFilterActive) {
        //         todos = todos.filter(todo => !todo.status);
        //       }
        //       if (this._selectedPriorities?.length > 0) {
        //         todos = todos.filter(todo => this._selectedPriorities.includes(todo.priority));
        //       }
        //       return todos;
        return todos.filter(x =>
          (this._isDoneFilterActive || !x.status) &&
          (this._selectedPriorities.length === 0 || this._selectedPriorities.includes(x.priority)));
      })
    );
  }

  updateTodo(todo: ToDo): void {
    this.http.put<ToDo>(this.serviceURL + '/' + todo.id, todo).subscribe({
      next: changedTodo => {
        // Erstellt ein neues Array, indem das geänderte Todo-Element aktualisiert wird
        const updatedTodos = this.todoSubject.value.map(it => 
          it.id === changedTodo.id ? changedTodo : it
        );
        // Übermittelt das neue Array an das BehaviorSubject
        this.todoSubject.next(updatedTodos);
      },
      error: error => console.error("Error on updating Todo with Id ", todo.id, error)
    });
  }

  resetList(): void {
    this.todoSubject.next(this.todoSubject.value);
  }

  deleteTodo(todo: ToDo): void {
    this.http.delete<ToDo>(this.serviceURL + '/' + todo.id).subscribe({
      next: result => this.todoSubject.next(this.todoSubject.value.filter(todoOfList => todoOfList.id !== todo.id)),
      error: error => console.error("Error on deleting Todo with Id ", todo.id, error)
    });
  }
}
