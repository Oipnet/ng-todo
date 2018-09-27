import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Todo>> {
    return this.http.get<Array<Todo>>('http://localhost:3000/todos')
  }

  completeTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`http://localhost:3000/todos/${todo.id}`, todo)
  }
}
