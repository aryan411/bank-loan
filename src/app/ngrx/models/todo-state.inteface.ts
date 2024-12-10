import { TodosFilterEnum } from '../../models/todos/todos-filter-enum';
import { ITodos } from '../../models/todos/todos.interface';

export interface ITodosState {
  todos: ITodos[];
  todosFilter: TodosFilterEnum;
  loading: boolean;
  error: string | null;
}
