import { createSelector } from '@ngrx/store';
import { IAppState } from '../../models/app-state-interface/app-state.interface';

const selectorTodosState = (state: IAppState) => state.todos;

export const todoSelectors = {
  todos: createSelector(selectorTodosState, (state) => state.todos),
  loading: createSelector(selectorTodosState, (state) => state.loading),
  error: createSelector(selectorTodosState, (state) => state.error),
  todosFilter: createSelector(selectorTodosState, (state) => state.todosFilter),
};
