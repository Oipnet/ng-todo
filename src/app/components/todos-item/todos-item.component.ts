import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, Renderer } from '@angular/core';
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
  @Output() updateTodo = new EventEmitter<Todo>()
  update: boolean = false;

  @ViewChild('title') titleElement: ElementRef;
 
  constructor(private renderer: Renderer) { }

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

  handleUpdateTodo(e) {
    if (this.todo.completed) {
      return
    }
    this.update = !this.update
    this.renderer.invokeElementMethod(this.titleElement.nativeElement, 'focus');

    if (!this.update) {
      this.updateTodo.emit(this.todo)
    }
  }

  ngAfterViewInit() {
  }
}
