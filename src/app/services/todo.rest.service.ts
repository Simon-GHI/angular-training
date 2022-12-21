import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
// Models
import { Todo } from '@models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoRestService {
  private _todos: Todo[] = [
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: false },
    { id: 3, title: 'Todo 3', completed: false },
    { id: 4, title: 'Todo 4', completed: false },
    { id: 5, title: 'Todo 5', completed: false },
    { id: 6, title: 'Todo 6', completed: false },
    { id: 7, title: 'Todo 7', completed: false },
    { id: 8, title: 'Todo 8', completed: false },
    { id: 9, title: 'Todo 9', completed: false },
    { id: 10, title: 'Todo 10', completed: false },
  ];

  /**
   * Get todos list
   */
  getTodos(): Observable<Todo[]> {
    return new Observable<Todo[]>(observer => {
      console.log('Get list of todos');
      // Return a copy of todos to avoid side effects
      const todos = [...this._todos.map(todo => ({ ...todo }))];
      // Uncomment to simulate side effects. Data will be updated before the observable is emitted
      // const todos = this._todos;
      observer.next(todos);
      observer.complete();
    }).pipe(delay(1000));
  }

  /**
   * Set a todo as completed by id
   *
   * @param id
   * @error Todo not found
   */
  setTodoCompletedById(id: number): Observable<boolean> {
    return new Observable<boolean>(observer => {
      const todoToComplete = this._todos.find(todo => todo.id === id);
      if (!todoToComplete) {
        // Simulate an error
        observer.error('Todo not found');
        observer.next(false);
      } else {
        todoToComplete.completed = true;
        observer.next(true);
      }
      observer.complete();
    }).pipe(delay(50));
  }

  /**
   * Delete a todo by id
   * @param id
   */
  deleteTodoById(id: number): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this._todos = this._todos.filter(todo => todo.id !== id);
      observer.next(true);
      observer.complete();
    }).pipe(delay(50));
  }
}
