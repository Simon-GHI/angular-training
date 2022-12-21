import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/imperative-todo', pathMatch: 'full' },
  {
    path: 'imperative-todo',
    loadComponent: () =>
      import('./features/imperative-todo/imperative-todo.component').then(
        m => m.ImperativeTodoComponent
      ),
  },
  {
    path: 'reactive-todo',
    loadComponent: () =>
      import('./features/reactive-todo/reactive-todo.component').then(
        m => m.ReactiveTodoComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
