import {
  Component,
  Inject,
  OnInit,
  Signal,
  computed,
  effect,
  inject,
} from '@angular/core';
import { TodosService } from '../../../services/todos/todos.service';
import { CommonModule } from '@angular/common';
import { ITodos } from '../../../models/todos/todos.interface';
import { TodosFilterEnum } from '../../../models/todos/todos-filter-enum';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  todoService = inject(TodosService);

  todos = this.todoService.filteredTodos;

  updateCompeteStatusTodo(id: string, isCompleted: boolean): void {
    console.log(id, 'id');
    this.todoService.updateTodo(id, { isCompleted });
  }
  removeTodo(id: string) {
    this.todoService.deleteTodo(id);
  }
}
