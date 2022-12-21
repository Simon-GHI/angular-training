import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  combineLatestWith,
  map,
  merge,
  Observable,
  of,
  share,
  shareReplay,
  startWith,
  switchMap,
  take,
  tap,
} from 'rxjs';
import { Todo } from '../models/todo';
import { TodoRestService } from './todo.rest.service';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos$: Observable<Todo[] | undefined>;

  nbTodos$: Observable<number | null>;

  nbTodosCompleted$: Observable<number | null>;

  private _refreshTodos$ = new BehaviorSubject<boolean>(true);

  constructor(private todoRestService: TodoRestService) {
    this.todos$ = this.initTodos$();

    this.nbTodos$ = this.initNbTodos$();
    this.nbTodosCompleted$ = this.initNbTodosCompleted$();
  }

  public setTodoCompleted(todo: Todo): void {
    this.todoRestService
      .setTodoCompletedById(todo.id)
      .pipe(
        // Take 1 to unsubscribe after the first value is emitted
        take(1),
        // Tap to refresh todos
        tap(() => this.refreshTodos())
      )
      .subscribe(() => {
        // Display a success/error message
      });
  }

  /**
   * Delete a todo & trigger a refresh of todos
   * @param todo
   */
  public deleteTodo(todo: Todo): void {
    this.todoRestService
      .deleteTodoById(todo.id)
      .pipe(
        // Take 1 to unsubscribe after the first value is emitted
        take(1),
        // Tap to refresh todos
        tap(() => this.refreshTodos())
      )
      .subscribe(() => {
        // Display a success/error message
      });
  }

  /**
   * Init todos observable.
   */
  private initTodos$(): Observable<Todo[] | undefined> {
    return this._refreshTodos$.pipe(
      // On each refresh, switch to the new observable
      switchMap(() =>
        //  merge undefined (to manage loading state) with the todos observable
        merge(of(undefined), this.todoRestService.getTodos())
      ),
      // Share the observable to avoid multiple calls
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }

  private initNbTodos$(): Observable<number | null> {
    return this.todos$.pipe(
      startWith(undefined),
      map((todos) => (todos ? todos.length : null))
    );
  }

  private initNbTodosCompleted$(): Observable<number | null> {
    return this.todos$.pipe(
      startWith(undefined),
      map((todos) =>
        todos ? todos.filter((todo) => todo.completed).length : null
      )
    );
  }
  /**
   * Trigger a refresh of todos
   */
  private refreshTodos(): void {
    this._refreshTodos$.next(true);
  }
}
