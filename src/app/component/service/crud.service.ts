import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, filter } from 'rxjs';
import { ToDo } from '../model/to-do';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  serviceURL: string;

  private todoSubject = new BehaviorSubject<ToDo[]>([]);
  private todo = this.todoSubject.asObservable();

  private _isDoneFilterActive : boolean = false;

  public set isDoneFilterActive(value: boolean) {
    this._isDoneFilterActive = value;
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
    console.log("handshake:", this.isDoneFilterActive);
    if ((this.todoSubject.value as ToDo[]).length === 0) {
      this.http.get<ToDo[]>(this.serviceURL).subscribe({
        next: res => this.todoSubject.next(res),
        error: error => { console.error("Something went wrong while retrieving todos", error); this.todoSubject.next([]); }
      });
    }
    return this.todoSubject.pipe(
      map(todos => {
        if (this._isDoneFilterActive){
          return todos.filter(todo => !todo.status);
        }
          return todos
      })
    );
  }

  updateTodo(todo: ToDo): void {
    this.http.put<ToDo>(this.serviceURL + '/' + todo.id, todo).subscribe({
      next: result => this.todoSubject.next([...this.todoSubject.value.filter(todoOfList => todoOfList.id !== todo.id), result]),
      error: error => console.error("Error on deleting Todo with Id ", todo.id, error)
    });
  }

  deleteTodo(todo: ToDo): void {
    this.http.delete<ToDo>(this.serviceURL + '/' + todo.id).subscribe({
      next: result => this.todoSubject.next(this.todoSubject.value.filter(todoOfList => todoOfList.id !== todo.id)),
      error: error => console.error("Error on deleting Todo with Id ", todo.id, error)
    });
  }
}
