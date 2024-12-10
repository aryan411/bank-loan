import { Injectable, makeStateKey, TransferState } from '@angular/core';
import { delay, map, Observable, of, tap } from 'rxjs';
import { ITodos } from '../../models/todos/todos.interface';

const TODOS_KEY = makeStateKey<ITodos[]>('todos');
@Injectable({
  providedIn: 'root',
})
export class TodosNgrxService {
  constructor(private transferState: TransferState) {}

  // Mock API call for getting posts
  getTodos(): Observable<ITodos[]> {
    // Check if the todos are already in TransferState (i.e., fetched on the server)
    const storedTodos = this.transferState.get(TODOS_KEY, null);
    if (storedTodos) {
      return new Observable((observer) => {
        observer.next(storedTodos);
        observer.complete();
      });
    }
    return of([
      { id: '1', text: 'Todo 1', isCompleted: false },
      { id: '2', text: 'Todo 2', isCompleted: false },
      { id: '3', text: 'Todo 3', isCompleted: false },
    ]).pipe(
      tap((todos) => this.transferState.set(TODOS_KEY, todos)),
      delay(5000)
    );
  }

  // user$: Observable<{
  //   data: { status: 'active' | 'inactive'; age: number }[];
  // }> = of({
  //   data: [
  //     { status: 'active', age: 25 },
  //     { status: 'inactive', age: 30 },
  //     { status: 'active', age: 35 },
  //     { status: 'inactive', age: 40 },
  //   ],
  // });

  // averageAge = this.user$.pipe(
  //   map((value) => {
  //     const sum = value.data.reduce((acc, current) => acc + current.age, 0);
  //     return sum / value.data.length;
  //   })
  // );
}
