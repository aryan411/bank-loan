import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Output,
  computed,
  effect,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosFilterEnum } from '../../../models/todos/todos-filter-enum';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { TodoActions } from '../../../ngrx/store/todos/action';
import { todoSelectors } from '../../../ngrx/store/todos/selectors';


@Component({
  selector: 'app-main-ngrx',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainNgrxComponent {
  todoStore = inject(Store);
  todoFilter = toSignal(this.todoStore.select(todoSelectors.todosFilter));
  @Output() emitTodoCounts = new EventEmitter<number>();

  todos = toSignal(this.todoStore.select(todoSelectors.todos));
  todoLoading = toSignal(this.todoStore.select(todoSelectors.loading));

  visibleTodos = computed(() => {
    console.log('visble');
    let filteredTodos: any[] | undefined = [];
    if (this.todoFilter() == TodosFilterEnum.Completed)
      filteredTodos = this.todos()?.filter((todo) => todo.isCompleted === true);
    else if (this.todoFilter() == TodosFilterEnum.IsActive)
      filteredTodos = this.todos()?.filter(
        (todo) => todo.isCompleted === false
      );
    else {
      filteredTodos = this.todos();
    }
    return filteredTodos;
  });

  constructor(private cdr: ChangeDetectorRef) {
    console.log('Terminal log time: constructor', new Date().toISOString());

    this.todoStore.dispatch(TodoActions.getTodos());
    // this.cdr.detectChanges(); // Mark for check to trigger update

    effect(() => {
      console.log('Terminal log time: Effect', new Date().toISOString());

      this.emitTodoCounts.emit(Number(this.visibleTodos()?.length));
    });
  }

  updateCompeteStatusTodo(id: string, isCompleted: boolean): void {
    this.todoStore.dispatch(
      TodoActions.updateTodo({ id, updatedProp: { isCompleted } })
    );
    // this.todoService.updateTodo(id, { isCompleted });
  }
  removeTodo(id: string) {
    this.todoStore.dispatch(TodoActions.deleteTodo({ id }));
    // this.todoService.deleteTodo(id);
  }
  log(...data: any) {
    // console.log(data, 'logged data');
    console.log('Terminal log time: Log data', new Date().toISOString());

  }
}
