import { Component, inject } from '@angular/core';
import { TodosService } from '../../../services/todos/todos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  todoService = inject(TodosService);
  todoText: string = '';

  addTodo(text: string) {
    this.todoService.addTodo(text);
    this.todoText = '';
  }
}
