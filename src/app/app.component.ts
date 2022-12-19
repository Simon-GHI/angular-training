import { Component } from '@angular/core';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/imperative-todo" routerLinkActive="active">Imperative Todo</a>
    <a routerLink="/reactive-todo" routerLinkActive="active">Reactive Todo</a>
  </nav>
  <!-- Uncomment to test observable shared outside of the Reactive-todo component -->
  <!-- <ng-container *ngIf="{ count : todosService.nbTodos$ | async } as nbTodo">
    <label *ngIf="nbTodo.count !== null">Todo: {{nbTodo.count}}</label>
  </ng-container> -->
  <router-outlet></router-outlet>
    `,
  styles: [
    `
    nav {
      display: flex;
      gap: 1rem;
    }
    `
  ]
})
export class AppComponent {
  title = 'Angular-training';

  constructor(public todosService: TodosService) {

  }
}
