import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos-lits',
  templateUrl: './todos-lits.component.html',
  styleUrls: ['./todos-lits.component.css']
})
export class TodosLitsComponent implements OnInit {

  todos: Array<Todo>
  activeTodoCount: number = 0
  loader: boolean = true

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getAll().subscribe(todos => {
      this.todos = todos
      this.activeTodoCount = this.todos.filter(todo => ! todo.completed).length
      this.loader = false
    })
  }

  handleDeleteTodo(todo: Todo) {
    todo.completed = !todo.completed
    this.todoService.completeTodo(todo).subscribe(todo => {
      const index = this.todos.findIndex(t => t.id === todo.id);
      this.todos[index] = todo;
      this.activeTodoCount--
    })
  }
  handleRestoreTodo(todo: Todo) {
    todo.completed = !todo.completed
    this.todoService.completeTodo(todo).subscribe(todo => {
      const index = this.todos.findIndex(t => t.id === todo.id)
      this.todos[index] = todo;
      this.activeTodoCount++
    })
  }

  handleRestoreAll() {
    this.todos.filter(todo => todo.completed).forEach(todo => {
      todo.completed = false
      this.todoService.completeTodo(todo).subscribe(todo => {
        const index = this.todos.findIndex(t => t.id === todo.id)
        this.todos[index] = todo;
      })
    })
    this.activeTodoCount = this.todos.length
  }

  handleDeleteAll() {
    this.todos.filter(todo => ! todo.completed).forEach(todo => {
      todo.completed = true
      this.todoService.completeTodo(todo).subscribe(todo => {
        const index = this.todos.findIndex(t => t.id === todo.id)
        this.todos[index] = todo;
      })
    })
    this.activeTodoCount = 0
  }
}
