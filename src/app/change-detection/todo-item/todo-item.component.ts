import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../home/home.component';

@Component({
  selector: 'app-todo-item',
  template: `
    <div class="form-check">
      <input class="form-check-input"
             type="checkbox"
             id="todo{{todo.id}}"
             [value]="todo.completed"
             [checked]="todo.completed"
             (change)="onToggle()">
      <label class="form-check-label" for="todo{{todo.id}}">
        {{todo.description}}
      </label>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() toggle = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() { }

  onToggle() {
    this.todo.completed = !this.todo.completed;
    console.log('CHANGED!', this.todo);
    this.toggle.emit(this.todo);
  }
}
