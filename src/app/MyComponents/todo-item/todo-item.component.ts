import { Todo } from './../../Todo';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  constructor() {
    this.todo = {
      sno: 0,
      title: '',
      desc: '',
      active: true,
    };
  }
  ngOnInit(): void {}
  deleteTodo(todo: Todo) {
    this.todoDelete.emit(todo);
  }
}
