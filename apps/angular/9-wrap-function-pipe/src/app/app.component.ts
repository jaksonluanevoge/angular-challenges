import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WrapFnPipe } from './wrapFn.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WrapFnPipe, CommonModule],
  template: `
    <div *ngFor="let person of persons; let index = index; let isFirst = first">
      {{ showName | wrapFn: person.name : index }}
      {{ isAllowed | wrapFn: person.age : isFirst }}
    </div>
  `,
})
export class AppComponent {
  persons = [
    { name: 'Toto', age: 10 },
    { name: 'Jack', age: 15 },
    { name: 'John', age: 30 },
  ];

  showName(name: string, index: number): string {
    return `${name} - ${index}`;
  }

  isAllowed(age: number, isFirst: boolean): string {
    if (isFirst) {
      return 'always allowed';
    } else {
      return age > 25 ? 'allowed' : 'declined';
    }
  }
}
