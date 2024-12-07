import { Component, Input, computed, inject } from '@angular/core';
import { TodosService } from '../../../services/todos/todos.service';
import { TodosFilterEnum } from '../../../models/todos/todos-filter-enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  todosService = inject(TodosService);
  activeFilter = this.todosService.todoFilter;
  todosFilterEnum = TodosFilterEnum;

  todoCounts = computed(() => this.todosService?.filteredTodos().length);


  selectFilter(filter: TodosFilterEnum) {
    this.activeFilter.set(filter);
  }
}
