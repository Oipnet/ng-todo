import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo = new EventEmitter<Todo>()
  @Output() restoreTodo = new EventEmitter<Todo>()

  constructor() { }

  ngOnInit() {
  }

  handleDeleteTodo(e) {
    e.stopPropagation()
    if (this.todo.completed) {
      this.deleteTodo.emit(this.todo)
    } else {
      this.restoreTodo.emit(this.todo)
    }
  }

}
