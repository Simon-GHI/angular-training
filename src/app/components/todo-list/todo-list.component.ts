import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list [todos]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  @Input() todos?: Todo[] | null;

  @Output() deleteTodo = new EventEmitter<Todo>();

  @Output() completeTodo = new EventEmitter<Todo>();

  triggerCompleteTodo(todo: Todo) {
    this.completeTodo.emit(todo);
  }

  triggerDeleteTodo(todo: Todo) {
    this.deleteTodo.emit(todo);
  }
}
