import { Component, inject } from '@angular/core';
import { TodosService } from '../../../services/todos/todos.service';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TodoActions } from '../../../ngrx/store/todos/action';

@Component({
  selector: 'app-header-ngrx',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderNgrxComponent {
  // todoService = inject(TodosService);
  todoStore = inject(Store);
  todoText: string = '';

  addTodo(text: string) {
    this.todoStore.dispatch(TodoActions.addTodo({ text: this.todoText }));
    this.todoText = '';
  }
}
