import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from 'src/app/components/todo-list/todo-list.component';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-reactive-todo',
  standalone: true,
  imports: [CommonModule, TodoListComponent],
  templateUrl: './reactive-todo.component.html',
  styleUrls: ['./reactive-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveTodoComponent {
  constructor(public todosService: TodosService) { }

  onDeleteTodo(todo: Todo) {
    this.todosService.deleteTodo(todo);
  }

  onCompleteTodo($event: Todo) {
    this.todosService.setTodoCompleted($event);
  }
}
