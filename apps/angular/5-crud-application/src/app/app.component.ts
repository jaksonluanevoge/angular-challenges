import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TodoService } from './data-access/todo.service';
import { Todo } from './model/todo.model';

@Component({
  imports: [CommonModule, MatProgressSpinnerModule],
  selector: 'app-root',
  standalone: true,
  template: `
    <mat-spinner *ngIf="todoService.loading()" diameter="30"></mat-spinner>

    <div *ngFor="let todo of todoService.todos()">
      {{ todo.title }}
      <button (click)="update(todo)">Update</button>
      <button (click)="delete(todo.id)">Delete</button>
    </div>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.loadTodos().subscribe();
  }

  update(todo: Todo) {
    const updatedTodo: Todo = { ...todo, title: 'Updated Title' };
    this.todoService.updateTodo(updatedTodo).subscribe();
  }

  delete(id: number) {
    this.todoService.deleteTodo(id).subscribe();
  }
}
