import { TodosNgrxService } from './todos-api.service';
import { TransferState, makeStateKey } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

jest.useFakeTimers();

const TODOS_KEY = makeStateKey<string>('todos');

describe('TodosNgrxService', () => {
  let todosNgrxService: TodosNgrxService;
  let transferStateMock: jest.Mocked<TransferState>;

  const mockTodos = [
    { id: '1', text: 'Todo 1', isCompleted: false },
    { id: '2', text: 'Todo 2', isCompleted: false },
    { id: '3', text: 'Todo 3', isCompleted: false },
  ];

  beforeEach(() => {
    transferStateMock = {
      get: jest.fn(),
      set: jest.fn(),
      hasKey: jest.fn(),
    } as unknown as jest.Mocked<TransferState>;
    TestBed.configureTestingModule({
      providers: [
        TodosNgrxService,
        { provide: TransferState, useValue: transferStateMock },
      ],
    });
    todosNgrxService = TestBed.inject(TodosNgrxService);
  });

  it('should be created', () => {
    expect(todosNgrxService).toBeTruthy();
  });

  it('should return todos from TransferState if available', (done) => {
    transferStateMock.get.mockReturnValue(mockTodos);
    todosNgrxService.getTodos().subscribe((todos) => {
      expect(transferStateMock.get).toHaveBeenCalledWith(TODOS_KEY, null);
      expect(todos).toEqual(mockTodos);
      done();
    });
    jest.runAllTimers();
  });

  it('should fetch todos and store them in TransferState if not available', (done) => {
    transferStateMock.get.mockReturnValue(null);
    todosNgrxService.getTodos().subscribe((todos) => {
      expect(transferStateMock.get).toHaveBeenCalledWith(TODOS_KEY, null);
      expect(transferStateMock.set).toHaveBeenCalledWith(TODOS_KEY, mockTodos);
      expect(todos).toEqual(mockTodos);
      done();
    });

    jest.runAllTimers(); // Simulate the delay
  });
});
