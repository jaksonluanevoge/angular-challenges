import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FakeHttpService } from '../../data-access/fake-http.service';
import { TeacherStore } from '../../data-access/teacher.store';
import { CardType } from '../../model/card.model';
import { CardComponent } from '../../ui/card/card.component';
import { ListItemComponent } from '../../ui/list-item/list-item.component';

@Component({
  selector: 'app-teacher-card',
  template: `
    <app-card [type]="cardType" [customClass]="'bg-light-red'">
      <img card-image src="assets/img/teacher.png" width="200" height="200" />

      <div card-list>
        <app-list-item
          *ngFor="let teacher of teachers(); trackBy: trackByFn"
          [id]="teacher.id"
          [name]="teacher.firstName"
          [type]="cardType"></app-list-item>
      </div>

      <button
        card-action
        class="rounded-sm border border-green-500 bg-green-300 p-2"
        (click)="addTeacher()">
        Add
      </button>
    </app-card>
  `,
  styles: [
    `
      ::ng-deep .bg-light-red {
        background-color: rgba(255, 0, 0, 0.1);
      }
    `,
  ],
  imports: [CardComponent, CommonModule, ListItemComponent],
})
export class TeacherCardComponent implements OnInit {
  private http = inject(FakeHttpService);
  private store = inject(TeacherStore);

  teachers = this.store.teachers;
  cardType = CardType.TEACHER;

  ngOnInit(): void {
    this.http.fetchTeachers$.subscribe((t) => this.store.addAll(t));
  }

  addTeacher(): void {
    this.http.fetchTeachers$.subscribe((teachers) => {
      const randomTeacher =
        teachers[Math.floor(Math.random() * teachers.length)];
      this.store.addOne(randomTeacher);
    });
  }

  trackByFn(index: number, item: any): number {
    return item.id;
  }
}
