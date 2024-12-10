import { createReducer, on } from '@ngrx/store';
import { TodoActions } from './action';
import { ITodosState } from '../../models/todo-state.inteface';
import { TodosFilterEnum } from '../../../models/todos/todos-filter-enum';
import { ITodos } from '../../../models/todos/todos.interface';

export const initialState: ITodosState = {
  todos: [],
  todosFilter: TodosFilterEnum.All,
  loading: false,
  error: null,
};

// Separate functions for handling each action with proper typing
const handleGetTodos = (state: ITodosState): ITodosState => {
  console.log('Terminal log time:', new Date().toISOString());

  return ({
  ...state,
  loading: true,
})};

const handleGetTodosSuccess = (
  state: ITodosState,
  action: ReturnType<typeof TodoActions.getTodosSuccess>
): ITodosState =>{ 
  console.log('Terminal log time:', new Date().toISOString());
  return ({
  ...state,
  loading: false,
  todos: action.todos,
});}

const handleGetTodosFailure = (
  state: ITodosState,
  action: ReturnType<typeof TodoActions.getTodosFailure>
): ITodosState => ({
  ...state,
  loading: false,
  error: action.error,
});

const handleAddTodo = (
  state: ITodosState,
  action: ReturnType<typeof TodoActions.addTodo>
): ITodosState => {
  const newTodo: ITodos = {
    id: state.todos.length + 1 + '',
    isCompleted: false,
    text: action.text,
  };
  return { ...state, todos: [newTodo, ...state.todos] };
};
const handleChangeTodoFilter = (
  state: ITodosState,
  action: ReturnType<typeof TodoActions.changeTodoFilter>
): ITodosState => ({
  ...state,
  todosFilter: action.todoFilter,
});

const handleDeleteTodo = (
  state: ITodosState,
  action: ReturnType<typeof TodoActions.deleteTodo>
): ITodosState => {
  return {
    ...state,
    todos: state.todos.filter((todo) => todo.id !== action.id),
  };
};
const handleUpdateTodo = (
  state: ITodosState,
  action: ReturnType<typeof TodoActions.updateTodo>
): ITodosState => {
  return {
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === action.id ? { ...todo, ...action.updatedProp } : todo
    ),
  };
};

export const todoReducers = createReducer(
  initialState,
  on(TodoActions.getTodos, handleGetTodos),
  on(TodoActions.getTodosSuccess, handleGetTodosSuccess),
  on(TodoActions.getTodosFailure, handleGetTodosFailure),
  on(TodoActions.addTodo, handleAddTodo),
  on(TodoActions.updateTodo, handleUpdateTodo),
  on(TodoActions.deleteTodo, handleDeleteTodo),
  on(TodoActions.changeTodoFilter, handleChangeTodoFilter)
);
