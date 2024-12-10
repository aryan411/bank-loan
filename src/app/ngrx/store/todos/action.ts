import { createAction, props } from '@ngrx/store';
import { ITodos } from '../../../models/todos/todos.interface';
import { TodosFilterEnum } from '../../../models/todos/todos-filter-enum';
export const TodoActions = {
  getTodos: createAction('[Todos] Get Todos'),
  addTodo: createAction('[Todos] Add Todo', props<{ text: string }>()),
  updateTodo: createAction(
    '[Todos] Update Todo',
    props<{ id: string; updatedProp: Partial<Omit<ITodos, 'id'>> }>()
  ),
  deleteTodo: createAction('[Todos] Delete Todo', props<{ id: string }>()),
  getTodosSuccess: createAction(
    '[Todos] Get Todos Success',
    props<{ todos: ITodos[] }>()
  ),
  getTodosFailure: createAction(
    '[Todos] Get Todos Failure',
    props<{ error: string }>()
  ),
  changeTodoFilter : createAction(
    '[todo] change todo filter',
    props<{ todoFilter: TodosFilterEnum }>()
  ),
};
