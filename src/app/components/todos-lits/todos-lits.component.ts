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

  constructor(todoService: TodoService) {
    this.todos = todoService.getAll()
   }

  ngOnInit() {
    this.activeTodoCount = this.todos.filter(todo => ! todo.deleted).length
  }

  handleDeleteTodo() {
    this.activeTodoCount--
  }
  handleRestoreTodo() {
    this.activeTodoCount++
  }

  handleRestoreAll() {
    this.todos.filter(todo => todo.deleted).forEach(todo => todo.deleted = false)
    this.activeTodoCount = this.todos.length
  }

  handleDeleteAll() {
    this.todos.filter(todo => ! todo.deleted).forEach(todo => todo.deleted = true)
    this.activeTodoCount = 0
  }
}
