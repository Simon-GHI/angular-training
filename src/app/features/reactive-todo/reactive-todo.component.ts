import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { TodoListComponent } from '@components/todo-list/todo-list.component';
// Models
import { Todo } from '@models/todo';
// Services
import { TodosService } from '@services/todos.service';

@Component({
  selector: 'app-reactive-todo',
  standalone: true,
  imports: [CommonModule, TodoListComponent],
  templateUrl: './reactive-todo.component.html',
  styleUrls: ['./reactive-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveTodoComponent {
  constructor(public todosService: TodosService) {}

  onDeleteTodo(todo: Todo) {
    this.todosService.deleteTodo(todo);
  }

  onCompleteTodo($event: Todo) {
    this.todosService.setTodoCompleted($event);
  }
}
