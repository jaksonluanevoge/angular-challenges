import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { FakeHttpService } from '../../data-access/fake-http.service';
import { StudentStore } from '../../data-access/student.store';
import { CardType } from '../../model/card.model';
import { CardComponent } from '../../ui/card/card.component';
import { ListItemComponent } from '../../ui/list-item/list-item.component';

@Component({
  selector: 'app-student-card',
  template: `
    <app-card [type]="cardType" [customClass]="'bg-light-green '">
      <img card-image src="assets/img/student.webp" width="200" height="200" />

      <div card-list>
        <app-list-item
          *ngFor="let student of students(); trackBy: trackByFn"
          [id]="student.id"
          [name]="student.firstName"
          [type]="cardType"></app-list-item>
      </div>

      <button
        card-action
        class="rounded-sm border border-green-500 bg-green-300 p-2"
        (click)="addStudent()">
        Add
      </button>
    </app-card>
  `,
  styles: [
    `
      ::ng-deep .bg-light-green {
        background-color: rgba(0, 255, 0, 0.1);
      }
    `,
  ],
  imports: [CardComponent, CommonModule, ListItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentCardComponent implements OnInit {
  private http = inject(FakeHttpService);
  private store = inject(StudentStore);

  students = this.store.students;
  cardType = CardType.STUDENT;

  ngOnInit(): void {
    this.http.fetchStudents$.subscribe((s) => this.store.addAll(s));
  }

  addStudent(): void {
    this.http.fetchStudents$.subscribe((students) => {
      const randomStudent =
        students[Math.floor(Math.random() * students.length)];
      this.store.addOne(randomStudent);
    });
  }

  trackByFn(index: number, item: any): number {
    return item.id;
  }
}
