import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo } from '../model/to-do';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  serviceURL: string;

  constructor(private http: HttpClient) {
    this.serviceURL = "http://localhost:3000/todos"
  }

  createTodo(todo: ToDo): Observable<ToDo> {
    return this.http.post<ToDo>(this.serviceURL, todo);
  }

  getAllTodo(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(this.serviceURL);
  }

  editTask(todo: ToDo): Observable<ToDo> {
    return this.http.put<ToDo>(this.serviceURL + '/' + todo.id, todo);
  }
}
