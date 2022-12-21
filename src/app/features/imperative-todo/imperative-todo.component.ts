import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { TodoListComponent } from '@components/todo-list/todo-list.component';
// Models
import { Todo } from '@models/todo';
// Services
import { TodoRestService } from '@services/todo.rest.service';

@Component({
  selector: 'app-imperative-todo',
  standalone: true,
  imports: [CommonModule, TodoListComponent],
  templateUrl: './imperative-todo.component.html',
  styleUrls: ['./imperative-todo.component.scss'],
})
export class ImperativeTodoComponent {
  todos?: Todo[];

  nbTodosCompleted?: number;

  constructor(public todosRestService: TodoRestService) {
    this.getTodos();
  }

  onDeleteTodo(todo: Todo) {
    this.todosRestService.deleteTodoById(todo.id).subscribe(() => {
      this.getTodos();
    });
  }

  onCompleteTodo($event: Todo) {
    this.todosRestService.setTodoCompletedById($event.id).subscribe(() => {
      this.getTodos();
    });
  }

  /**
   * Get todos & count completed todos
   */
  private getTodos() {
    this.todos = undefined;
    this.nbTodosCompleted = undefined;
    this.todosRestService.getTodos().subscribe(todos => {
      this.todos = [...todos];
      this.nbTodosCompleted = todos.filter(todo => todo.completed).length;
    });
  }
}
