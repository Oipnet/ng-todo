import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getAll() {
    return [
      { id: 1, title: "Tache 1", deleted: false},
      { id: 2, title: "Tache 2", deleted: false},
      { id: 3, title: "Tache 3", deleted: false},
      { id: 4, title: "Tache 4", deleted: false},
      { id: 5, title: "Tache 5", deleted: false},
    ]
  }
}
