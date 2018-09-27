import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  activeTodoCount: number

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.initialCount.subscribe(count => this.activeTodoCount = count)
    this.todoService.addActive.subscribe(_ => this.activeTodoCount++)
    this.todoService.removeActive.subscribe(_ => this.activeTodoCount--)
  }

}
