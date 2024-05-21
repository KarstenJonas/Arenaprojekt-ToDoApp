import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { Priority, ToDo } from '../model/to-do';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private todos: ToDo[] = [];
  private idcounter: number = 100;

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
    this.todos.push(
      this.buildTodo(1, "Programm programmieren", "Verzweifeln", true, Priority.HIGH),
      this.buildTodo(2, "Dokumentation schreiben", "Verzweifeln", false, Priority.MEDIUM),
      this.buildTodo(3, "Präsentation vortragen", "Verzweifeln", false, Priority.LOW)
    )
  }

  buildTodo(id: number, title: string, text: string, status: boolean, prio: Priority):ToDo{
    let todo = new ToDo();
    todo.id = id;
    todo.title = title;
    todo.text = text;
    todo.status = status;
    todo.priority = prio;

    return todo;
  }

  createTodo(todo: ToDo): void {
    todo.id = this.idcounter;
    this.idcounter += 1;
    of(todo).subscribe({
      next: result => this.todoSubject.next([...this.todoSubject.value, result]),
      error: error => console.error("Error on todo create", error)
    });
  }

  getAllTodo(): Observable<ToDo[]> {
    if ((this.todoSubject.value as ToDo[]).length === 0) {
      of(this.todos).subscribe({
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
    of(todo).subscribe({
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
    of(this.todos).subscribe({
      next: result => this.todoSubject.next(this.todoSubject.value.filter(todoOfList => todoOfList.id !== todo.id)),
      error: error => console.error("Error on deleting Todo with Id ", todo.id, error)
    });
  }
}
