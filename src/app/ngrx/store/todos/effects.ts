import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoActions } from './action';
import { map, switchMap, tap } from 'rxjs';
import { TodosNgrxService } from '../../services/todos-api.service';

@Injectable()
export class TodosEffects {
  action$ = inject(Actions);
  todoService = inject(TodosNgrxService);

  loadTodos$ = createEffect(() =>
    this.action$.pipe(
      ofType(TodoActions.getTodos),
      switchMap(() =>
        this.todoService.getTodos().pipe(
          map((todos) => TodoActions.getTodosSuccess({ todos })),
          tap(() => console.log('Terminal log time: loadTodo Observable', new Date().toISOString()))
        )
      )
    )
  );
}
