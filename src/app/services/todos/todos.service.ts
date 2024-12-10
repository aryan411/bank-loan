import { DoCheck, Injectable, Signal, computed, signal } from '@angular/core';
import { ITodos } from '../../models/todos/todos.interface';
import { TodosFilterEnum } from '../../models/todos/todos-filter-enum';

@Injectable({
  providedIn: 'root',
})
export class TodosService implements DoCheck {
  todoSig = signal<ITodos[]>([]);
  todoFilter = signal<TodosFilterEnum>(TodosFilterEnum.All);
  constructor() {
    console.log('service creating');
  }
  filteredTodos: Signal<ITodos[]> = computed(() => {
    console.log('computed');
    switch (this.todoFilter()) {
      case TodosFilterEnum.Completed:
        return this.todoSig().filter((todo) => todo.isCompleted);
      case TodosFilterEnum.IsActive:
        return this.todoSig().filter((todo) => !todo.isCompleted);
      default:
        return this.todoSig();
    }
  });
  ngDoCheck(): void {
    console.log('TodoService ', 'ngDoCheck triggered!');
  }
  addTodo(text: string): void {
    console.log(text, 'service');
    const newTodo: ITodos = {
      text,
      isCompleted: false,
      id: (this.todoSig().length + 1).toString(),
    };
    this.todoSig.update((todos) => [...todos, newTodo]);
    console.log(this.todoSig(), 'service');
  }

  updateTodo(
    id: string,
    todoProp: { text?: string; isCompleted?: boolean }
  ): void {
    if (!Object.keys(todoProp).length) return;
    this.todoSig.update((todos) =>
      todos.map((todo) => (todo?.id == id ? { ...todo, ...todoProp } : todo))
    );
  }

  deleteTodo(id: string) {
    if (!!!id) return;
    this.todoSig.update((todos) => todos.filter((todo) => todo?.id != id));
  }
}
