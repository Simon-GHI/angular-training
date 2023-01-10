import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Services
import { TodoRestService } from '@services/todo.rest.service';

const routes: Routes = [
  {
    path: 'imperative-todo',
    loadComponent: () =>
      import('./features/imperative-todo/imperative-todo.component').then(
        m => m.ImperativeTodoComponent
      ),
    // Use own instance of TodoRestService to avoid sharing the same instance with the ReactiveTodoComponent
    providers: [TodoRestService],
  },
  {
    path: 'reactive-todo',
    loadComponent: () =>
      import('./features/reactive-todo/reactive-todo.component').then(
        m => m.ReactiveTodoComponent
      ),
  },
  { path: '', redirectTo: '/reactive-todo', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
