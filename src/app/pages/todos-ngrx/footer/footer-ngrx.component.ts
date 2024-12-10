import { Component, Input, computed, inject } from '@angular/core';
import { TodosService } from '../../../services/todos/todos.service';
import { TodosFilterEnum } from '../../../models/todos/todos-filter-enum';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { todoSelectors } from '../../../ngrx/store/todos/selectors';
import { TodoActions } from '../../../ngrx/store/todos/action';
import { shareReplay } from 'rxjs';

@Component({
  selector: 'app-footer-ngrx',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterNgrxComponent {
  todosStore = inject(Store);
  activeFilter$ = this.todosStore.select(todoSelectors.todosFilter).pipe();
  @Input({ required: true }) todosCount!: number;
  todosFilterEnum = TodosFilterEnum;
  constructor() {
    this.activeFilter$.subscribe(console.log);
    console.log(this.todosCount, 'todoCount');
  }
  selectFilter(filter: TodosFilterEnum) {
    console.log(filter);
    this.todosStore.dispatch(
      TodoActions.changeTodoFilter({ todoFilter: filter })
    );
  }
}
