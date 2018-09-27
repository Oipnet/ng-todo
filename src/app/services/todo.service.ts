import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  @Output() initialCount = new EventEmitter<number>()
  @Output() addActive = new EventEmitter()
  @Output() removeActive = new EventEmitter()

  constructor(private http: HttpClient) { }

  countActive() {
    this.http.get<Array<Todo>>('http://localhost:3000/todos')
      .subscribe(res => this.initialCount.emit(res.filter(todo => !todo.completed).length))
  }

  getAll(): Observable<Array<Todo>> {
    return this.http.get<Array<Todo>>('http://localhost:3000/todos')
  }

  updateTodo(todo: Todo): Observable<Todo> {
    if (todo.completed) {
      this.removeActive.emit()
    } else {
      this.addActive.emit()
    }

    return this.http.put<Todo>(`http://localhost:3000/todos/${todo.id}`, todo)
  }
}
