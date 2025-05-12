import { Component, inject, input } from '@angular/core';
import { CityStore } from '../../data-access/city.store';
import {
  randomCity,
  randStudent,
  randTeacher,
} from '../../data-access/fake-http.service';
import { StudentStore } from '../../data-access/student.store';
import { TeacherStore } from '../../data-access/teacher.store';
import { CardType } from '../../model/card.model';

@Component({
  selector: 'app-card',
  template: `
    <div
      class="flex w-fit flex-col gap-3 rounded-md border-2 border-black p-4"
      [class]="customClass()">
      <ng-content select="[card-image]"></ng-content>

      <section>
        <ng-content select="[card-list]"></ng-content>
      </section>

      <ng-content selection="[card-action]"></ng-content>
    </div>
  `,
  imports: [],
})
export class CardComponent {
  private teacherStore = inject(TeacherStore);
  private studentStore = inject(StudentStore);
  private cityStore = inject(CityStore);

  readonly list = input<any[] | null>(null);
  readonly type = input.required<CardType>();
  readonly customClass = input('');

  addNewItem() {
    const type = this.type();
    if (type === CardType.TEACHER) {
      this.teacherStore.addOne(randTeacher());
    } else if (type === CardType.STUDENT) {
      this.studentStore.addOne(randStudent());
    } else if (type === CardType.CITY) {
      this.cityStore.addOne(randomCity());
    }
  }
}
