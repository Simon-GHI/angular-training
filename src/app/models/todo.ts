// Enums
import { ETodoPriority } from '@enums/todo-priority.enum';

export interface Todo {
  id: number;
  title: string;
  priority: ETodoPriority;
  completed: boolean;
}
