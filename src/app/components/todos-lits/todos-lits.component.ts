import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
      this.loader = false
    })

    this.todoService.addActive.subscribe(_ => this.activeTodoCount++)
    this.todoService.removeActive.subscribe(_ => this.activeTodoCount--)
    this.todoService.initialCount.subscribe(count => this.activeTodoCount = count)
  }

  handleToggleCompletedTodo(todo: Todo) {
    todo.completed = !todo.completed
    this.handleUpdateTodo(todo)
  }

  handleUpdateTodo(todo: Todo) {
    this.todoService.updateTodo(todo).subscribe(todo => {
      const index = this.todos.findIndex(t => t.id === todo.id);
      this.todos[index] = todo;
    })
  }

  handleRestoreAll() {
    this.todos.filter(todo => todo.completed).forEach(todo => {
      this.handleToggleCompletedTodo(todo)
    })
  }

  handleDeleteAll() {
    this.todos.filter(todo => ! todo.completed).forEach(todo => {
      this.handleToggleCompletedTodo(todo)
    })
  }
}
