import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Todo } from '../model/todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private readonly API_URL = 'https://jsonplaceholder.typicode.com/todos';
  todos = signal<Todo[]>([]);
  loading = signal(false);

  constructor(private http: HttpClient) {}

  loadTodos() {
    this.loading.set(true);
    return this.http.get<Todo[]>(this.API_URL).pipe(
      tap((todos) => {
        this.todos.set(todos);
        this.loading.set(false);
      }),
    );
  }

  addTodo(todo: Todo) {
    this.loading.set(true);
    return this.http.post<Todo>(this.API_URL, todo).pipe(
      tap((newTodo) => {
        this.todos.update((todos) => [...todos, newTodo]);
        this.loading.set(false);
      }),
    );
  }

  updateTodo(todo: Todo) {
    this.loading.set(true);
    return this.http.put<Todo>(`${this.API_URL}/${todo.id}`, todo).pipe(
      tap((updatedTodo) => {
        this.todos.update((todos) =>
          todos.map((t) => (t.id === updatedTodo.id ? updatedTodo : t)),
        );
        this.loading.set(false);
      }),
    );
  }

  deleteTodo(id: number) {
    this.loading.set(true);
    return this.http.delete(`${this.API_URL}/${id}`).pipe(
      tap(() => {
        this.todos.update((todos) => todos.filter((t) => t.id !== id));
        this.loading.set(false);
      }),
    );
  }
}
